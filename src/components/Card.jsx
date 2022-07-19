import React from "react"
import img1 from "../images/1.svg"

export default function Card(prop) {
    console.log(prop.datajson.googleMapsUrl)
    return (
        <div className="card" >
            <img className="card__img" src={prop.datajson.imageUrl} />
            <div className="card__texthousing">
                <div className="card__locationhousing">
                    <img className="card__pin" src={img1} />
                    <p className="card__location" >{prop.datajson.location}</p>
                    <a className="card__googlemaps" href={prop.datajson.googleMapsUrl} target="_blank">
                        View on Google Maps
                    </a>
                </div>
                <h1 className="card__title" >{prop.datajson.title}</h1>
                <div className="card__datehousing">
                    <p className="card__startdate" >{prop.datajson.startDate}</p>
                    <p> - </p>
                    <p className="card__enddate" >{prop.datajson.endDate}</p>
                </div>
                <p className="card__description" >{prop.datajson.description}</p>
            </div>
        </div>
    )
}