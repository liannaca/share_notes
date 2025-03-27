
function About() {
    return (
        <div className="container accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        About the app
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>ShareNotes - </strong> application that allows users to create, save, and share secret notes, ensuring privacy and ease of use. The app helps you organize your thoughts and keep important records in a secure place.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Who can use "ShareNotes"?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Everyone!</strong> Whether you're friends, couples, coworkers, or even companies, you can easily type important information and access it from any device without worrying about data leaks.

                        <p>ShareNotes is a reliable and convenient tool for managing personal information.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;