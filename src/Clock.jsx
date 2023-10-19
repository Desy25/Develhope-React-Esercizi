import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";


export function Clock() {
    // Avevo già fatto precedentemente la parte dello useContext
    const language = useContext(LanguageContext);

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])
    return language === 'en' ? <h2>Current Time: {date.toLocaleTimeString()}</h2> : <h2>Ora Corrente: {date.toLocaleTimeString()}</h2>
}