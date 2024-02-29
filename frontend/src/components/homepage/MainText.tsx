import React from "react";

export default function MainText() {
    return (
        <div className="flex flex-col sm:w-1/3">
            <div className="flex justify-center items-center text-left">
                <div>
                    <h1 className="text-sm font-mono uppercase mb-4 text-primary">
                        Scrum planning poker for agile teams
                    </h1>
                    <h2 className="text-5xl font-bold mb-4 text-primary">
                        Planning Poker
                    </h2>
                    <p className="text-sm text-primary">
                        The Planning Poker tool allows teams to estimate the
                        effort for tasks by using special cards collectively.
                    </p>
                </div>
            </div>
            <div className={"mt-5"}>
                <a
                    className="inline-block py-2 px-6 bg-button hover:bg-buttonhover text-sm text-white
                    font-bold rounded-xl transition duration-200"
                    href="/"
                >
                    Start Game
                </a>
            </div>
        </div>
    );
}
