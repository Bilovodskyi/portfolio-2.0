import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
    const shadow = "shadow-blue";
    return (
        <div className="h-mobile md:h-100 flex flex-col justify-center items-center">
            <div className="relative h-[350px] md:h-[500px] w-[350px] md:w-[500px] rounded-full bg-main"></div>
            <div
                className={`absolute w-[30px] md:w-[150px] h-[30px] md:h-[150px] rounded-full ${shadow} z-[-1] top-0 bottom-40 m-auto`}
            />
            <h1 className="uppercase absolute text-[1rem] md:text-[2rem] tracking-[1em] md:tracking-[1.5em]">
                Coming soon
            </h1>
            <div className="absolute top-[80%] md:top-[83%] flex flex-col gap-[20px] md:gap-[10px]">
                <h1 className="text-[1.2rem] text-[#8083FE] text-center opacity-50">
                    This project will be ready soon
                </h1>
                <Link to={-1}>
                    <h1 className="text-[.9rem] text-[#8083FE] text-center opacity-50 cursor-pointer">
                        Back to projects
                    </h1>
                </Link>
            </div>
        </div>
    );
};

export default ComingSoon;
