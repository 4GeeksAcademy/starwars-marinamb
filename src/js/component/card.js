import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { Context } from "../store/appContext";

const Card = ({ element, type }) => {
    const { store, actions } = useContext(Context)
    

    console.log(store.favorites)

    return (
        <div className="principal"> 
            <div className="card " style={{ "width": "18rem" }}>
                <img src={type === "planets" && element.uid === "1" ? "https://i.pinimg.com/474x/9f/d0/02/9fd00203ccb2d3b53270623f7c5e8482.jpg"
                    : `https://starwars-visualguide.com/assets/img/${type}/${element.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>
                    <Link to={`/${type}/${element.uid}`}>
                        <button className="btn btn-primary">Detalles</button>
                    </Link>
                    <button
                        className="btn btn-outline-warning"
                        style={{ color: store.favorites.includes(element.name) ? "#ff0000" : "#f1e2e2" }}
                        onClick={() => {
                            if (!store.favorites.includes(element.name)) {
                                actions.addFavorites(element.name)
                            }
                            else { actions.deleteFavorites(element.name) }
                        }}> <CiHeart /></button>

                </div>
            </div>
        </div>
    )
}

export default Card