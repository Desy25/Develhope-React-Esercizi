import { useEffect, useRef } from "react"

export function FocusableInput() {
    const ref = useRef(null);

    useEffect(() => {
        ref.current?.focus(); 
    }, [])
    return <input type="text" ref={ref}/>
}