const getState = ({ getStore, getActions, setStore }) => {
	const baseURL = "https://letshangapp.herokuapp.com";
	return {
		store: {
			contact: [],
			token: null,
			protected: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			exampleProtected: () => {
				const store = getStore();
				fetch(`${baseURL}/protected`, {
					headers: {
						"Content-type": "application/json",
						authorization: `Bearer ${store.token.token}`
					}
				})
					.then(response => {
						if (!response.ok) throw new Error(response.statusText);
						return response.json();
					})
					.then(data => setStore({ protected: data }))
					.catch(err => console.error(err));
			},
			addProfile: contact => {
				console.log(contact);
				fetch(`${baseURL}/signup`, {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify(contact)
				})
					.then(response => {
						if (!response.ok) throw new Error(response.statusText);
						return response.json();
					})
					.catch(err => console.error(err));
			},
			logout: () => {
				setStore({ token: null });
			},
			login: (email, password) => {
				let user = {
					email: email,
					password: password
				};
				console.log(email, password);
				fetch(`${baseURL}/login`, {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify(user)
				})
					.then(response => {
						if (!response.ok) throw new Error(response.statusText);
						return response.json();
					})
					.then(data => {
						alert("logged in");
						setStore({
							token: data
						});
					})
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
