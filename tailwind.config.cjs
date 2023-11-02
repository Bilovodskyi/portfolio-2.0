/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    mode: "jit",
    theme: {
        extend: {},
        colors: {
            main: "#15181f",
            "dark-main": "#040506",
            "light-main": "#606060",
            card: "#23282E",
            "dark-card": "#0C0E12",
            text: "#c0c0c0",
            pink: "#FA8F79",
            purple: "#8083FE",
            red: "#F84646",
            yellow: "#FBAF25",
            green: "#28C031",
            gold: "#E7AB41",
        },
        height: {
            mobile: "calc(100vh - 50px)",
            100: "calc(100vh - 80px)",
            full: "100%",
        },
        boxShadow: {
            pink: "0 0 300px 120px #FA8F79",
            green: "0 0 300px 120px #70E575",
            blue: "0 0 300px 120px #8083FE",
        },
        screens: {
            sm: "450px",
            md: "768px",
            lg: "1024px",
            xl: "1250px",
        },
    },
    plugins: [],
};
