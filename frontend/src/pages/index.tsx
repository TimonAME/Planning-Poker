import React from "react";
import {Link} from "gatsby";

function Index() {
    return (
        <div>
            <h1
                className={
                    "flex justify-center items-center h-screen text-3xl font-bold"
                }
            >
                Test
            </h1>
            <Link to="/hallo">Hallo</Link>
        </div>
    );
}

export default Index;
