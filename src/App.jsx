import React from "react"
import Card from "./components/Card"
import data from "./data"
import logo from "./images/2.png"


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
                    <h3 className="menu__text">my travel journal</h3>
                </div>
            </div>

            <div className="card__macro" >
                {card}
            </div>
        </div>
    )
}