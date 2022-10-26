import React from 'react';
import './App.css';
import {useRoutes} from "react-router-dom";
import routes from "./routes";


function App() {
  return (
    <div className="App">
      {useRoutes(routes)}
    </div>
  );
}

export default App;
