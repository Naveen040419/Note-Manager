import { Link } from "react-router-dom"
import "./App.css";

export default function Notes({notes, setNotes}){

    function handleRemove(id){
        const updatedNotes = notes.filter( note => note.id !== id );
        setNotes(updatedNotes);
    }

    return(
        <div className="note">

            <div className="note-heading">
                <h1> All Notes </h1>
            </div>

            { notes.length > 0 ? <div className="notes">
                    {notes.map((note) => {
                        return <div key = {note.id} className="note-list">

                            <div className="note-list-data">
                            <h3> {note.title} </h3>
                            <h4> {note.description} </h4>
                            </div>

                            <div className="note-list-button">
                                <button onClick={ () => handleRemove(note.id) }> Remove </button>
                            </div>

                        </div>
                    })}
            </div> : "" }
            

            <div className="note-button">
                <Link to = "/home"> <button> Add Note </button> </Link>
                <Link to = "/search"> <button> Search Note </button> </Link>
            </div>

        </div>
    )
}