import React from "react";
import "./App.css";
import cat from "./assets/images/cat.jpg";
import {Button} from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <div>
                <header className="App-header">
                    UM COS420 with React Hooks and TypeScript
                </header>
                <h1 className="heading">Top-level heading</h1>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. Stephen McCollum. Colors used by this page include:
                </p>
                    <ul>
                        <li>Red</li>
                        <li>White</li>
                        <li>Gray</li>
                    </ul>
            </div>
            <div style={ {width:"50%", margin:"auto", border: "1px solid black", padding:"10px"} }>
                <div style={ {width:"50px", height:"30px", backgroundColor:"red", margin:"auto"} }></div>
                <img src={cat} alt="A cat in a field" style={ {width:"50%", height:"auto", margin:"auto"} }/>
                <div>
                    <Button onClick={() => { console.log("Hello World!")}} style={ {margin:"auto"} }>Log Hello World</Button>
                </div>
            </div>
        </div>
    );
}

export default App;
