import React, { useState, useEffect } from "react";
import { animationIn, container, fadeIn } from "../motion/motion";
import { motion } from "framer-motion";
import AnimatedText from "../motion/AnimatedText";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Hello = () => {
    const [playMarquee, setPlayMarquee] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPlayMarquee(true);
            console.log(playMarquee);
        }, 3500);
    }, []);

    return (
        <div className="flex h-mobile lg:h-100 max-[1024px]:flex-col-reverse max-[1024px]:justify-around relative">
            <div className="lg:w-1/2 ml-6 md:ml-40 flex flex-col justify-center items-start">
                {/* <p className="w-full text-[1rem]">hello, I'm</p> */}
                <AnimatedText
                    title="hello, I'm"
                    style="flex w-full text-[1rem] overflow-hidden"
                />
                <AnimatedText
                    title="Bohdan"
                    style="flex text-[2.5rem] md:text-[4rem] w-full overflow-hidden"
                />
                <AnimatedText
                    title="Bilovodskyi"
                    style="flex text-[2.5rem] md:text-[4rem] w-full overflow-hidden"
                />
                <div
                    className={`marquee ${
                        playMarquee && "marqueeActive"
                    } w-1/2 md:w-1/3 flex gap-[30px] overflow-hidden`}>
                    <AnimatedText
                        title="Front-end-developer"
                        style="marquee_inner text-purple flex text-[1.25rem]"
                    />
                    <AnimatedText
                        title="Front-end-developer"
                        style="marquee_inner text-purple flex text-[1.25rem]"
                        disabled
                    />
                    <AnimatedText
                        title="Front-end-developer"
                        style="marquee_inner text-purple flex text-[1.25rem]"
                        disabled
                    />
                </div>
            </div>
            <motion.div
                variants={container(0.35)}
                initial="hidden"
                animate="show"
                className="lg:w-1/2 flex justify-center items-center">
                <motion.div
                    variants={fadeIn}
                    className="h-[400px] lg:h-[60%] relative">
                    <img
                        src="bg-main.png"
                        alt="main background"
                        className="h-[100%]"
                    />
                </motion.div>
                <motion.div
                    variants={fadeIn}
                    className="h-[65%] lg:h-[80%] absolute top-0">
                    <img src="my-img.png" alt="my photo" className="h-[100%]" />
                </motion.div>
                <motion.div
                    variants={animationIn}
                    className="hidden xl:block absolute w-[60px] top-[430px] right-[70px]">
                    <img src="js.png" alt="js" />
                </motion.div>
                <motion.div
                    variants={animationIn}
                    className="hidden xl:block absolute w-[60px] top-[230px] right-[500px]">
                    <img src="typescript.png" alt="ts" />
                </motion.div>
                <motion.div
                    variants={animationIn}
                    className="hidden xl:block absolute w-[60px] top-[150px] right-[100px]">
                    <img src="react.png" alt="react" />
                </motion.div>
                <motion.div
                    variants={animationIn}
                    className="hidden xl:block absolute w-[60px] top-[510px] right-[440px]">
                    <img src="python.png" alt="python" />
                </motion.div>
            </motion.div>
            <a href="#path-to">
                <div className="absolute max-[1024px]:hidden left-0 right-0 bottom-[50px] flex justify-center items-center gap-[8px] text-[1rem] cursor-pointer">
                    <HiOutlineChevronDoubleDown className="text-[1.5rem]" />
                    explore all skills
                </div>
            </a>
        </div>
    );
};

export default Hello;
