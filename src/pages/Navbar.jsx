import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCastomContext } from "../context/useContext";

const Navbar = () => {
    const { active, setActive } = useCastomContext();

    const navigate = useNavigate();
    return (
        <nav className="sticky top-0 flex bg-dark-main h-[60px] md:h-[40px] border-b-2 border-light-main z-10">
            <div
                className={`h-[60px] md:h-[40px] w-[180px] flex justify-center items-center cursor-pointer border-r-2 border-light-main ${
                    active === 1 &&
                    "bg-main border-b-2 border-b-main border-t-[3px] border-t-pink text-gold"
                }`}
                onClick={() => {
                    setActive(1);
                    navigate("/");
                }}>
                _hello
            </div>
            <div
                className={`h-[60px] md:h-[40px] w-[180px] flex justify-center items-center cursor-pointer border-r-2 border-light-main ${
                    active === 2 &&
                    "bg-main border-b-2 border-b-main border-t-[3px] border-t-pink text-gold"
                }`}
                onClick={() => {
                    setActive(2);
                    navigate("/skills");
                }}>
                _skills
            </div>
            <div
                className={`h-[60px] md:h-[40px] w-[180px] flex justify-center items-center cursor-pointer border-r-2 border-light-main ${
                    active === 3 &&
                    "bg-main border-b-2 border-b-main border-t-[3px] border-t-pink text-gold"
                }`}
                onClick={() => {
                    setActive(3);
                    navigate("/my-projects");
                }}>
                _projects
            </div>
        </nav>
    );
};

export default Navbar;
