import React from "react";
import HelloWorld from "../components/HelloWorld";

function Index() {
    return (
        <div>
            <h1
                className={
                    "flex flex-col justify-center items-center text-3xl font-bold"
                }
            >
                Test
            </h1>
            <h2
                className={
                    "flex flex-col justify-center items-center text-xl font-bold"
                }
            >
                <HelloWorld />
            </h2>

        </div>
    );
}

export default Index;
