import React from "react";
import { useNavigate } from "react-router-dom";
import { useCastomContext } from "../context/useContext";

const Footer = () => {
    const { active, setActive } = useCastomContext();

    const navigate = useNavigate();
    return (
        <div className="sticky bottom-0 flex justify-between bg-dark-main h-[60px] md:h-[40px] border-t-2 border-light-main">
            <div className="flex max-[768px]:w-[100%]">
                <div
                    className={`flex justify-center items-center border-r-2 border-light-main w-3/6 md:w-[120px] cursor-pointer ${
                        active === 4 && "text-gold"
                    }`}
                    onClick={() => {
                        setActive(4);
                        navigate("/contact");
                    }}>
                    _higher me
                </div>
                <div className="flex justify-center items-center border-r-2 border-light-main w-1/6 md:w-[60px] cursor-pointer">
                    <img
                        src="../public/github.png"
                        alt="github"
                        className="h-[20px] w-[20px]"
                    />
                </div>
                <div className="flex justify-center items-center border-r-2 border-light-main w-1/6 md:w-[60px] cursor-pointer">
                    <img
                        src="../public/linkedin.png"
                        alt="linked in"
                        className="h-[20px] w-[20px]"
                    />
                </div>
                <div className="flex justify-center items-center border-r-2 border-light-main w-1/6 md:w-[60px] text-[1.5rem] cursor-pointer">
                    CV
                </div>
            </div>
            <p className="hidden md:flex justify-center items-center pr-[20px]">
                bilovodskyi@gmail.com
            </p>
        </div>
    );
};

export default Footer;
