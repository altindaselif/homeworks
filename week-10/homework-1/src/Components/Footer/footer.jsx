import "../../../gridview.css"
import "./footer.css"

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <img src="/Images/logo.png" alt="footerlogo"/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur officia, dolorum quos
                            animi beatae et amet aspernatur hic porro nulla consequatur sint quasi dignissimos deleniti
                            suscipit dolores, ea tempore molestiae quia excepturi obcaecati possimus? Nemo temporibus
                            aliquid vitae excepturi ut.</p>
                        <div className="col-xs-6">
                            <div className="center">
                                <div className="footer-link">
                                    <h4>Information</h4>
                                    <a href="#">About Us</a>
                                    <a href="#">Classes</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Contact</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="center">
                                <div className="footer-link">
                                    <h4>Helpful Links</h4>
                                    <a href="#">Services</a>
                                    <a href="#">Support</a>
                                    <a href="#">Terms & Conditions</a>
                                    <a href="#">Privicy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer