import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export function useCastomContext() {
    return useContext(Context);
}

export const ContextProvider = ({ children }) => {
    const [active, setActive] = useState(
        JSON.parse(localStorage.getItem("page")) || 1
    );

    useEffect(() => {
        localStorage.setItem("page", JSON.stringify(active));
    }, [active]);
    return (
        <Context.Provider value={{ active, setActive }}>
            {children}
        </Context.Provider>
    );
};
