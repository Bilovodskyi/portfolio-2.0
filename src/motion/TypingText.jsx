import React from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant } from "./motion";

const TypingText = ({ title }) => (
    <motion.p
        variants={textContainer}
        initial="hidden"
        whileInView="show"
        className="max-[1024px]:mb-6 text-[2rem] lg:w-1/2 text-center">
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant} key={index}>
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        ))}
    </motion.p>
);

export default TypingText;
