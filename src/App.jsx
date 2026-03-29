import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Notes from "./Notes";
import Search from "./Search";
import { ToastContainer } from "react-toastify";
export default function App(){

    const[ notes, setNotes ] = useState(()=>{
        const saved = localStorage.getItem("notes");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(()=>{
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return(
        <>
        <ToastContainer/>
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home notes = {notes} setNotes = {setNotes} />}> </Route>
            <Route path = "/home" element = {<Home notes = {notes} setNotes = {setNotes} />}> </Route>
            <Route path = "/notes" element = {<Notes notes = {notes}  setNotes = {setNotes} />}> </Route>
            <Route path = "/search" element = { <Search notes = {notes} /> }> </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
