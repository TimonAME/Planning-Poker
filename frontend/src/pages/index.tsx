import React from "react";
import Untertext from "../components/homepage/Untertext";
import MainText from "../components/homepage/MainText";
import NavbarProto from "../components/homepage/NavbarProto";
import SVGImage from "../components/homepage/SVGImage";

export default function Index() {
    return (
        <div className={"flex flex-col justify-between h-screen bg-text"}>
            <NavbarProto />
            <div className={
                "flex sm:flex-row flex-col justify-center items-center w-full mx-4 sm:gap-32 gap-4"}>
                <SVGImage />
                <MainText />
            </div>
            <div className="flex justify-center">
                <Untertext />
            </div>
            <div></div>
        </div>
    );
}
