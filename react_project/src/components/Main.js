function Main() {
    return (
        <div className="container">
                <div className="text pt-5">
                    <ul className="row button-list">
                        <li className="col-6 "><a href="/create" type="button" className="btn btn-success btn-lg w-50">Create note</a></li>
                        <li className="col-6"><a href="/note" type="button" className="btn btn-success btn-lg w-50">Read note</a></li>
                    </ul>
                </div>
                <div className="text p-0">
                    <p><b>Create, save, and share secret notes, ensuring privacy and ease of use. You can easily share important information and access it from any device without worrying about data leaks.</b></p>
                    <hr />
                    <p></p>
                    <p><b>How to create a note ?</b></p>
                    <ul>
                        <li>Follow the link</li>
                        <li>Type the text and click "Create"</li>
                        <li>Send the generated address to a recipient.</li>
                    </ul>
                    <p> <b>How to read the note?</b> Follow the sent URL or enter the address manually here: section "Note".</p>
                </div>
        </div >
    );
}
export default Main;




