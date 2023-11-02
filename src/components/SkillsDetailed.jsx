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
                <SmallCard text="Figma" />
                <SmallCard text="tRPC" />
                <MiddleCard text="React" />
                <MiddleCard
                    text="Node.js
                Express"
                />
                <SmallCard text="Material UI" />
                <SmallCard text="Redux" />
                <SmallCard text="Styled Components" />
                <SmallCard text="Prisma" />
                <SmallCard text="JWT" />

                <MiddleCard text="Firebase" />
                <SmallCard text="RESTfull API" />
                <SmallCard text="HTML & CSS" />
                <MiddleCard text="PostgreSQL" />
                <SmallCard text="Testing" />
                <BigCard text="Python" />
                <SmallCard text="Strapi" />
                <MiddleCard text="MongoDB" />
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
                <SmallCard text="Figma" />
                <BigCard text="JavaScript" />
                <SmallCard text="Redux" />
                <BigCard text="Python" />
                <SmallCard text="tRPC" />
                <SmallCard text="RESTfull API" />
                <MiddleCard text="Firebase" />
                <MiddleCard text="PostgreSQL" />
                <MiddleCard text="Material UI" />
                <MiddleCard text="Tailwind" />
                <SmallCard text="Styled Components" />
                <SmallCard text="MongoDB" />
                <SmallCard text="Prisma" />
                <SmallCard text="JWT" />

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
