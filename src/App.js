import React, { useState } from "react";

function App() {
  const [userQuery, setUserQuery] = useState("");
  
  const updateUserQuery = (event) => {
    setUserQuery(event.target.value);
  }
	return <div className="App">
    <div className="form">
      <input type="text" value={userQuery} onChange={updateUserQuery}/>
      <button>Search</button>
    </div>
  </div>;
}

export default App;
