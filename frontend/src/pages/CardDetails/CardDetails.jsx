import axios from "axios";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
    let { title } = useParams()
    console.log(title);

    let [data, setData] = useState({})
    let [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        axios.get(`https://abstract-server.vercel.app/cards/${title}`)
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            })
    }, [title])

    console.log(data);


    return (
        <div className="max-w-5xl mx-auto">
            {
                loading ? <div className="flex justify-center h-[300px] items-center"><Spinner aria-label="Extra large spinner example" size="xl" /> </div> : <div className="flex flex-col justify-center h-screen items-center gap-5">
                    <h1 className="font-bold text-5xl">{data.title}</h1>

                    <p> <span className="font-semibold">Description: </span> {data.description} </p>
                </div>
            }
        </div>
    );
};

export default CardDetails;