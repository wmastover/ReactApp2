import React from "react";

export const Form = (props) => {

    const carData = props.carData;
    const change = props.Change;
    const addCar = props.addCar;


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
                <button type="button" onClick={addCar}>add car</button>
            </div>
        </form>
        )


}