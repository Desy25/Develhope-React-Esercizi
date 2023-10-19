import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";


export function Clock() {
    // Se viene rimosso il Context.Provider dal component tree, il componente Clock non potrà accedere al valore fornito da LanguageContext e di conseguenza il componente Clock non sarà in grado di visualizzare il messaggio nella lingua corretta.
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