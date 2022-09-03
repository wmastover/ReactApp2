import React, {useState, useCallback, useEffect,}from "react";
import { Form } from "./Form";
import { CarTable } from "./CarTable";
import { ToolHeader } from "./ToolHeader";
import { useDefaultInputFocus } from "../hooks/useDefaultInputFocus";
import { getAllCars as dbGetAllCars,
        replaceCar as dbReplaceCar, 
        createCar as dbCreateCar,
        deleteCar as dbDeleteCar, 
    } from "../services/cars";


export const Cartool = ({ initialState}) => {
    
    //set state for table data
    const [cars, setCars] = useState([])
    const [editCarId, setEditCarID] = useState(-1)

    //imports up to date list of cars from database and sets state to cars
    const refreshCars = useCallback(() => 
    {
        dbGetAllCars().then(newCars => setCars(newCars)) 
    },[])


    // use effect hook with refresh cars as dependency will run on the initial render
    // of car tool, importing cars to car table at launch
    useEffect(() => 
        { 
        refreshCars()
        }
    ,[refreshCars])



    //used to focus make field in car form
    const  defaultInputRef = useDefaultInputFocus()


    //after functions run, init is called to rest focus and close edit mode
    const init = useCallback(() => {

        setEditCarID(-1)
        if (defaultInputRef.current) {
            defaultInputRef.current.focus()
        }

    }, [defaultInputRef])


    //adds car to db using api call "POST"
    const addCar = useCallback((car) => {

        dbCreateCar(car).then(() => refreshCars())

        console.log(cars)
        
    },[cars, refreshCars])


    //deletes car using api call "DELETE"
    const deleteCar = useCallback((id) => {
        
        dbDeleteCar(id).then(() => refreshCars())

        init()
    }, [ init, refreshCars])


    //replaces car using api call "PUT"
    const replaceCar = useCallback((car) => {

        dbReplaceCar(car).then(() => refreshCars())
       
        init()

    }, [ init, refreshCars])

    //changes the state of editCarID to id of car being edited, so row can re-render
    const editCar = useCallback((id) => {
        setEditCarID(id)
    }, [])

    //resets editCarId when edit mode is closed, and resets focus
    const cancelCar = useCallback(() => {
        init()
    }, [init])

    return(
        <>
            <ToolHeader headerText="header string"/>
            <CarTable cars={cars} editCarId={editCarId} onDeleteCar={deleteCar} 
            onEditCar={editCar} onSaveCar={replaceCar}  onCancelCar={cancelCar} 
            initialState={initialState}/>  

            <Form buttonText="add" onAddCar={addCar} initialState={initialState}
            ref={defaultInputRef}/>
        </>
    )
}; 