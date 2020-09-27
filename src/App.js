import React, { useState } from "react";
import Quote from "./components/Quote";
import Stories from './components/Stories'

function App() {
	const [userQuery, setUserQuery] = useState("");

	const updateUserQuery = (event) => {
		setUserQuery(event.target.value);
	};

	const searchQuery = () => {
		console.log(userQuery);
		window.open(`https://google.com/search?q=${userQuery}`);
	};
	return (
		<div className="App">
			<div className="title">Hello Mikey!</div>
			<div className="form">
				<input
					type="text"
					value={userQuery}
					onChange={updateUserQuery}
					onKeyPress={(e) => {
						if (e.key === "Enter") searchQuery();
					}}
				/>
				<button onClick={searchQuery}>Search</button>
			</div>
			<Quote></Quote>
      <Stories></Stories>
		</div>
	);
}

export default App;
