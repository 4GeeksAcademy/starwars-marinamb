import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsFillTrash3Fill } from "react-icons/bs";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	console.log(store.favorites)
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"> <img src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg" alt="..." width="50" height="50" />
				</span>
			</Link>

			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					{store.favorites.length}Favoritos
				</button>
				<ul className="dropdown-menu">
					{store.favorites.map((favorite, index) => {
						return (
							<li key={index}> <p>{favorite}
								<BsFillTrash3Fill onClick={() => {
									actions.deleteFavorites(index)
								}} /></p>
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	);
};
