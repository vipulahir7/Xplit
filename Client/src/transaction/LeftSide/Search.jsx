import React from "react";
import InputField from "../../login/InputField";
import {FaSearch} from "react-icons/fa";

export default function Search(){
    return(
        <div>
            <form className="flex justify-center mt-2 gap-3 w-[100%] ">
                <InputField id="search" name="" placeHolder="Search" type="search"/> 
                <button className="text-2xl"><FaSearch/></button>
            </form>
        </div>
    )
}