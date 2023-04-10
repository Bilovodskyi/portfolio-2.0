import { container, animationIn, letterAnimation } from "./motion";
import { motion } from "framer-motion";

const AnimatedLetters = ({ title, style, disabled }) => (
    <motion.div
        variants={disabled ? null : container(0.15)}
        initial="hidden"
        animate="show"
        className={style}>
        {[...title].map((letter, index) => (
            <motion.span
                key={index}
                variants={disabled ? null : letterAnimation}>
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        ))}
    </motion.div>
);

export default AnimatedLetters;
