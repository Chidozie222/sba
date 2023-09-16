import React from "react"
import { useState,useEffect } from "react"



const Nigeria = (props) => {
    const[ setData] = useState('');
    useEffect(()=>{
        fetch(`https://sba-fkqb.onrender.com/Ng`, {method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            props.setData(data)
            console.log(data);
        })
    },[])

    return(
        <>
            <h1>This is the Nigeria Api call</h1>
        </>
    )
}



export default Nigeria