import { Link } from "react-router-dom"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "./App.css";

export default function Home({ notes, setNotes }){

    const[ input, setInput ] = useState({
        title : "",
        description : ""
    });

    function handleSubmit(e){
        e.preventDefault();

        const newData = {
            id : uuidv4(),
            ...input
        }
        setNotes([...notes, newData ]);

        toast.success("Note added successfully");

        setInput({
            title : "",
            description : ""
        });
    }

    function handleChange(e){
        const{ name, value } = e.target;

        setInput({
            ...input,
            [name] : value
        })
    }

    return(
        <div className="home">
            <div className="home-navbar">
                <Link style = {{ color : "black", textDecoration : "none", fontSize : "20px", marginLeft : "10px"}} to = "/home"> Home </Link>
                <Link style = {{ color : "black", textDecoration : "none", fontSize : "20px", marginLeft : "10px"}} to = "/notes"> Notes </Link>
                <Link style = {{ color : "black", textDecoration : "none", fontSize : "20px", marginLeft : "10px"}} to = "/search"> Search </Link>
            </div>

            <div className="home-main">
                <form onSubmit = {handleSubmit} className="home-form">
                    <input type = "text" name = "title" value = {input.title} onChange = {handleChange} placeholder="Enter the title" required/>
                    <input type = "text" name = "description" value={input.description} onChange={handleChange} placeholder="Enter the description" required/> 
                    <button type = "submit"> Submit </button>
                </form>
            </div>

        </div>
    )
}