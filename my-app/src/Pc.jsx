import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Buying from "./Buying";
const Pc=(()=>{
    const[data,setdata]=useState([]);
    const navigate=useNavigate();
useEffect(()=>{
    fetch(`http://localhost:3000`)
    .then((response)=>{
        if(!response.ok){
            console.log("Failed");
            return;
        }
        return response.json();
    })
    .then((data)=>{
        setdata(data)
    }).catch((error)=>{
        console.log("error:",error);
    })
},[]);
const handleclick=((item)=>{
    console.log(item.title)
    navigate('/Buying',{state:{details:{item}}})
})
return(
    <div id="Pc-Main">
    {data.map((item, index) => (
        <div key={index} id="Pc-products">
            <img
                src={item.url}
                id="pro-img"
                alt="Product Image"
                onClick={()=>handleclick(item)}
            />
            <div id="details">
                <label id="title">{item.title}</label>
                <label id="Price">{item.price}</label>
            </div>
        </div>
    ))}
</div>

    )
})

export default Pc