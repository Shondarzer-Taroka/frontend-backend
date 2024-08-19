import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
    let {title}=useParams()
    console.log(title);

    let [data,setData]=useState('')
    useEffect(()=>{
        axios.get(`http://localhost:6699/cards/${title}`)
        .then(res=>{
            setData(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[title])
    
    console.log(data);
    
    
    return (
        <div>
            Details
        </div>
    );
};

export default CardDetails;