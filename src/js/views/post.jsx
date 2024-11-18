import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const Post = () =>{
    const {store, actions} = useContext(Context);
        const params = useParams()
useEffect(()=>{
    actions.getSinglePost(params.id)
},[])


    return (
        <div className="container">
           <article>
            <h2>{store.singlePost?.title}</h2>
            <p>
                {store.singlePost?.body}
            </p>
           </article>
        </div>
    )
}