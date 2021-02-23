const getState = ({ getStore, getActions, setStore }) => {
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
			]
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
			editUserProfile: async (firstname, lastname, email, address, phone, status, id) => {
				let response = await fetch(backendApiUrl + "/update/" + id.toString(), {
					method: "PUT",
					body: JSON.stringify({
						firstname: firstname,
						lastname: firstname,
						email: email,
						address: address,
						phone: phone,
						status: status
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				getActions().loadSomeData();
			},
			deleteFriend: async id => {
				let response = await fetch(backendApiUrl + "/delete/" + id.toString(), {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => getActions().loadSomeData());
			}
		}
	};
};

export default getState;
