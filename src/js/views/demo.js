import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h2>Esta es una pagina con informacion</h2>
			<p>No es dinamica en el sentido, que no dependera de parametros para cambiar su contenido</p>
			<p>pero si puede cambiar el contenido por algoritmo</p>
			
		</div>
	);
};
