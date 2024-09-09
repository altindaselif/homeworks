import { useState } from 'react'
import './App.css'
import Header from "./Components/Header/header.jsx";
import Hero from "./Components/Hero/hero.jsx";
import Info from "./Components/Info/info.jsx";
import Classes from "./Components/Classes/classes.jsx";
import BmiCalc from "./Components/BmiCalc/bmiCalc.jsx";
import Trainers from "./Components/Trainers/trainers.jsx";
import Products from "./Components/Products/products.jsx";
import Comments from "./Components/Comments/comments.jsx";
import Contact from "./Components/Contact/contact.jsx";
import Footer from "./Components/Footer/footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero/>
      <Info/>
      <Classes/>
      <BmiCalc/>
      <Trainers/>
      <Products/>
      <Comments/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
