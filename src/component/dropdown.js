import React from "react";
import { useState,useEffect } from "react";

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



    const Views = (data) => {
        if (data) {
            return data.map((item)=>{
                return(
                    <>
                        <tbody>
                            <tr>
                                <td>{item[0]}</td>
                                <td>{item[1]}</td>
                                <td>{item[2]}</td>
                            </tr>
                        </tbody>
                    </>
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
            <table class="table table-striped">
                <thead>
                    <tr>
                            <th>Title</th>
                            <th>Date<br/> Published</th>
                            <th></th>
                    </tr>
                </thead>
                {Views(Data)}
                </table>
            </div>

        </>
    )
}


export default Drop