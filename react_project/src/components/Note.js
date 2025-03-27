import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import env from '../env.json';

function Note() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('');
    const [formClass, setFormClass] = useState('');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {
        if (noteURL !== undefined) {
            setFormClass('hide');
            fetch(env.urlBackend, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                })
        }
        else {
            setFormClass('');
            setLineClass('hide');
            setErrorClass('hide');

        }
    }, [noteURL]);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === "") {
            alert('Fill in the fields');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url;
    }

    return (
        <div className="container">
            <div className="w-auto">
                <div className="text">
                    <form action="" onSubmit={getNote} className={formClass}>
                        <div className="form-group">
                            <label htmlFor="url">Enter the HASH of your note</label>
                            <textarea name="url" id="url" className="form-control" rows="3"></textarea>
                        </div>
                        <div className="form-group text-right">
                        <button type="submit" className="btn btn-success btn-lg">Find Note</button>
                        </div>
                    </form>
                </div>
                <div className={errorClass}>
                    <p>Try again. The note cannot be found.</p>
                </div>

                <div className={lineClass}>
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Note: {noteURL}</h4>
                        <div>{noteText}</div>
                        <hr />

                        <div className="text-right"><button onClick={() => {window.location.href = env.url }} className="btn btn-primary">Search another note</button></div>
                    </div >
                </div >
            </div >
        </div >
    );
}
export default Note;

