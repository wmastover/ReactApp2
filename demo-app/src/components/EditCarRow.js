import React from "react";
import { useForm } from "../hooks/useForm";

export const EditCarRow = ({car, onCancelCar: cancelCar, onSaveCar,}) => {

    const [carData, change,] = useForm(
        //dont forget spread operator, otherwise you end up with nested objects
        {...car}
    )
    
    // passes object back to cartool replace car function with new props (apart from
    // id which remains constant)
    const saveCar = () => {
        
        onSaveCar({
            ...carData,
            id: car.id
        })
    }

    return(
        <tr>
            <td>
                <input type="text" name="make" value={carData.make} 
                onChange={change}/>
            </td>
            <td>
                <input type="text" name="model" value={carData.model}
                onChange={change}/>
            </td>
            <td>
                <input type="number" name="year" value={carData.year}
                onChange={change}/>
            </td>
            <td>
                <input type = "number" name="price" value={carData.price}
                onChange={change}/>
            </td>
            <td>
                <input type="text" name="colour"value={carData.colour}
                onChange={change}/>
            </td>
            <td>
                <button type="button" onClick={() => saveCar(car.id)}>
                    Save 
                </button>
                <button type="button" onClick={() => cancelCar(car.id)}>
                    Close
                </button>
            </td>
        </tr>
    )
}