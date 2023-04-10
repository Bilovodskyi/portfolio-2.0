export const container = (staggerChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
        },
    },
});

export const animationIn = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 2,
            delay: 0.2,
        },
    },
};

export const textContainer = {
    hidden: {
        opacity: 0,
    },
    show: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
};

export const textVariant = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            ease: "easeIn",
        },
    },
};

export const letterAnimation = {
    hidden: {
        y: 300,
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.6, 0.01, -0.05, 0.95],
        },
    },
};
