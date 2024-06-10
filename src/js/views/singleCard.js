import { element } from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


const SingleCard = () => {

    const [card, setCard] = useState({})

    const params = useParams()
    let type = params.type
    let uid = params.uid

    if (params.type === "characters") {
        type = "people"
    }

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/${type}/${uid}`)
            .then(response => response.json())
            .then(data => setCard(data.result.properties))
    }, [])
    console.log("type xd", type)
    console.log("uid", uid)
    console.log("CARD", card)

    let content;

    switch (params.type) {

        case "characters":
            content = (
                <div className="container text-center mt-5">
                    <div className="border border-warning p-4 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', margin: '0 20px' }}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='singleCard col-md-4'>
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className='img-fluid rounded-start' />
                            </div>
                            <div className='card-body text-black'>
                                <div style={{ border: '2px solid #FFD700', display: 'inline-block', padding: '5px' }}>
                                    <h5>{card.name}</h5>
                                </div>
                                <div>
                                    <p className='card-text'>height: {card.height}</p>
                                    <p className='card-text'>hair_color: {card.hair_color}</p>
                                    <p className='card-text'>eye_color: {card.eye_color}</p>
                                    <p className='card-text'>birth_year: {card.birth_year}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/">
                            <button className="btn btn-warning text-white"
                                style={{
                                    border: '1px solid #FFD700'
                                }}>
                                Atrás
                            </button>
                        </Link>
                    </div>
                </div>
            );
            break;

        case "planets":
            content = (
                <div className="container text-center mt-5">
                    <div className="border border-warning p-4 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', margin: '0 20px' }}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='singleCard col-md-4'>
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} className='img-fluid rounded-start' />
                            </div>
                            <div className='card-body text-black'>
                                <div style={{ border: '2px solid #FFD700', display: 'inline-block', padding: '5px' }}>
                                    <h5>{card.name}</h5>
                                </div>
                                <div>
                                    <p className='card-text'>diameter: {card.diameter}</p>
                                    <p className='card-text'>population: {card.population}</p>
                                    <p className='card-text'>climate: {card.climate}</p>
                                    <p className='card-text'>terrain: {card.terrain}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/">
                            <button className="btn btn-warning text-white"
                                style={{
                                    border: '1px solid #FFD700'}}>
                                Atrás
                            </button>
                        </Link>
                    </div>
                </div>
            );
            break;

        case "vehicles":
            content = (
                <div className="container text-center mt-5">
                    <div className="border border-warning p-4 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', margin: '0 20px' }}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='singleCard col-md-4'>
                                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} className='img-fluid rounded-start' />
                            </div>
                            <div className='card-body text-black'>
                                <div style={{ border: '2px solid #FFD700', display: 'inline-block', padding: '5px' }}>
                                    <h5>{card.name}</h5>
                                </div>
                                <div>
                                    <p className="card-text">model: {card.model}</p>
                                    <p className="card-text">passengers: {card.passengers}</p>
                                    <p className="card-text">cost_in_credits: {card.cost_in_credits}</p>
                                    <p className="card-text">vehicle_class: {card.vehicle_class}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/">
                            <button className="btn btn-warning text-white"
                                style={{
                                    border: '1px solid #FFD700'}}>
                                Atrás
                            </button>
                        </Link>
                    </div>
                </div>
            );
            break;

        default:
            content = null;
    }

    return (
        <div>{content}</div>
    )
}

export default SingleCard
