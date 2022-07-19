import React from "react"
import Card from "./components/Card"
import data from "./data"
import logo from "./images/TrollFace.svg"


export default function App() {

    console.log(data[0].title);
    const card = data.map(cardjson => {
        return (
            <Card
                key={cardjson.id}
                datajson={cardjson}

            />
        )
    })
    return (
        <div>

            <div className="menu">
                <div className="menu__content">
                    <img className="menu__img" src={logo} />
                    <h3 className="menu__text">Meme Generator</h3>
                    <p className="menu__seconde__text">React Course - Project 3</p>
                </div>
            </div>

            <div className="card__macro" >
                {card}
            </div>
        </div>
    )
}