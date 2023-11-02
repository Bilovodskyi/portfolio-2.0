import React from "react";
import { useRef } from "react";
import AboutCard from "./AboutCard";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const SkillsFeatured = () => {
    const firstCardRef = useRef();
    const secondCardRef = useRef();

    const randomColor = (ref) => {
        if (window.innerWidth > 768) {
            const colors = [
                "rgba(112,229,117,0.2)",
                "rgba(250,143,121,0.2)",
                "rgba(128,131,254,0.2)",
            ];
            const color = colors[Math.floor(Math.random() * 3)];
            ref.current.style.setProperty("--color", color);
        } else {
            return;
        }
    };

    const handleOnMouseMove = (e, ref) => {
        if (window.innerWidth > 768) {
            const rect = ref.current.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            ref.current.style.setProperty("--mouse-x", `${x}px`);
            ref.current.style.setProperty("--mouse-y", `${y}px`);
        } else {
            return;
        }
    };

    const handleHover = (e, ref) => {
        if (window.innerWidth > 768) {
            const THRESHOLD = 3;

            const { clientX, clientY, currentTarget } = e;
            const { clientWidth, clientHeight, offsetLeft, offsetTop } =
                currentTarget;

            const horizontal = (clientX - offsetLeft) / clientWidth;
            const vertical = (clientY - offsetTop) / clientHeight;

            const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
            const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
            ref.current.style.setProperty(
                "--moving",
                `perspective(${clientWidth}px) rotateX(${rotateY}deg)
        rotateY(${rotateX}deg) scale3d(1, 1, 1)`
            );
        } else {
            return;
        }
    };
    const resetStyles = (e, ref) => {
        ref.current.style.setProperty(
            "--moving",
            `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg)
        rotateY(0deg)`
        );
        console.log("leave");
    };

    return (
        <div className="lg:h-100 p-[20px] md:p-[60px] md:pb-[125px] lg:flex justify-around relative">
            <div
                ref={firstCardRef}
                onMouseMove={(e) => {
                    handleOnMouseMove(e, firstCardRef);
                    handleHover(e, firstCardRef);
                }}
                onMouseEnter={() => randomColor(firstCardRef)}
                onMouseLeave={(e) => resetStyles(e, firstCardRef)}
                className="featured-card relative lg:w-[40%] h-[600px] lg:h-full bg-dark-card rounded-[10px] border border-light-main overflow-hidden max-[1026px]:my-[25px]">
                <div className="p-[60px] pb-[0px]">
                    <h1 className="text-[1.2rem] mb-[25px]">
                        _featured skills
                    </h1>
                    <p className="max-[756px]:text-[0.75rem]">
                        my featured technical skills, that helps me build awesom
                        websites
                    </p>
                </div>
                <AboutCard style="top-[13%] sm:max-xl:top-[19%] xl:top-[7%] sm:max-lg:m-auto sm:max-lg:right-[5%] right-[-30px] opacity-30 w-[450px] xl:w-[500px] h-[270px] xl:h-[300px] z-[3]" />

                <AboutCard style="top-[-28%] sm:max-xl:top-[-22%] xl:top-[-40%] sm:max-lg:m-auto sm:max-lg:right-[0] right-[-60px] w-[450px] xl:w-[500px] h-[270px] xl:h-[300px] z-[3]">
                    Skills of working with Front-end technologies like: React,
                    JavaScript, TypeScript. <br /> Back-end skills: Express.js
                </AboutCard>
            </div>
            <div
                ref={secondCardRef}
                onMouseMove={(e) => {
                    handleOnMouseMove(e, secondCardRef);
                    handleHover(e, secondCardRef);
                }}
                onMouseEnter={() => randomColor(secondCardRef)}
                onMouseLeave={(e) => resetStyles(e, secondCardRef)}
                className="featured-card relative lg:w-[40%] h-[600px] lg:h-full bg-dark-card rounded-[10px] border border-light-main flex flex-col justify-between items-center overflow-hidden">
                <div className="p-[60px] pb-[0px]">
                    <h1 className="text-[1.2rem] mb-[25px]">_soft skills</h1>
                    <p className="max-[756px]:text-[0.75rem]">
                        _my soft skills, that makes me perfect suits for your
                        company
                    </p>
                </div>
                <div className="w-[350px] sm:w-[450px] xl:w-[550px] h-[250px] xl:h-[300px] mb-[30px] bg-card flex flex-col justify-end items-center relative max-[1025px]:m-auto sm:max-lg:left-[0] left-[20px] sm:left-[40px] z-[3]">
                    <div className="h-[50px] w-full flex justify-between items-center bg-light-main pl-[20px]">
                        just a few of many
                    </div>
                    <div className="w-full h-[90%] border border-light-main grid grid-cols-2 grid-rows-4">
                        <Field skill={"Bias for action"} />
                        <Field skill={"Critical thinking"} />
                        <Field skill={"Team player"} />
                        <Field skill={"Problem solving"} />
                        <Field skill={"Time management"} />
                        <Field skill={"Adaptability"} />
                        <Field skill={"Empathy"} />
                        <Field skill={"Friendly personality"} />
                    </div>
                </div>
            </div>

            <div className="hidden lg:block absolute left-0 right-0 bottom-[50px] cursor-pointer">
                <a
                    href="#skills"
                    className="flex justify-center items-center gap-[8px] text-[1rem]">
                    <HiOutlineChevronDoubleDown className="text-[1.5rem]" />
                    explore all skills
                </a>
            </div>
        </div>
    );
};

const Field = ({ skill }) => {
    return (
        <div className="border-[1px] border-light-main flex items-center">
            <div className="w-[18px] h-[18px] mx-[10px] rounded-[10px] border border-light-main bg-green flex items-center justify-center">
                <img src="plus.png" alt="plus" className="h-[50%]" />
            </div>
            {skill}
        </div>
    );
};

export default SkillsFeatured;
