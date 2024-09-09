import "../../../gridview.css"
import "./bmiCalc.css"
import React, {useEffect, useState} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const BmiCalc = () => {
    useEffect(() => {
        let height = document.getElementById("height");
        let weight = document.getElementById("weight");
        let bmiOutput = document.getElementById("bmi-output");
        let indicatorArrow = document.getElementById("BMI-indicator");

        function result() {
            let a = Number(weight.value);
            let b = Number(height.value);
            if (a / (b*b) * 10000 > 62) {
                return 62;
            } else {
                return (a / (b*b) * 10000);
            }
        }

        function addition() {
            bmiOutput.innerText = result().toFixed(1);
        }

        function indicator() {
            indicatorArrow.style.left = result() * 1.3 + "%";
        }

        height.addEventListener("input", addition);
        height.addEventListener("input", indicator);
        weight.addEventListener("input", addition);
        weight.addEventListener("input", indicator);
    }, []);

    return (
        <>
        <section className="BMI-calc">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-6">
                        <div>
                            <h3>BMI Calculator</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                        </div>
                        <div className="BMI-form">
                            <input id="height" className="BMI-input" type="number" placeholder="Your height"/>
                                <span className="BMI-input-label">cm</span>
                            <input id="weight" className="BMI-input" type="number" placeholder="Your weight"/>
                                <span className="BMI-input-label">kg</span>
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-6">
                        <div className="center">
                            <p>Your BMI is <span id="bmi-output"> 0 </span></p>
                        </div>
                        <div>
                            <img className="BMI-index" src="/Images/bmi-index.jpg" alt="bmi-index"/>
                            <div id="BMI-indicator"><i className="bi bi-triangle-fill"></i></div>
                        </div>
                    </div>
            </div>
        </div>
        </section>
</>
)
}

export default BmiCalc;