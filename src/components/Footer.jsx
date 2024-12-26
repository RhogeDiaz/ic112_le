import React from "react"

const Footer = () => {
    return (
        <div className='p-4 flex justify-between border-t'>
            <div className=" self-start flex flex-col">
                <h1 className="font-bold text-xl">
                    Rhoge Vhir A. Diaz
                </h1>
                <div className="flex items-center gap-2">
                    December 2024
                </div>
            </div>
            <div className='flex flex-wrap gap-20 justify-end'>
                <div className="flex flex-col gap-4 mb-8">
                    <strong>References</strong>
                    <a href="">Instagram</a>
                    <a href="">Facebook</a>
                    <a href="">TikTok</a>
                </div>
            </div>
        </div>
    )
}

export default Footer