import { useState } from "react";

// creates a reusable hook for both edit rows and Form.js
export const useForm = (initialForm) => {

    const [form, setForm] = useState(
        {...initialForm}
    )

    const change = (e) => {
        setForm({
            //create a new object by copying current form object
            ...form,
            //change field relating to input
            [e.target.name]: e.target.type === "number" ? Number(e.target.value) : e.target.value
        })
        console.log(form)
    }

    const reset = () => {
        console.log("reseting form")
        setForm({...initialForm})
        
    }

    return[form, change, reset]


}