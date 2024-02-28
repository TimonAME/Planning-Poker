import React from "react";
import Untertext from "../components/prototype/Untertext";
import MainText from "../components/prototype/MainText";
import NavbarProto from "../components/prototype/NavbarProto";
import SVGImage from "../components/prototype/SVGImage";

export default function Prototype() {
    return (
        <div className={"flex flex-col justify-between h-screen bg-text"}>
            <NavbarProto />
            <div className={"flex justify-center items-center gap-32"}>
                <SVGImage />
                <MainText />
            </div>
            <div className="flex justify-center max-w1/4">
                <Untertext />
            </div>
            <div></div>
        </div>
    );
}
