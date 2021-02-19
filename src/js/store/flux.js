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
					phone: "236-963-6963",
					city: "Madrid",
					zipcode: "36325",
					state: "FL"
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
			}
		}
	};
};

export default getState;
