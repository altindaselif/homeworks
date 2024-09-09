import "../../../gridview.css"
import "./classes.css"
import {useState, useEffect} from "react";

const Classes = () => {

    const [active, setActive] = useState(1)
    const showActive = (index) => {
        setActive(index)
    }

    return (
        <>
            <section id="classes">
                <div className="classes-bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>OUR CLASSES</h2>
                            <div className="center">
                                <div className="underline"></div>
                            </div>
                            <p className="htext">Lorem ipsum is not simply random text. It has roots in a piece of
                                classical at Hampden-Sydney College</p>
                        </div>
                        <div className="col-xs-12">
                            <div className="classes-buttons center">
                                <button id="b1" className={active === 1 ? "tabBtn active" : "tabBtn"}
                                        onClick={() => showActive(1)}>Yoga
                                </button>
                                <button id="b2" className={active === 2 ? "tabBtn active" : "tabBtn"} onClick={() => showActive(2)}>Group
                                </button>
                                <button id="b3" className={active === 3 ? "tabBtn active" : "tabBtn"} onClick={() => showActive(3)}>Solo
                                </button>
                                <button id="b4" className={active === 4 ? "tabBtn active" : "tabBtn"}
                                        onClick={() => showActive(4)}>Stretching
                                </button>
                            </div>
                        </div>
                        <div className="classTabs">

                            <div id="yoga" className={active === 1 ? "classTab center" : "classTab hide"}>
                                <div className="col-xs-12 col-lg-6">
                                    <h3>Why are your Yoga</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptate aut
                                        dolore atque repellat, molestias expedita harum non, error reiciendis ipsam ad
                                        laborum. Omnis consequatur suscipit beatae adipisci repellat iusto.</p>
                                    <br/><br/>
                                    <h3>When comes Yoga Your Time</h3>
                                    <p>Saturday-Sunday:8:00am - 10:00am</p>
                                    <p>Monday-Tuesday:10:00am - 12:00pm</p>
                                    <p>Wednesday-Friday:3:00pm - 6:00pm</p>
                                </div>
                                <div className="col-xs-12 col-lg-6 center">
                                    <img src="/Images/yoga.jpg" alt="yoga"/>
                                </div>
                            </div>

                            <div id="group" className={active === 2 ? "classTab center" : "classTab hide"}>
                                <div className="col-xs-12 col-lg-6 center">
                                    <img src="/Images/group.webp" alt="group"/>
                                </div>
                                <div className="col-xs-12 col-lg-6">
                                    <h3>Why are your Group</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptate aut
                                        dolore atque repellat, molestias expedita harum non, error reiciendis ipsam ad
                                        laborum. Omnis consequatur suscipit beatae adipisci repellat iusto.</p>
                                    <br/><br/>
                                    <h3>When comes Group Your Time</h3>
                                    <p>Saturday-Sunday:10:00am - 12:00am</p>
                                    <p>Monday-Tuesday:10:00am - 12:00pm</p>
                                    <p>Wednesday-Friday:3:00pm - 6:00pm</p>
                                </div>
                            </div>

                            <div id="solo" className={active === 3 ? "classTab center" : "classTab hide"}>
                                <div className="col-xs-12 col-lg-6">
                                    <h3>Why are your Solo</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptate aut
                                        dolore atque repellat, molestias expedita harum non, error reiciendis ipsam ad
                                        laborum. Omnis consequatur suscipit beatae adipisci repellat iusto.</p>
                                    <br/><br/>
                                    <h3>When comes Solo Your Time</h3>
                                    <p>Saturday-Sunday:8:00am - 10:00am</p>
                                    <p>Monday-Tuesday:10:00am - 12:00pm</p>
                                    <p>Wednesday-Friday:3:00pm - 6:00pm</p>
                                </div>
                                <div className="col-xs-12 col-lg-6 center">
                                    <img src="/Images/solo.jpg" alt="solo"/>
                                </div>
                            </div>

                            <div id="stretching" className={active === 4 ? "classTab center" : "classTab hide"}>
                                <div className="col-xs-12 col-lg-6 center">
                                    <img src="/Images/stret.webp" alt="stretching"/>
                                </div>
                                <div className="col-xs-12 col-lg-6">
                                    <h3>Why are your Stretching</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptate aut
                                        dolore atque repellat, molestias expedita harum non, error reiciendis ipsam ad
                                        laborum. Omnis consequatur suscipit beatae adipisci repellat iusto.</p>
                                    <br/><br/>
                                    <h3>When comes Stretching Your Time</h3>
                                    <p>Saturday-Sunday:10:00am - 12:00am</p>
                                    <p>Monday-Tuesday:10:00am - 12:00pm</p>
                                    <p>Wednesday-Friday:3:00pm - 6:00pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
        </>
)
}

export default Classes;