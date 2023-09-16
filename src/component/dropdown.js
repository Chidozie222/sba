import React from "react";
import { useState,useEffect } from "react";
import Nigeria from "./NIgeria";

const Drop = () => {
    const[ Data, setData]= useState('');

    useEffect(()=>{
        fetch(`https://sba-fkqb.onrender.com/Ng`, {method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            setData(data)
            let time = data
            let obj = {...time}
            console.log(obj);
        })
    },[])


    const NG = () =>{
        fetch(`https://sba-fkqb.onrender.com/NG`, {method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            setData(data)
            console.log(data);
        })
    }

    const Ug = () =>{
        fetch(`https://sba-fkqb.onrender.com/ug`, {method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            setData(data)
            console.log(data);
        })
    }

    const ZW = () =>{
        fetch(`https://sba-fkqb.onrender.com/zw`, {method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            setData(data)
            console.log(data);
        })
    }

    const IC = () =>{
        fetch(`https://sba-fkqb.onrender.com/IC`, {method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            setData(data)
            console.log(data);
        })
    }

    const TZ = () =>{
        fetch(`https://sba-fkqb.onrender.com/TZ`, {method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            setData(data)
            console.log(data);
        })
    }

    const EG = () =>{
        fetch(`https://sba-fkqb.onrender.com/EG`, {method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            setData(data)
            console.log(data);
        })
    }

    const MW = () =>{
        fetch(`https://sba-fkqb.onrender.com/MW`, {method:'GET'})
        .then((res)=> res.json())
        .then((data) => {
            setData(data)
            console.log(data);
        })
    }

    const Views = (data) => {
        if (data) {
            return data.map((item)=>{
                return(
                   <table>
                    <thead key={0}>
                        <tr>
                            <th>{item[0][0]}</th>
                        </tr>
                    </thead>
                   </table>
                )
            })
        } else{
            <h1>NO data Inputted</h1>
       }
    } 


    return(
        <>
            <select>
                <option>Choose your Country</option>
                <option  >Nigeria</option>
                <option >Uganda</option>
                <option >Zimbabwe</option>
                <option >Ivory Coast</option>
                <option >Tanzania</option>
                <option >Egypt</option>
                <option >Malawi</option>
            </select>

            <div>
                {Views(Data)}
            </div>

        </>
    )
}


export default Drop