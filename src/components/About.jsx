import React from "react";
import TypingText from "../motion/TypingText";
import AboutCard from "./AboutCard";

const About = () => {
    return (
        <div
            className="w-full flex flex-col md:pl-[35px] md:px-[35px] xl:px-[80px] gap-24 md:gap-52 md:my-[40px] relative"
            id="path-to">
            <div className="w-[3px] h-[100%] absolute bg-[#fff] left-[50%] max-[1024px]:hidden" />
            <div className="flex max-[1024px]:flex-col justify-between items-center mt-[40px] md:mt-[130px]">
                <TypingText title="_my life path" />
                <AboutCard
                    shadow={"shadow-green"}
                    style="w-[340px] sm:w-[400px] md:w-[450px] xl:w-[550px] h-[550px] md:h-[350px]">
                    I was born in Ukraine. In 2017 I moved to Warsaw to go to
                    university. I received a bachelor's degree in finance and
                    accounting. In September 2022, I moved to Vancouver
                </AboutCard>
                <div className="w-[20px] h-[20px] bg-[#fff] rounded-[10px] absolute left-[calc(50%-8.5px)] max-[1024px]:hidden" />
            </div>
            <div className="flex max-[1024px]:flex-col-reverse justify-between items-center">
                <AboutCard
                    shadow={"shadow-blue"}
                    style="w-[340px] sm:w-[400px] md:w-[450px] xl:w-[550px] h-[550px] md:h-[350px]">
                    My hobbies is: spending time in nature (hiking, camping),
                    sport (running, swimming, gym) and riding books.
                </AboutCard>
                <TypingText
                    title="_personal info"
                    hidden={"max-[1024px]:hidden"}
                />
                <div className="w-[20px] h-[20px] bg-[#fff] rounded-[10px] absolute left-[calc(50%-8.5px)] max-[1024px]:hidden" />
            </div>
            <div className="flex max-[1024px]:flex-col justify-between items-center mb-[75px] md:mb-[130px]">
                <TypingText title="_motivation" />
                <AboutCard
                    shadow={"shadow-pink"}
                    style="w-[340px] sm:w-[400px] md:w-[450px] xl:w-[550px] h-[550px] md:h-[350px]">
                    Programming is the most exciting activity I have encountered
                    in my life, so I am enthusiastic to open the door of a new
                    life experience, and to work in a team of people for whom
                    programming is a passion, to improve my personal and
                    professional skills.
                </AboutCard>
                <div className="w-[20px] h-[20px] bg-[#fff] rounded-[10px] absolute left-[calc(50%-8.5px)] max-[1024px]:hidden" />
            </div>
        </div>
    );
};

export default About;
