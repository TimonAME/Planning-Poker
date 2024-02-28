import React from "react";
import HelloWorld from "../components/HelloWorld";

function Index() {
    return (
        <div>
            <h1
                className={
                    "flex flex-col justify-center items-center h-screen text-3xl font-bold"
                }
            >
                Test
                <HelloWorld />
            </h1>

        </div>
    );
}

export default Index;
