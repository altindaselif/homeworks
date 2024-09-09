import "../../../gridview.css"
import "./trainers.css"

const Trainers = () => {
    return (
        <>
            <section id="trainers">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>OUR BEST TRAINERS</h2>
                            <div className="center">
                                <div className="underline"></div>
                            </div>
                            <p className="htext">Lorem ipsum is not simply random text. It has roots in a piece of
                                classical at Hampden-Sydney College</p>
                        </div>
                        <div className="col-xs col-lg-4">
                            <div className="trainer">
                                <img className="trainer-image" src="/Images/trainer1.jpg" alt="trainer1"/>
                                <div className="trainer-info">
                                    <h3 className="trainer-name">Jane Doe</h3>
                                    <p>Cardio Trainer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs col-lg-4">
                            <div className="trainer">
                                <img className="trainer-image" src="/Images/trainer2.jpg" alt="trainer1"/>
                                <div className="trainer-info">
                                    <h3 className="trainer-name">John Doe</h3>
                                    <p>Cardio Trainer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs col-lg-4">
                            <div className="trainer">
                                <img className="trainer-image" src="/Images/trainer3.jpg" alt="trainer1"/>
                                <div className="trainer-info">
                                    <h3 className="trainer-name">Jane Doe</h3>
                                    <p>Cardio Trainer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Trainers