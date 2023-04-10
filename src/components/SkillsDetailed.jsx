import React from "react";

const SkillsDetailed = () => {
    return (
        <>
            <div
                className="h-100 max-[650px]:hidden grid grid-cols-5 grid-rows-8 gap-[10px]"
                id="skills">
                <MiddleCard text="TypeScript" />
                <BigCard text="JavaScript" />
                <MiddleCard text="Next.js" />
                <SmallCard text="CSS Modules" />
                <SmallCard
                    text="React
                Router"
                />
                <MiddleCard text="React" />
                <MiddleCard
                    text="Node.js
                Express"
                />
                <SmallCard text="MongoDB" />
                <SmallCard text="Redux" />
                <SmallCard text="Context API" />
                <SmallCard
                    text="React
                Native"
                />
                <SmallCard text="Netlify" />

                <MiddleCard text="Firebase" />
                <SmallCard text="RESTfull API" />
                <SmallCard text="HTML & CSS" />
                <MiddleCard text="Figma" />
                <SmallCard text="Testing" />
                <BigCard text="Python" />
                <SmallCard text="Strapi" />
                <MiddleCard text="Material UI" />
                <MiddleCard text="Tailwind" />
                <SmallCard text="Github & Git" />
            </div>
            <div
                className="h-100 max-[650px]:grid hidden grid-cols-4 grid-rows-10 gap-[10px] max-[650px]:mb-[10px]"
                id="skills">
                <MiddleCard text="Next.js" />
                <MiddleCard text="TypeScript" />
                <MiddleCard text="React" />
                <MiddleCard
                    text="Node.js
                Express"
                />
                <SmallCard
                    text="React
                Router"
                />
                <BigCard text="JavaScript" />
                <SmallCard text="Redux" />
                <BigCard text="Python" />
                <SmallCard
                    text="React
                Native"
                />
                <SmallCard text="RESTfull API" />
                <MiddleCard text="Firebase" />
                <MiddleCard text="Figma" />
                <MiddleCard text="Material UI" />
                <MiddleCard text="Tailwind" />
                <SmallCard text="CSS Modules" />
                <SmallCard text="MongoDB" />
                <SmallCard text="Context API" />
                <SmallCard text="Netlify" />

                <SmallCard text="Testing" />
                <SmallCard text="Strapi" />
                <SmallCard text="HTML & CSS" />
                <SmallCard text="Github & Git" />
            </div>
        </>
    );
};

const BigCard = ({ text }) => {
    return (
        <div className="flex justify-center items-center row-span-3 max-[650px]:row-span-2 col-span-2 max-[650px]:col-span-3 border border-light-main text-[1.4rem] md:text-[3rem] bg-dark-card">
            <h1 className="text-center">{text}</h1>
        </div>
    );
};
const MiddleCard = ({ text }) => {
    return (
        <div className="flex justify-center items-center max-[650px]:col-span-2 min-[650px]:row-span-2 border border-light-main text-[1rem] md:text-[1.5rem] bg-dark-card">
            <h1 className="text-center">{text}</h1>
        </div>
    );
};
const SmallCard = ({ text }) => {
    return (
        <div className="flex justify-center items-center border border-light-main bg-dark-card max-[450px]:text-[0.6rem]">
            <h1 className="text-center max-[1000px]:max-w-[70%]">{text}</h1>
        </div>
    );
};
export default SkillsDetailed;
