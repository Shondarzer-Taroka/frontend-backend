import { Label, TextInput } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import CardItem from "../Card/Card";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
const Home = () => {
    let searchValue=useRef()
    let [cards,setCards]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:6699/cards')
        .then(res=>{
            console.log(res.data);
            setCards(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    function handleSearch() {
        const query = searchValue.current.value.trim();
        console.log(query);
        
        if (query) {
            axios.get(`http://localhost:6699/cardssearch?search=${query}`)
                .then(res => {
                    setCards(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            // If the search input is empty, fetch all cards again
            axios.get('http://localhost:6699/cards')
                .then(res => {
                    setCards(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
    
    return (
        <div>
            <div className="bg-violet-100 p-20">
                <h1 className="text-4xl font-bold flex justify-center items-center">How Can We Help? </h1>
                {/* <div className="flex justify-center">
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="search" value="" />
                    </div>
                    
                    <TextInput className="" id="search" type="search" placeholder="search here" rightIcon={HiArrowNarrowRight} />
              
                </div>

            </div> */}

                <div className="flex justify-center mt-6" >
                    <div style={{ width: '290px', boxShadow: '1px 2px 2px gray' }} className="bg-white w-full flex justify-between items-center gap-0">
                        <input ref={searchValue} placeholder="search" type="search" className="bg-transparent w-full outline-0 border-0" />
                        <HiArrowNarrowRight onClick={handleSearch} style={{ marginRight: '10px' }}></HiArrowNarrowRight>
                    </div>
                </div>


            </div>
            <div id="cards" className="max-w-5xl mx-auto mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {
                cards.map(card=><CardItem key={card._id} title={card.title} description={card.description}></CardItem>)
             }
            </div>
        </div>
    );
};

export default Home;