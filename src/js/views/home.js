import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Card } from '../component/card.jsx'
import { Formulario } from "../component/formulario.jsx";
import { Post } from "../component/post.jsx";
import { Context } from "../store/appContext.js";


export const Home = () => {
	const {store, actions} = useContext(Context);

	const [newPost, setNewPost] = useState({
		title:'',
		body: ''
	})

	const handleChange = e => {
		const {name, value} = e.target
		setNewPost({...newPost, [name]: value})
	}

	const handleSubmit = e => {
		e.preventDefault();
		console.log(newPost)
		actions.createPost(newPost)
	}

	


	return (
		<div className="text-center mt-5">
			Aqui empieza home
			<p>cantidad de posts: {store.posts?.length}</p>
		<form onSubmit={e=>handleSubmit(e)}>
			<input type="text" value={newPost.title} onChange={handleChange} placeholder="title" name="title" />
			<textarea cols={40} value={newPost.body} onChange={handleChange} rows={10} placeholder="body" name="body" />
			<input type="submit" />
		</form>
		
			<div>
				<h3>
					Single post
				</h3>
				<p>
				{store.singlePost?.title}
				</p>
				<p>
				{store.singlePost?.body}
				</p>
				<button onClick={()=>actions.deletePost(store.singlePost?.id)}>
					eliminar
				</button>
			</div>
			{
				store.posts?.map(post => <Post key={post.id} pid={post.id} title={post.title} body={post.body} />)
			}

		</div>
	);
}