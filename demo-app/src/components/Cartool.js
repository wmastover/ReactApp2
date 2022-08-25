import React, {useState}from "react";


export const Cartool = (props) => {
    
    const [carData, setCarData] = useState(
        {
            make:"",
            model:"",
            year: 1900,
            price: 0,
            colour: "",
        }
    )

    const [cars, setCars] = useState(
        props.cars.concat()
        )

    const change = (e) => {
        setCarData({
            ...carData,
            [e.target.name]: e.target.type === "number" ? Number(e.target.value) : e.target.value
        })
        console.log(carData)
    }

    const addCar = () => {
        setCars(
            cars.concat({...carData,
            id: Math.max(...cars.map(c => c.id)) + 1,}),
        )
        console.log(cars)
        

    }

    return(
        <>
            <header>
                <h1>Cartool</h1>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Price</th>
                        <th>colour</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(car =>
                        <tr key={car.id}>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.price}</td>
                            <td>{car.colour}</td>
                        </tr>
                        
                    )}
                </tbody>  
            </table>
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
        </>
    )
    
    
}; 