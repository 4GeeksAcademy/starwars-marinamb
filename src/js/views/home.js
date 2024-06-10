import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card";
import { element } from "prop-types";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const handleFav = (element, type) => {
		actions.addFavorites(element, type);
	}

	return (
		<>
			<div className="carousel d-flex  flex-nowrap row-cols-1 row-cols-md-5 overflow-auto mb-3">
				{store.characters.map((element) => (
					<Card key={element.uid} element={element} type="characters" handleFav={handleFav} />
				))}
			</div>

			<div className="carousel d-flex flex-nowrap row-cols-1 row-cols-md-5 overflow-auto mb-3">
				{store.planets.map((element) => (
					<Card key={element.uid} element={element} type="planets" />
				))}
			</div>

			<div className="carousel d-flex flex-nowrap row-cols-1 row-cols-md-5 overflow-auto mb-3">
				{store.vehicles.map((element) => (
					<Card key={element.uid} element={element} type="vehicles" />
				))}
			</div>
		</>
	);
};
