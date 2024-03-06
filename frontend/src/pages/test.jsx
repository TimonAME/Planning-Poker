import { Link } from "gatsby";
import React from "react";

function Test() {
    return (
        <div className={"flex h-screen justify-center items-center"}>
            <Link
                to={"/"}
                className={
                    "font-medium text-blue-600 dark:text-blue-500 hover:underline"
                }
            >
                Home
            </Link>
        </div>
    );
}

export default Test;
