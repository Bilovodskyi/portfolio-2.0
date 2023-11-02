import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { projects } from "../data/data";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Project = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentProjectImg = projects.find((project) =>
        location.pathname.includes(project.id)
    );
    const [initialValue, setInitialValue] = useState(0);
    const [imagePath, setImagePath] = useState(
        currentProjectImg?.images[initialValue]
    );

    useEffect(() => {
        if (initialValue < 0)
            setInitialValue(currentProjectImg.images.length - 1);
        if (initialValue > currentProjectImg.images.length - 1)
            setInitialValue(0);
        setImagePath(currentProjectImg.images[initialValue]);
    }, [initialValue]);

    const handleImgChange = (value) => {
        setInitialValue((prev) => prev + value);
    };

    console.log(imagePath);

    return (
        <div className="lg:h-100 lg:flex">
            <div className="w-[100px] h-full border-r border-light-main p-[10px] hidden md:flex items-start">
                <h1 className="absolute rotate-90 origin-bottom-left w-[full] text-[1.5rem] left-[30px] top-[70px]">
                    {projects.map(
                        (project) =>
                            location.pathname.includes(project.id) &&
                            project.title
                    )}
                </h1>
            </div>
            <div className="h-full lg:w-2/3 border-r border-light-main">
                <div
                    className="h-[80px] md:h-[8%] px-[30px] flex items-center gap-[10px] cursor-pointer"
                    onClick={() => navigate(-1)}>
                    <FaChevronLeft className="h-[15px]" alt="arrow left" />
                    <div className="text-[1rem]">back</div>
                </div>
                <div className="main-image relative border-light-main max-h-[520px] overflow-hidden flex items-center">
                    <FaChevronLeft
                        alt="arrow left"
                        className="arrow hidden absolute left-5 text-[1.75rem] cursor-pointer text-gold"
                        onClick={() => handleImgChange(-1)}
                    />
                    <img src={imagePath} alt="main img" />
                    <FaChevronRight
                        alt="arrow right"
                        className="arrow hidden absolute right-5 text-[1.75rem] cursor-pointer text-gold"
                        onClick={() => handleImgChange(1)}
                    />
                    <div className="gradient-text hidden absolute bottom-0 bg-gradient-to-t from-[#000] h-[120px] w-full flex items-end justify-center">
                        <p className="mb-[30px] text-gold">
                            {currentProjectImg.desc[initialValue]}
                        </p>
                    </div>
                </div>
                <div className="scrolling-wrapper h-[120px] sm:h-[150px] md:h-[200px] lg:h-[18%] flex">
                    {currentProjectImg.images.map((img, index) => (
                        <img
                            onClick={() => {
                                setImagePath(currentProjectImg.images[index]);
                                setInitialValue(index);
                            }}
                            key={img}
                            src={img}
                            alt="secondary img"
                            className="card h-full object-contain border border-light-main cursor-pointer"
                        />
                    ))}
                </div>
            </div>
            <div className="lg:w-1/3  max-[1024px]:mb-[50px]">
                <div className="flex flex-col gap-[60px] px-[30px] mb-[150px]">
                    <h1 className="mt-[60px] text-[1.5rem]">about project</h1>
                    <p className="text-[1rem]">
                        I created this application using react functional
                        components with hooks (such asuseState, useEffect,
                        useRef and useContext ). Thanks to them, the application
                        has a lot of features, the ability to create budgets,
                        add/remove expenses and much more. And also I added
                        LocalStorage to store data.
                    </p>
                    <p>
                        <span className="text-[#E7AB41]">#</span>react{" "}
                        <span className="text-[#E7AB41]">#</span>react_router{" "}
                        <span className="text-[#E7AB41]">#</span>css_modules{" "}
                        <span className="text-[#E7AB41]">#</span>figma{" "}
                        <span className="text-[#E7AB41]">#</span>framer_motion{" "}
                        <span className="text-[#E7AB41]">#</span>
                        responsive_design
                    </p>
                </div>
                <div className="flex w-full justify-around">
                    <button className="border border-light-main rounded-[10px] text-[1rem] bg-card px-[15px] py-[10px]">
                        gitHub
                    </button>
                    <button className="border border-light-main rounded-[10px] text-[1rem] bg-card px-[15px] py-[10px]">
                        website
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project;
