import React from "react";
import ReactDOM from "react-dom";
//import { HelloWorld } from "./components/HelloWorld";
import { Cartool } from "./components/Cartool"


const initialState = {
    make:"",
    model:"",
    year: 1900,
    price: 0,
    colour: "",
}

ReactDOM.render(
    <Cartool initialState={initialState}/>,
    document.querySelector("#root"),
)