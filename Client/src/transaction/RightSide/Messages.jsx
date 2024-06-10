import React, { useContext, useEffect, useState, useRef, useLayoutEffect } from "react";
import Message from "./Message";
import { CurrentTransactionUserContext, SocketContext, TransactionListContext } from "../../../globalAttributes";

export default function Messages() {
    const { currentTransactionUser } = useContext(CurrentTransactionUserContext);
    const { transactionList, setTransactionList } = useContext(TransactionListContext);
    const { socket } = useContext(SocketContext);

    const [isListenerBound, setIsListenerBound] = useState(false);
    const messageContainerRef = useRef(null);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    const convertToIST = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    useEffect(() => {
        if (socket && !isListenerBound) {
            socket.on("transaction-added", (data) => {
                setTransactionList((prev) => [...prev, data]);
            });
            setIsListenerBound(true);
        }
    }, [socket, isListenerBound]);

    useEffect(() => {
        async function loadData() {
            const res = await fetch("http://localhost:9507/transaction/loadTransactions", {
                method: "POST",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ recieverEmail: currentTransactionUser.email })
            });
            const data = await res.json();
            setTransactionList(data.data || []);
        }

        if (currentTransactionUser.hasOwnProperty("username")) {
            loadData();
        }
    }, [currentTransactionUser]);

    useLayoutEffect(() => {
        setTimeout(() => {
            if (messageContainerRef.current) {
                messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
            }
        }, 0);
    }, [transactionList]);

    useEffect(() => {
        filterTransactions();
    }, [startDate, endDate, transactionList]);

    const filterTransactions = () => {
        if (!Array.isArray(transactionList)) return;

        const start = new Date(startDate);
        const end = new Date(endDate);
        const filtered = transactionList.filter(transaction => {
            const transactionDate = new Date(transaction.createdAt);
            return (!startDate || transactionDate >= start) && (!endDate || transactionDate <= end);
        });
        setFilteredTransactions(groupTransactionsByDate(filtered));
    };

    const groupTransactionsByDate = (transactions) => {
        const grouped = transactions.reduce((acc, transaction) => {
            const date = new Date(transaction.createdAt).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(transaction);
            return acc;
        }, {});
        return Object.keys(grouped).sort((a, b) => new Date(a) - new Date(b)).map(date => ({ date, transactions: grouped[date] }));
    };

    return (
        <div className="h-[100%]">
            <div className="usermessage h-[86%] overflow-x-hidden overflow-y-auto" ref={messageContainerRef}>
                {currentTransactionUser.hasOwnProperty("email") && filteredTransactions.length
                    ? filteredTransactions.map(({ date, transactions }) => (
                        <div key={date}>
                            <div className="flex justify-center">
                                <span className="date-span bg-[color:var(--header)] m-1 p-1 rounded-md">{date}</span>
                            </div>

                            {transactions.map((list) => (
                                <Message
                                    key={list._id}
                                    time={convertToIST(list.createdAt)}
                                    isLeft={currentTransactionUser.email === list.sendBy}
                                    amount={list.amount}
                                    note={list.note}
                                />
                            ))}
                        </div>
                    ))
                    : <></>}
            </div>
        </div>
    );
}
