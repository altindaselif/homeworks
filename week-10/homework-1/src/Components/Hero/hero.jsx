import "../../../gridview.css"
import "./hero.css"

const Hero = () => {
    return (
        <>
            <section id="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <p className="herotag">POWERFULL</p>
                        </div>
                        <div className="col-xs-12 col-lg-8">
                            <div className="herohead">
                                <p>Group <br/> Practise <br/> With Trainer</p>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <p className="herotext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
                                magni magnam dicta ipsa impedit eaque at tempore accusantium rerum rem similique labore
                                voluptate!</p>
                        </div>
                        <div>
                            <div className="herobuttons">
                                <button className="herobtn1">Sign Up</button>
                                <button className="herobtn2">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
