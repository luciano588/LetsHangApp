const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			event: [
				{
					id: 11,
					invitees: ["ana", "Julios", "Jack"],
					eventname: "Bday Party!",
					eventstreetaddress: "Ocean drive",
					eventunitno: "578",
					eventstate: "FL",
					eventcity: "Miami Beach",
					eventzipcode: "33589",
					eventdescription: "My Party.",
					eventpicture: "145487.jpg",
					eventstatus: "Going",
					eventcomments: ["cool", "nice place"]
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
