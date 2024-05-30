import React from "react";

export default function Message(){
    return(
        <div>
            <div className="flex justify-end mr-3">
                <div className="bg-[color:var(--primary-btn)] text-lg p-2 rounded-lg">Hiii</div>
            </div>
            <div className="flex justify-start ml-3">
                <div className="bg-[color:var(--primary-btn)] text-lg p-2 rounded-lg">Hello</div>
            </div>
        </div>
    )
}