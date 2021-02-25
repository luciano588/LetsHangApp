const getState = ({ getStore, getActions, setStore }) => {
	// const baseURL = "https://letshangapp.herokuapp.com";
	const baseURL = "https://3000-emerald-porpoise-8mb52dkw.ws-us03.gitpod.io";
	return {
		store: {
			profiles: [
				{
					id: 1,
					firstname: "First",
					lastname: "Last",
					initial: "white",
					address: "7590 nw 40th st",
					email: "where@gmail.com",
					username: "bobby1",
					phone: "236-963-6963",
					city: "Madrid",
					zipcode: "36325",
					state: "FL",
					friends: [
						{
							id: 0,
							firstname: "Bob",
							lastname: "Bobby",
							city: "town"
						},
						{
							id: 1,
							firstname: "Bo",
							lastname: "Bo",
							city: "town"
						}
					]
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			location: null,
			contact: [],
			token: null,
			protected: null
		},
		actions: {
			getLocation: async () => {
				let store = getStore();

				if (navigator.geolocation) {
					const position = await navigator.geolocation.getCurrentPosition(position => {
						console.log(position);
						store.location = {
							lat: position.coords.latitude,
							lng: position.coords.longitude
						};
						setStore(store);
					});
				}
			},
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
			// editUserProfile: async (firstname, lastname, email, address, phone, status, id) => {
			// 	let response = await fetch(backendApiUrl + "/update/" + id.toString(), {
			// 		method: "PUT",
			// 		body: JSON.stringify({
			// 			firstname: firstname,
			// 			lastname: firstname,
			// 			email: email,
			// 			address: address,
			// 			phone: phone,
			// 			status: status
			// 		}),
			// 		headers: {
			// 			"Content-Type": "application/json"
			// 		}
			// 	});
			// 	getActions().loadSomeData();
			// },
			// deleteFriend: async id => {
			// 	let response = await fetch(backendApiUrl + "/delete/" + id.toString(), {
			// 		method: "DELETE",
			// 		headers: {
			// 			"Content-Type": "application/json"
			// 		}
			//     }).then(() => getActions().loadSomeData());
			// },
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

			getUserProfile: async user_id => {
				let response = await fetch(`${baseURL}user/${store.token.user.id}`);
				let user = await response.json();
				if (response.ok) {
					setStore({ token: user });
				}
			},

			logout: () => {
				setStore({ token: null });
			},
			login: async (email, password) => {
				let store = getStore();
				let user = {
					email: email,
					password: password,
					lat: store.location.lat,
					lng: store.location.lng
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
							token: data,
							profiles: data
						});
						console.log(store.profiles);
						console.log(store.profiles.user);
					})
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
