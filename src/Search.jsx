import { useState, useEffect } from "react";

export default function Search({ notes }){

    const[ query, setQuery ] = useState("");
    const[ debounceQuery, setDebounceQuery ] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceQuery(query);
        }, 500)
        return ()=> clearTimeout(timer);
    }, [query]);

    const filterNotes = debounceQuery ? notes.filter((note) =>
      note.title.toLowerCase().includes(debounceQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(debounceQuery.toLowerCase())
    )
    : [];

    return(
        <div className="search">
            
            <div className="search-bar">
                {/* <form className="search-form"> */}
                    <input type = "text" name = "search" placeholder="Enter the title" value = {query} 
                    onChange={(e) => setQuery(e.target.value)} required/>
                {/* <button type = "submit"> Search </button>
                </form> */}
            </div>

            {debounceQuery === "" ? null : (
            filterNotes.length > 0 ? (
            <div className="search-data">
            {filterNotes.map((note) => (
            <div key={note.id}>
            <h2>{note.title}</h2>
            <h4>{note.description}</h4>
            </div>
            ))}
            </div>
            ) : (
            <div className="search-data">
            <h1>No Data Found</h1>
            </div>
            ))}  
        </div>
    )
}