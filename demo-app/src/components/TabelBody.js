import React from "react";


export const CarTable = ({cars}) => {
    

    return( 
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
                {
                    cars.map(car => 
                        <tr key={car.id}>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.price}</td>
                            <td>{car.colour}</td>
                        </tr>)
                }
            </tbody>
        </table>
    )

}