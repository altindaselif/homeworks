import "../../../gridview.css"
import "./info.css"

const Info = () => {
    return (
        <>
            <section id="info">
                <div className="container">
                    <div className="row ">
                        <div className="col-xs-12 col-lg-3">
                            <div className="info-object">
                                <p className="infotxt1">325</p>
                                <p className="infotxt2">Course</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <div className="info-object">
                                <p className="infotxt1">405</p>
                                <p className="infotxt2">Work Out</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <div className="info-object">
                                <p className="infotxt1">305</p>
                                <p className="infotxt2">Working Hour</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <div className="info-object">
                                <p className="infotxt1">705</p>
                                <p className="infotxt2">Happy Client</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Info;