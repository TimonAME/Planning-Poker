import React from "react";
import HelloWorld from "../components/HelloWorld";
import { Link } from "gatsby";

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
            <Link
                to={"/prototype"}
                className={
                    "font-medium text-blue-600 dark:text-blue-500 hover:underline flex flex-col justify-center items-center"
                }
            >
                prototype
            </Link>
        </div>
    );
}

export default Index;
