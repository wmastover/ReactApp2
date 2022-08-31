import React from "react";


export const TableBody = (props) => {
    const cars = props.cars

    return( 
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
    )

}