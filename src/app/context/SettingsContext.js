"use client";
import { useState, useEffect, createContext, useContext } from "react";

const SettingsContext = createContext();

export function SettingsProvider({children}) {
    const [darkMode, setDarkMode] = useState(true);
    const [allowSound, setAllowSound] = useState(true);

    return (
        <SettingsContext.Provider value={{darkMode, setDarkMode, allowSound, setAllowSound}}>
            {children}
        </SettingsContext.Provider>
    );

}

export function useSettings(){
    return useContext(SettingsContext);
}