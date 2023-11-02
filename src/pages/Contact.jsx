import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="md:h-100 flex">
            <div className="w-full md:w-[360px] md:h-full bg-card max-[768px]:pt-[40px] md:p-[20px] xl:p-[40px] flex flex-col items-center">
                <div>
                    <div className="flex items-center gap-[7px]">
                        <FaChevronDown className="text-[0.6rem]" />
                        <p>contact me</p>
                    </div>
                    <div className="p-[20px]">
                        <div className="flex items-center gap-[7px]">
                            <FaChevronDown className="text-[0.6rem]" />
                            <p>contact info</p>
                        </div>

                        <div className="flex flex-col gap-[15px] p-[25px]">
                            <div className="flex items-center gap-[10px]">
                                <img
                                    src="person.png"
                                    alt="person"
                                    className="h-[20px]"
                                />
                                <p>Vancouver, BC</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <img
                                    src="person.png"
                                    alt="person"
                                    className="h-[20px]"
                                />
                                <p>+1 (778) 316-6112</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <FaChevronDown className="text-[0.6rem]" />
                            <p>my social media</p>
                        </div>

                        <div className="flex flex-col gap-[20px] p-[25px]">
                            {/* <div className="flex items-center gap-[10px]">
                                <img
                                    src="facebook.png"
                                    alt="facebook"
                                    className="h-[20px]"
                                />
                                <p>facebook.com</p>
                            </div> */}
                            <div className="flex items-center gap-[10px]">
                                <img
                                    src="linkedin.png"
                                    alt="linkedIn"
                                    className="h-[20px]"
                                />
                                <p>
                                    www.linkedin.com/in/bohdan-bilovodskyi-0437241b7
                                </p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <img
                                    src="github.png"
                                    alt="github"
                                    className="h-[20px]"
                                />
                                <p>github.com/bilovodskyi</p>
                            </div>
                        </div>
                        <div className="flex md:hidden items-center gap-[7px] mb-[25px]">
                            <FaChevronDown />
                            <p>get in touch</p>
                        </div>

                        <div className="flex-[3] flex md:hidden flex-col justify-center items-center">
                            <label className="w-[300px] mb-[10px]">
                                your email
                            </label>
                            <input
                                type="text"
                                required
                                className="h-[40px] bg-card border border-light-main rounded-[5px] w-[300px] mb-[20px] p-[5px] focus:outline-none"
                            />
                            <label className="w-[300px] mb-[10px]">
                                your message
                            </label>
                            <textarea
                                id="textArea"
                                cols="30"
                                rows="10"
                                className="bg-card border-[1px] border-light-main rounded-[5px] w-[300px] mb-[20px] p-[5px] focus:outline-none"></textarea>
                            <div className="w-[300px]">
                                <button className="px-[15px] py-[10px] mb-[40px] bg-card border border-light-main rounded-[5px]">
                                    submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 hidden md:flex flex-col w-full">
                <div className="flex-1 flex items-center justify-center border-b border-light-main">
                    <p className="text-[2rem]">get in touch</p>
                </div>
                <div className="flex-1 flex border-b border-light-main">
                    <div className="flex-1 flex items-center justify-center border-r border-light-main p-[30px]">
                        <p className="text-[1rem]">
                            have a question or want to higher me? send me a
                            message
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-[1rem]">bilovodskyi@gmail.com</p>
                    </div>
                </div>
                <div className="flex-[3] flex flex-col justify-center items-center">
                    <label className="w-[400px] mb-[5px]">your email</label>
                    <input
                        type="text"
                        required
                        className="h-[40px] bg-card border border-light-main rounded-[5px] w-[400px] mb-[15px] p-[5px] focus:outline-none"
                    />
                    <label className="w-[400px] mb-[5px]">your message</label>
                    <textarea
                        id="textArea"
                        cols="30"
                        rows="10"
                        className="bg-card border-[1px] border-light-main rounded-[5px] w-[400px] mb-[15px] p-[5px] focus:outline-none"></textarea>
                    <div className="w-[400px]">
                        <button className="h-[30px] w-[80px] bg-card border border-light-main rounded-[5px]">
                            submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
