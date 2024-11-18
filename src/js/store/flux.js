const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//aqui van variables que estaran disponibles para TODA la aplicacion
			posts:[],
			singlePost: {}
		},
		actions: {
			//aqui van funciones que modifican las variables del store
			// Use getActions to call a function within a fuction
			 getPosts: async () => {
				try {
					const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
					if (!resp.ok) throw new Error('error fetching posts')
					const data = await resp.json()
					setStore({posts: data})
				} catch (error) {
					console.error(error)
				}
			},
			createPost: async (payload) => {
				try {
					const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(payload)
					});
					if (!resp.ok) throw new Error('error fetching posts')
					const data = await resp.json()
					console.log(data)
				} catch (error) {
					console.error(error)
				}
			},
			getSinglePost: async (id) => {
				try {
					const resp = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
					if (!resp.ok) throw new Error('error fetching posts')
					const data = await resp.json()
					setStore({singlePost: data})
				} catch (error) {
					console.error(error)
				}
			},
			deletePost: async (id) => {
				try {
					const resp = await fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
						method: 'DELETE'
					});
					if (!resp.ok) throw new Error('error fetching posts')
					const data = await resp.json()
					console.log(data)
				} catch (error) {
					console.error(error)
				}
			},
			editPost: async (id, post) => {
				try {
					const resp = await fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(post)
					});
					if (!resp.ok) throw new Error('error fetching posts')
					const data = await resp.json()
					console.log(data)
				} catch (error) {
					console.error(error)
				}
			}
		}
	};
};

export default getState;
