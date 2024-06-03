import React from "react";
import InputField from "../../login/InputField";
import {FaSearch} from "react-icons/fa";

export default function Search(){
    return(
        <form className="flex justify-center items-center h-[10%] gap-3 w-[100%] ">
            <InputField id="search" name="" placeHolder="Search" type="search"/> 
            <button className="text-2xl"><FaSearch/></button>
        </form>
    )
}