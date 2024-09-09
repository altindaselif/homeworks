import "../../../gridview.css"
import "./header.css"
import React, {useEffect, useState} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";



const Header = () => {

    const changeHeader = () => {
        let scrollPosition = window.scrollY;
        const navbar = document.getElementById("header")
        if ( scrollPosition > 80 ) {
            navbar.style.backgroundColor = "#355592"
        } else {
            navbar.style.backgroundColor = "transparent"
        }
    }
    window.addEventListener("scroll", changeHeader);

    useEffect(() => {
        const menuButton = document.getElementById("mobile-menu-button");
        console.log(menuButton);
        let mobileMenu = document.querySelector (".mobile-menu");
        console.log(mobileMenu);

        menuButton.addEventListener("click", () =>{
            mobileMenu.classList.toggle("active")
        });
    },[])


    return (
        <>
            <div><img className="herobg" src="/Images/hero-man.jpg" alt="herobg"/></div>
            <header id="header">
                <div className="container">
                    <div className="row center">
                        <div className="col-xs col-sm-3">
                            <a href="#">
                                <img className="logo" src="/Images/logo.png" alt="logo"/>
                            </a>
                        </div>
                        <div className="col-xs col-sm-9">
                            <nav id="nav">
                                <a className="nav-item" href="#">Home</a>
                                <a className="nav-item" href="#classes">Classes</a>
                                <a className="nav-item" href="#trainers">Trainer</a>
                                <a className="nav-item" href="#comments">Review</a>
                                <a className="nav-item" href="#contact">Contact</a>
                                <a className="button" href="#">JOIN US</a>
                            </nav>
                            <a id="mobile-menu-button"><i className="bi bi-list"></i></a>
                        </div>
                    </div>
                </div>

                <div className="mobile-menu">
                    <a href="#">Home</a>
                    <a href="#info">About</a>
                    <a href="#classes">Classes</a>
                    <a href="#">Service</a>
                    <a href="#trainers">Trainer</a>
                    <a href="#comments">Review</a>
                    <a href="#">Blog</a>
                    <a href="#contact">Contact</a>
                    <a className="mobilebutton" href="#">JOIN US</a>
                </div>
            </header>
        </>
    )
}

export default Header