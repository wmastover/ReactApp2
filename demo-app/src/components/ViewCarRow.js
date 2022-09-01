import React from "react";

export const ViewCarRow = ({car, onDeleteCar: deleteCar, onEditCar: editCar}) => {

// car is passed from cartable
//ondelete passed from car tool
// edit car passed from cartool
return(
    <tr key={car.id}>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.price}</td>
        <td>{car.colour}</td>
        <td>
            <button type="button" onClick={() => editCar(car.id)}>
                Edit
            </button>
            <button type="button" onClick={() => deleteCar(car.id)}>
                Delete
            </button>
        </td>
    </tr>
)


}
