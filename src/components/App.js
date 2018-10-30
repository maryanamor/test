import React from "react";
import Article from "./Article";
import users from '../fixtures';

function App() {
    return (
        <div>
            <h1>App name</h1>
            <Article users={users[0]} foo="bar" flag/>
        </div>
    )
}

export default App