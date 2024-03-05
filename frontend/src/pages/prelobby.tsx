import React from "react";
import Navbar from "../components/prelobby/Navbar";
import Lobbyname from "../components/prelobby/Lobbyname";

export default function Index() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            {/* dotted background from: https://bg.ibelick.com/ */}
            <div
                className={
                    "flex flex-col justify-between overflow-hidden"
                }
            >
                <Navbar />
            </div>
            <div className={"flex flex-row justify-start ml-10"}>
                <Lobbyname />
            </div>
        </div>
    );
}
