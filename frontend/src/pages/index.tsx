import React from "react";
import Untertext from "../components/homepage/Untertext";
import MainText from "../components/homepage/MainText";
import NavbarProto from "../components/homepage/NavbarProto";
import SVGImage from "../components/homepage/SVGImage";

export default function Index() {
    return (
        <div className={"flex flex-col justify-between h-screen bg-text"}>
            <NavbarProto />
            <div className={"flex sm:flex-row flex-col justify-center items-center gap-32"}>
                <SVGImage />
                <MainText />
            </div>
            <div className="flex justify-center max-w-1/4">
                <Untertext />
            </div>
            <div></div>
        </div>
    );
}
