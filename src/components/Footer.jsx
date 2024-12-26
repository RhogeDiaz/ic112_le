import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="p-4 flex justify-between border-t mt-44">
            <div className="self-start flex flex-col justify-center">
                <h1 className="font-bold text-md">Rhoge Vhir A. Diaz</h1>
                <div className="flex items-center gap-2 text-sm">December 2024</div>
            </div>
            <div className="flex flex-wrap gap-20 justify-end items-center">
                <div className="flex flex-col gap-4">
                    <Link to="/references">References</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
