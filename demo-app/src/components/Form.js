import React, {useState} from "react";



export const Form = (props) => {

    const buttonText = props.buttonText;
    const initialState = props.initialState;
    const addCar = props.addCar;

        //set state for form data
    const [carData, setCarData] = useState(
        {
            make:"",
            model:"",
            year: 1900,
            price: 0,
            colour: "",
        }
    )

    const change = (e) => {
        setCarData({
            //create a new object by copying current carData object
            ...carData,
            //change field relating to input
            [e.target.name]: e.target.type === "number" ? Number(e.target.value) : e.target.value
        })
        console.log(carData)
    }

    const submitCar = () => {
        addCar({...carData})
        setCarData(initialState)
    }
    return(
        <form>
            <div>
                <label htmlFor= "make-input">Make:</label>
                <input id="make-input" type="text" value={carData.make} onChange={change} name="make"></input>
            </div>
            <div>
                <label htmlFor= "model-input">Model:</label>
                <input id="model-input" type="text" value={carData.model} onChange={change} name="model"></input>
            </div>
            <div>
                <label htmlFor= "year-input">Year:</label>
                <input id="year-input" type="number" value={carData.year} onChange={change} name="year"></input>
            </div>
            <div>
                <label htmlFor= "price-input">Price:</label>
                <input id="price-input" type="number" value={carData.price} onChange={change} name="price"></input>
            </div>
            <div>
                <label htmlFor= "colour-input">Colour:</label>
                <input id="colour-input" type="text" value={carData.colour} onChange={change} name="colour"></input>
            </div>
            <div> 
                <button type="button" onClick={submitCar}>{buttonText}</button>
            </div>
        </form>
        )


}