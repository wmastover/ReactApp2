import React, {memo}from "react";
import { EditCarRow } from "./EditCarRow";
import { ViewCarRow } from "./ViewCarRow";

export const CarTable = memo(({
    cars, 
    editCarId,
    onDeleteCar: deleteCar, 
    onEditCar: editCar, 
    onSaveCar: saveCar,  
    onCancelCar: cancelCar,
    }) => {
    

    // function to output either a edit or view row depending on if id is a matche
    // to the editcarid
    const editOrViewRow = (car) => {
        
        if ( car.id === editCarId) {
            return( <EditCarRow key={car.id} car={car} 
                onCancelCar={cancelCar} onSaveCar={saveCar}/>)
        } else {
            return( <ViewCarRow key={car.id} car={car} 
                onDeleteCar={deleteCar} onEditCar={editCar} 
                />)
        }
    }

    return( 
        <table>
            <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Price</th>
                        <th>Colour</th>
                        <th>Actions</th>
                    </tr>
            </thead>
            <tbody>
                {
                    cars.map(car => editOrViewRow(car))
                }
            </tbody>
        </table>
    )

})