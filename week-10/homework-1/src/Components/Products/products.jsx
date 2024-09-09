import "../../../gridview.css"
import "./products.css"
import "bootstrap-icons/font/bootstrap-icons.css";

const Products = () => {
    return (
        <>
            <section id="products">
                <div className="container">
                    <div className="row center">
                        <div className="col-xs-12">
                            <h2>PURCHASE FROM US</h2>
                            <div className="center">
                                <div className="underline"></div>
                            </div>
                            <p className="htext">Lorem ipsum is not simply random text. It has roots in a piece of
                                classical at Hampden-Sydney College</p>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <div className="product-card">
                                <img src="/Images/purchase1.jpg" alt=""/>
                                <div>
                                    <h3>Kettlebell / 5kg</h3>
                                    <p><span>89,99$</span> / 59,99$</p>
                                </div>
                                <div className="purchase">
                                    <i className="bi bi-cart-fill"></i><p> Add To Cart</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <div className="product-card">
                                <img src="/Images/purchase2.jpg" alt=""/>
                                <div>
                                    <h3>Treadmill</h3>
                                    <p><span>899,99$</span> / 599,99$</p>
                                </div>
                                <div className="purchase">
                                    <i className="bi bi-cart-fill"></i><p> Add To Cart</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <div className="product-card">
                                <img src="/Images/purchase3.jpg" alt=""/>
                                <div>
                                    <h3>Adjustable Dumbell</h3>
                                    <p><span>89,99$</span> / 59,99$</p>
                                </div>
                                <div className="purchase">
                                    <i className="bi bi-cart-fill"></i><p> Add To Cart</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-lg-3">
                            <div className="product-card">
                                <img src="/Images/purchase4.jpg" alt=""/>
                                <div>
                                    <h3>Kettlebell / 3kg</h3>
                                    <p><span>89,99$</span> / 59,99$</p>
                                </div>
                                <div className="purchase">
                                    <i className="bi bi-cart-fill"></i><p> Add To Cart</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products