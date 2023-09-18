import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";

import hogs from "../porkers_data";

console.log(hogs)

function App() {

	const [greasedHogs, setgreasedHogs] = useState(false)


	const filteredHogs = hogs.filter((hog) => {
		if (greasedHogs) {
			if (hog.greased) {
				return true
			} else {
				return false
			}
		} else {
			return true;
		}
	})


	console.log(filteredHogs)

	const hogTiles = filteredHogs.map((hog) => {
		// console.log(hog)
		return <HogTile
			key={hog.name}
			name={hog.name}
			image={hog.image}
			greased={hog.greased}
			weight={hog.weight}
			specialty={hog.specialty}
			medal={hog["highest medal achieved"]}
		/>
	})
	return (
		<div className="App">
			<Nav />
			<button onClick={() => setgreasedHogs(!greasedHogs)}> This is a button</button>
			{hogTiles}
		</div>
	);
}

export default App;
