import React, { useState } from 'react';
import env from '../env.json';

function Create() {
    const [url, setUrl] = useState('');
    const [lineClassName, setLineClassName] = useState('hide'); // hide
    const [formClassName, setFormClassName] = useState('');

    let sendData = (obj) => {
        setFormClassName('hide');
        setLineClassName('');

        fetch(env.urlBackend, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    setUrl(env.url + '/' + response.url);
                }
            })
    }
    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === "") {
            alert('Fill in the fields');
            return false;
        }
        sendData({ 'note': note });
    }
    return (
        <div className="container">
                <div className="text">
                    <form onSubmit={loadDataFromForm} className={formClassName}>
                        <div className="form-group">
                            <label htmlFor="note">Enter your secret note</label>
                            <textarea name="note" className="form-control" defaultValue="Text..." id="note"></textarea>
                            <p><b>Attention!</b> The maximum length of a note is 1000 characters.</p>
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="btn btn-success btn-lg">Create</button>
                        </div>
                    </form>
                    <div className={lineClassName}>
                        <div className="alert alert-primary" role="alert">{url}</div>
                        <p>Copy the URL and send it to the recipient.</p>
                        <div className="text-right"><button onClick={() => { window.location.reload() }} className="btn btn-primary">Create one more note</button></div>
                    </div>
                </div>
        </div>
    );
}
export default Create;