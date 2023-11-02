import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCastomContext } from "../context/useContext";
import { FaHome } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

const Navbar = () => {
    const { active, setActive } = useCastomContext();

    const navigate = useNavigate();
    return (
        <nav className="sticky top-0 flex bg-dark-main h-[50px] md:h-[40px] border-b-2 border-light-main z-10">
            <div
                className={`h-[50px] md:h-[40px] w-1/6 md:w-[180px] flex justify-center items-center cursor-pointer border-r-2 border-light-main ${
                    active === 1 &&
                    "bg-main border-b-2 border-b-main border-t-[3px] border-t-pink text-gold"
                }`}
                onClick={() => {
                    setActive(1);
                    navigate("/");
                }}>
                <h1 className="hidden md:block">_hello</h1>
                <FaHome className="text-[1.25rem] block md:hidden" />
            </div>
            <div
                className={`h-[50px] md:h-[40px] w-1/6 md:w-[180px] flex justify-center items-center cursor-pointer border-r-2 border-light-main ${
                    active === 2 &&
                    "bg-main border-b-2 border-b-main border-t-[3px] border-t-pink text-gold"
                }`}
                onClick={() => {
                    setActive(2);
                    navigate("/skills");
                }}>
                <h1 className="hidden md:block">_skills</h1>
                <FaBrain className="text-[1.25rem] block md:hidden" />
            </div>
            <div
                className={`h-[50px] md:h-[40px] w-1/6 md:w-[180px] flex justify-center items-center cursor-pointer border-r-2 border-light-main ${
                    active === 3 &&
                    "bg-main border-b-2 border-b-main border-t-[3px] border-t-pink text-gold"
                }`}
                onClick={() => {
                    setActive(3);
                    navigate("/my-projects");
                }}>
                <h1 className="hidden md:block">_projects</h1>
                <FaBriefcase className="text-[1.25rem] block md:hidden" />
            </div>
            <div
                className={`h-[50px] flex md:hidden justify-center items-center border-r-2 border-light-main w-3/6 cursor-pointer ${
                    active === 4 &&
                    "bg-main border-b-2 border-b-main border-t-[3px] border-t-pink text-gold"
                }`}
                onClick={() => {
                    setActive(4);
                    navigate("/contact");
                }}>
                _higher me
            </div>
        </nav>
    );
};

export default Navbar;
