import React from "react";
import ReactDOM from "react-dom";
//import { HelloWorld } from "./components/HelloWorld";
import { Cartool } from "./components/Cartool"

const carList = [
    {id:1, make:"ford!", model:"T", year:1900, price:20000, colour: "black"},
    {id:2, make:"ford", model:"T", year:1900, price:20000, colour: "yellow"}
]   

ReactDOM.render(
    <Cartool cars={carList}/>,
    document.querySelector("#root"),
)