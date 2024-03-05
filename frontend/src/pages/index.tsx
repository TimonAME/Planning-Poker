import React from "react";
import Untertext from "../components/homepage/Untertext";
import MainText from "../components/homepage/MainText";
import NavbarProto from "../components/homepage/NavbarProto";
import SVGImage from "../components/homepage/SVGImage";

export default function Index() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            {/* dotted background from: https://bg.ibelick.com/ */}
            <div
                className={
                    "flex flex-col justify-between h-screen overflow-hidden"
                }
            >
                <NavbarProto />
                <div
                    className={
                        "flex sm:flex-row flex-col justify-center items-center w-full sm:gap-32 gap-4"
                    }
                >
                    <SVGImage />
                    <MainText />
                </div>
                <div className="flex justify-center">
                    <Untertext />
                </div>
                <div></div>
            </div>
        </div>
    );
}
