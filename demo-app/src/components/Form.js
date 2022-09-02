import React, {memo, forwardRef} from "react";
import { useForm } from "../hooks/useForm";



export const Form = memo(forwardRef(({buttonText, initialState, 
                    onAddCar: addCar},ref) => {
    
    console.log("rendering form")

        //set state for form data
    const [carData, change, reset] = useForm(initialState)

        //submits car using add car function passed from cartool
    const submitCar = () => {
        console.log("submitting form")
        addCar({...carData});
        reset()
        console.log(carData)
    }

    return(
        <form>
            <div>
                <label htmlFor= "make-input">Make:</label>
                <input id="make-input" type="text" value={carData.make} 
                onChange={change} name="make" ref={ref}/>
            </div>
            <div>
                <label htmlFor= "model-input">Model:</label>
                <input id="model-input" type="text" value={carData.model} 
                onChange={change} name="model"/>
            </div>
            <div>
                <label htmlFor= "year-input">Year:</label>
                <input id="year-input" type="number" value={carData.year} 
                onChange={change} name="year"/>
            </div>
            <div>
                <label htmlFor= "price-input">Price:</label>
                <input id="price-input" type="number" value={carData.price} 
                onChange={change} name="price"/>
            </div>
            <div>
                <label htmlFor= "colour-input">Colour:</label>
                <input id="colour-input" type="text" value={carData.colour} 
                onChange={change} name="colour"/>
            </div>
            <div> 
                <button type="button" onClick={submitCar}>{buttonText}</button>
            </div>
        </form>
    )
}))