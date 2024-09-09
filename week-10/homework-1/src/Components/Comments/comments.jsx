import "../../../gridview.css"
import "./comments.css"

const Comments = () => {
    return (
        <>
            <section id="comments">
                <div className="container">
                    <div className="row center">
                        <div className="col-xs-12">
                            <h2>REVIEW CLIENT</h2>
                            <div className="center">
                                <div className="underline"></div>
                            </div>
                            <p className="htext">Lorem ipsum is not simply random text. It has roots in a piece of
                                classical at Hampden-Sydney College</p>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <div className="comment">
                                <div className="client">
                                    <img src="/Images/client1.jpg" alt="client1"/>
                                    <div className="client-name">
                                        <h4>Diet Expert</h4>
                                        <p>CFO</p>
                                    </div>
                                </div>
                                <div className="comment-card">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio deleniti
                                        excepturi amet officia! Fugit autem id incidunt natus est tenetur, odio nisi
                                        excepturi exercitationem soluta accusamus eveniet officia voluptatem vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <div className="comment">
                                <div className="client">
                                    <img src="/Images/client2.jpg" alt="client2"/>
                                    <div className="client-name">
                                        <h4>Cardio Trainer</h4>
                                        <p>CEO</p>
                                    </div>
                                </div>
                                <div className="comment-card">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio deleniti
                                        excepturi amet officia! Fugit autem id incidunt natus est tenetur, odio nisi
                                        excepturi exercitationem soluta accusamus eveniet officia voluptatem vitae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comments