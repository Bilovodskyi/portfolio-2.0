import React from "react";
import { fadeIn } from "../motion/motion";
import { motion } from "framer-motion";

const AboutCard = ({ shadow, children, style }) => {
    return (
        <>
            <div
                className={`${style} bg-card rounded-[10px] border border-light-main flex flex-col justify-around items-center p-[10px] md:p-[20px] relative`}>
                <div className="w-full flex justify-between items-center max-[450px]:gap-[40px]">
                    <div className="flex items-center gap-1 h-[30px]">
                        <div className="w-[15px] h-[15px] rounded-[10px] border border-light-main bg-red"></div>
                        <div className="w-[15px] h-[15px] rounded-[10px] border border-light-main bg-yellow"></div>
                        <div className="w-[15px] h-[15px] rounded-[10px] border border-light-main bg-green"></div>
                    </div>
                    <div className="max-[768px]:text-[0.75rem]">
                        portfolio/about-me/life
                    </div>
                </div>
                <div className="w-full h-[90%] rounded-[10px] border border-light-main">
                    {children}
                </div>

                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    className={`absolute w-[20px] h-[20px] rounded-[50%] ${shadow} z-[-1] md:top-0 bottom-40 md:bottom-0 m-[auto]`}
                />
            </div>
        </>
    );
};

export default AboutCard;
