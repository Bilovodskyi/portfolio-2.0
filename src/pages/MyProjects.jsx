import React, { useState, createRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/data";
import { motion } from "framer-motion";
import { container, animationIn } from "../motion/motion";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const MyProjects = () => {
    const [pickedProject, setPickedProject] = useState("all");
    const refs = {};

    projects.forEach((project) => {
        refs[project.id] = createRef(null);
    });
    console.log(refs);

    const handleOnMouseMove = (e, ref) => {
        const x = e.clientX;
        const y = e.clientY;

        ref.current.style.setProperty("--project-mouse-x", `${x}px`);
        ref.current.style.setProperty("--project-mouse-y", `${y}px`);
    };

    return (
        <div className="flex">
            <div className="sticky top-[40px] w-full md:w-[360px] max-[768px]:pt-[40px] p-[20px] xl:p-[40px] h-100 bg-card flex flex-col items-center lg:block">
                <div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-[7px]">
                            <FaChevronDown className="text-[0.6rem]" />
                            <p>filter_by_technology</p>
                        </div>
                        <div
                            className="flex items-center gap-[7px] cursor-pointer"
                            onClick={() => setPickedProject("all")}>
                            <img
                                src="document.png"
                                alt="all"
                                className="h-[12px]"
                            />
                            <p>All</p>
                        </div>
                    </div>
                    <div className="p-[20px]">
                        <div className="flex items-center gap-[7px]">
                            <FaChevronDown className="text-[0.6rem]" />
                            <p>front-end</p>
                        </div>

                        <div className="flex flex-col gap-[30px] md:gap-[15px] p-[25px]">
                            <div
                                className="flex items-center gap-[10px] cursor-pointer"
                                onClick={() =>
                                    pickedProject === "react"
                                        ? setPickedProject("all")
                                        : setPickedProject("react")
                                }>
                                {pickedProject === "react" ? (
                                    <FaChevronDown className="md:hidden text-[0.6rem]" />
                                ) : (
                                    <FaChevronRight className="md:hidden text-[0.6rem]" />
                                )}
                                <img
                                    src="react-p.png"
                                    alt="person"
                                    className="h-[20px]"
                                />
                                <p>react-projects</p>
                            </div>
                            {pickedProject === "react" && (
                                <MobileProjects pickedProject={pickedProject} />
                            )}
                            <div
                                className="flex items-center gap-[10px] cursor-pointer"
                                onClick={() =>
                                    pickedProject === "typescript"
                                        ? setPickedProject("all")
                                        : setPickedProject("typescript")
                                }>
                                {pickedProject === "typescript" ? (
                                    <FaChevronDown className="md:hidden text-[0.6rem]" />
                                ) : (
                                    <FaChevronRight className="md:hidden text-[0.6rem]" />
                                )}
                                <img
                                    src="typescript-p.png"
                                    alt="person"
                                    className="h-[20px]"
                                />
                                <p>react-typescript-projects</p>
                            </div>
                            {pickedProject === "typescript" && (
                                <MobileProjects pickedProject={pickedProject} />
                            )}
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <FaChevronDown className="text-[0.6rem]" />
                            <p>full-stack</p>
                        </div>

                        <div className="flex flex-col gap-[30px] md:gap-[15px] p-[25px]">
                            <div
                                className="flex items-center gap-[10px] cursor-pointer"
                                onClick={() =>
                                    pickedProject === "next.js"
                                        ? setPickedProject("all")
                                        : setPickedProject("next.js")
                                }>
                                {pickedProject === "next.js" ? (
                                    <FaChevronDown className="md:hidden text-[0.6rem]" />
                                ) : (
                                    <FaChevronRight className="md:hidden text-[0.6rem]" />
                                )}
                                <img
                                    src="nextjs-p.png"
                                    alt="linkedIn"
                                    className="h-[20px]"
                                />
                                <p>next.js-projects</p>
                            </div>
                            {pickedProject === "next.js" && (
                                <MobileProjects pickedProject={pickedProject} />
                            )}
                            <div
                                className="flex items-center gap-[10px] cursor-pointer"
                                onClick={() =>
                                    pickedProject === "firebase"
                                        ? setPickedProject("all")
                                        : setPickedProject("firebase")
                                }>
                                {pickedProject === "firebase" ? (
                                    <FaChevronDown className="md:hidden text-[0.6rem]" />
                                ) : (
                                    <FaChevronRight className="md:hidden text-[0.6rem]" />
                                )}
                                <img
                                    src="firebase-p.png"
                                    alt="facebook"
                                    className="h-[20px]"
                                />
                                <p>firebase-projects</p>
                            </div>
                            {pickedProject === "firebase" && (
                                <MobileProjects pickedProject={pickedProject} />
                            )}
                            <div
                                className="flex items-center gap-[10px] cursor-pointer"
                                onClick={() =>
                                    pickedProject === "MERN-stack"
                                        ? setPickedProject("all")
                                        : setPickedProject("MERN-stack")
                                }>
                                {pickedProject === "MERN-stack" ? (
                                    <FaChevronDown className="md:hidden text-[0.6rem]" />
                                ) : (
                                    <FaChevronRight className="md:hidden text-[0.6rem]" />
                                )}
                                <img
                                    src="node-p.png"
                                    alt="github"
                                    className="h-[20px]"
                                />
                                <p>MERN-stack-projects</p>
                            </div>
                            {pickedProject === "MERN-stack" && (
                                <MobileProjects pickedProject={pickedProject} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                variants={container(0.25)}
                initial="hidden"
                animate="show"
                className="flex-1 hidden md:block">
                {/* <div className="sticky top-[40px] bg-main flex items-center justify-end text-[1rem] h-[50px] border-b border-light-main px-[50px]">
                    _projects/{pickedProject}
                </div> */}
                {projects.map(
                    (project) =>
                        project.tags.includes(pickedProject) && (
                            <motion.div
                                variants={animationIn}
                                layout
                                transition={{ duration: 1 }}
                                key={project.id}
                                className="list-item border-b border-light-main">
                                <Link
                                    to={
                                        project.comingSoon
                                            ? "/portfolio_2/coming-soon"
                                            : `/portfolio_2/my-projects/:${project.id}`
                                    }
                                    ref={refs[project.id]}
                                    onMouseMove={(e) =>
                                        handleOnMouseMove(e, refs[project.id])
                                    }>
                                    <div className="list-title flex items-center text-[2rem] h-[225px] px-[100px]">
                                        {project.title}
                                    </div>
                                    <div className="list-cursor">
                                        <div
                                            className="list-image"
                                            style={{
                                                backgroundImage: `url(background-${project.id}.png)`,
                                            }}
                                        />
                                    </div>
                                </Link>
                            </motion.div>
                        )
                )}
            </motion.div>
        </div>
    );
};

const MobileProjects = ({ pickedProject }) => {
    return (
        <div className="md:hidden flex flex-col gap-[50px] py-[15px] pl-[25px]">
            {projects.map(
                (project) =>
                    project.tags.includes(pickedProject) && (
                        <Link
                            className="single-project-counter"
                            key={project.id}
                            to={
                                project.comingSoon
                                    ? "/coming-soon"
                                    : `/my-projects/:${project.id}`
                            }>
                            <div className="single-project">
                                {project.title}
                            </div>
                        </Link>
                    )
            )}
        </div>
    );
};

export default MyProjects;
