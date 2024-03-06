import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
    return (
        <nav className="relative px-4 py-4 flex justify-center items-center h-16 lg:gap-48 md:gap-28">
            <ul className="flex items-center gap-6">
                <li>
                    <Link to="/" className="text-sm text-primary font-bold">
                        Home
                    </Link>
                </li>
                {/*
                <li className="text-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        className="w-4 h-4 current-fill"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>
                */}
                <li>
                    <Link
                        to="#"
                        className="text-sm text-gray-400 hover:text-gray-500"
                    >
                        Documentation
                    </Link>
                </li>
                {/*
                <li className="text-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        className="w-4 h-4 current-fill"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>
                */}
                <li>
                    <Link
                        to="#"
                        className="text-sm text-gray-400 hover:text-gray-500"
                    >
                        Settings
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
