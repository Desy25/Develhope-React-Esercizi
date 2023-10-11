import { useEffect, useRef } from "react"

export function FocusableInput() {
    const ref = useRef(null);

    const mountedRef = useRef(false);

    useEffect(() => {
        if(!mountedRef.current) {
            mountedRef.current = true
            console.log("Mounted for the first time!");
        }
        ref.current?.focus(); 
    }, [])
    return <input type="text" ref={ref}/>
}