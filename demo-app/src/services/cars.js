
const baseUrl = "http://localhost:3050/cars"

const getCollectionUrl = () => baseUrl

const getElementUrl = carId => `${getCollectionUrl()}/${encodeURIComponent(carId)}`

export const getAllCars = async () => {

    const res = await fetch(getCollectionUrl());
    const cars = await res.json();

    return cars
}


export const createCar = async (car) => {

    const res = await fetch(getCollectionUrl(), {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(car),
    });
    console.log(JSON.stringify(car))

    const savedCar = await res.json();

    return savedCar
}
 
export const replaceCar = async (car) => {
    const res = await fetch(getElementUrl(car.id), {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(car)

    });
    
    const savedCar = await res.json();

    return savedCar
}

export const deleteCar = async (carId) => {

    await fetch(getElementUrl(carId), {
        method: "DELETE",
    
    });

}