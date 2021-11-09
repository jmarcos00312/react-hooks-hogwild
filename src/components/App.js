import React from "react";
import Nav from "./Nav";
import Main from "./main"
import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Main hogs={hogs} />
		</div>
	);
}

export default App;
