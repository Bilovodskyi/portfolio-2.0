import React from "react";
import TypingText from "../motion/TypingText";
import AboutCard from "./AboutCard";

const About = () => {
    return (
        <div
            className="w-full flex flex-col pl-[35px] md:px-[35px] xl:px-[80px] gap-24 md:gap-52 md:my-[40px] relative"
            id="path-to">
            <div className="w-[3px] h-[100%] absolute bg-[#fff] left-[20px] lg:left-[50%]" />
            <div className="flex max-[1024px]:flex-col justify-between items-center mt-[130px]">
                <TypingText title="_my life path" />
                <AboutCard
                    shadow={"shadow-green"}
                    style="w-[340px] sm:w-[400px] md:w-[450px] xl:w-[550px] h-[550px] md:h-[350px]"
                />
                <div className="w-[20px] h-[20px] bg-[#fff] rounded-[10px] absolute left-[12px] lg:left-[calc(50%-8.5px)] max-[768px]:top-[450px] max-[1024px]:top-[350px]" />
            </div>
            <div className="flex max-[1024px]:flex-col max-[1024px]:flex-col-reverse justify-between items-center">
                <AboutCard
                    shadow={"shadow-blue"}
                    style="w-[340px] sm:w-[400px] md:w-[450px] xl:w-[550px] h-[550px] md:h-[350px]"
                />
                <TypingText
                    title="_personal info"
                    hidden={"max-[1024px]:hidden"}
                />
                <div className="w-[20px] h-[20px] bg-[#fff] rounded-[10px] absolute left-[12px] lg:left-[calc(50%-8.5px)] max-[768px]:top-[1185px] max-[1024px]:top-[1000px]" />
            </div>
            <div className="flex max-[1024px]:flex-col justify-between items-center mb-[130px]">
                <TypingText title="_motivation" />
                <AboutCard
                    shadow={"shadow-pink"}
                    style="w-[340px] sm:w-[400px] md:w-[450px] xl:w-[550px] h-[550px] md:h-[350px]"
                />
                <div className="w-[20px] h-[20px] bg-[#fff] rounded-[10px] absolute left-[12px] lg:left-[calc(50%-8.5px)] max-[768px]:top-[1900px] max-[1024px]:top-[1625px]" />
            </div>
        </div>
    );
};

export default About;
