import React, { useState, useEffect } from 'react'
import './App.css'
import Dice1 from '../public/Images/Dice1.png'
import Dice2 from '../public/Images/Dice2.png'
import Dice3 from '../public/Images/Dice3.png'
import Dice4 from '../public/Images/Dice4.png'
import Dice5 from '../public/Images/Dice5.png'
import Dice6 from '../public/Images/Dice6.png'

function App() {
  let dices = [
      Dice1,
      Dice2,
      Dice3,
      Dice4,
      Dice5,
      Dice6,
  ]

  const [diceImg, setDiceImg] = useState(dices[0])
  const [diceImg2, setDiceImg2] = useState(dices[1])
  const [rolling, setRolling] = useState(false)



    useEffect(() => {
        if (!rolling && diceImg !== dices[0] && diceImg2 !== dices[1]) {
            Score();
        }
    }, [diceImg, diceImg2, rolling]);


    function rollDice() {
        setRolling(true);
        let interval = setInterval(() => {
            let random1 = Math.floor(Math.random() * 6);
            let random2 = Math.floor(Math.random() * 6);
            setDiceImg(dices[random1]);
            setDiceImg2(dices[random2]);
        }, 50);

        setTimeout(() => {
            clearInterval(interval);
            setRolling(false);
        }, 1000);
    }




  const Score = () => {
    const diceValue = dices.indexOf(diceImg) +1 ;
    const dice2Value = dices.indexOf(diceImg2) +1 ;

    if (!rolling && diceValue === 1 && dice2Value === 2) {
        return (
            <div className="roll-container">
                <h2>Roll The Dice!</h2>
            </div>
        );
    }

    if (rolling) {
          return (
              <div className="roll-container">
                  <h2>Rolling!</h2>
              </div>
          );
      }

    if (diceValue > dice2Value) {
      return (
          <>
            <div className="win-container">
              <h2>You Win</h2>
            </div>
          </>
      )
    } else if (diceValue < dice2Value) {
      return (
          <>
            <div className="lose-container">
              <h2>You Lose</h2>
            </div>
          </>
      )
    } else {
      return (
          <>
            <div className="draw-container">
              <h2>Draw!</h2>
            </div>
          </>
      )
    }
  }

const [username, setUsername] = useState("")
const [usernameInput, setUsernameInput] = useState("")
const handleNewUser = () => {
    setUsername(usernameInput)
}

  if (username === "") {
    return (
        <>
          <div className="container">
            <div className="popup">
              <h3>Enter Your Name</h3>
              <input type="text" value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)}
                     placeholder="Your name"/>
              <button onClick={handleNewUser}>Let's Roll</button>
            </div>
          </div>
        </>
    )
  }

  return (
      <>
        <div className="container">
          <Score/>
        <div className="dice-container">
          <div>
            <h3>{username}</h3>
            <img className={rolling ? 'dice-rolling' : ''} src={diceImg} alt="dice1"/>
          </div>
          <div>
            <h3>Computer</h3>
            <img className={rolling ? 'dice-rolling' : ''} src={diceImg2} alt="dice2"/>
          </div>
        </div>
        <div className="button-container">
          <button onClick={rollDice} disabled={rolling}>Roll</button>
        </div>
      </div>
    </>
  )
}

export default App
