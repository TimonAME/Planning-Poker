import React from "react";
import DropdownMenu from "./DropdownMenu";

function Lobbyname() {
    return (
        <div className={"flex items-center absolute top-3 left-8"}>
            <h1 className={"text-4xl font-bold text-primary mr-4"}>
                Lobbyname
            </h1>
            <DropdownMenu />
        </div>
    );
}

export default Lobbyname;
