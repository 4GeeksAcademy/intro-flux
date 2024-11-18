import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Post = (props) => {
const {store, actions} = useContext(Context)
    return (
        <article className="container">
            <h2>{props.title}</h2>
            <p>
                {props.body}
            </p>
            <button onClick={()=>actions.deletePost(props.pid)}>eliminar</button>
            <Link to={'/post/'+props.pid}>
                leer mas...
            </Link>
        </article>
    )
}