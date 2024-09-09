import "../../../gridview.css"
import "./contact.css"

const Contact = () => {
    return (
        <>
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>CONTANCT US</h2>
                            <div className="center">
                                <div className="underline"></div>
                            </div>
                            <p className="htext">Lorem ipsum is not simply random text. It has roots in a piece of
                                classical at Hampden-Sydney College</p>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <div className="contact-info">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <h4>Mobile Number</h4>
                                        <p>+135 773 321 4442</p>
                                    </div>
                                    <div className="col-xs-6">
                                        <h4>E-mail Address</h4>
                                        <p>demo@demo.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form">
                                <h3>Make An Appoinment</h3>
                                <input id="name" className="contact-input" type="text" placeholder="Your Name"/>
                                <input id="email" className="contact-input" type="email" placeholder="Your Email"/>
                                <textarea name="message" id="message" className="message-box"
                                          placeholder="Your Message"></textarea>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <div className="maps-frame">
                                <div>
                                    <iframe width="100%" height="506" frameBorder="0" scrolling="no" marginHeight="0"
                                            marginWidth="0"
                                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                        <a href="https://www.gps.ie/">gps tracker sport</a></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact