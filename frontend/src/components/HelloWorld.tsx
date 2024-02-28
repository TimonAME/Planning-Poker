// src/components/HelloWorld.js

import React, {useState} from "react"
const HelloWorld = () => {

    const [count, setCount] = useState(0);

    // Function to increment count
    const incrementCount = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
                    onClick={incrementCount}>Click me
            </button>
        </>
    )
}

export default HelloWorld