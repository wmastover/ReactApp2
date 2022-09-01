import React from "react";


export const CarTable = ({cars, onDeleteCar: deleteCar, }) => {
    
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
                    cars.map(car => 
                        <tr key={car.id}>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.price}</td>
                            <td>{car.colour}</td>
                            <td>
                                <button type="button" 
                                onClick={() => deleteCar(car.id)}>Delete</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    )

}