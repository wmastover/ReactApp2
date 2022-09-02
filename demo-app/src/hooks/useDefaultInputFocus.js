import { useEffect, useRef } from "react";


export const useDefaultInputFocus = () => {

    const  defaultInputRef = useRef();

    // empty array arg in use effect means that it is only running the function on 
    //first render of cartool. 
    useEffect (() => {
        if (defaultInputRef.current) {
            defaultInputRef.current.focus()
        }
    }, [])

    return defaultInputRef;
}