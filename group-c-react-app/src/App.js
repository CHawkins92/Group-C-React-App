import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Create from "./components/Create/Create.js";
import Delete from "./components/Delete/Delete.js";
import Read from "./components/Read/Read.js";
import Update from "./components/Update/Update.js";
import "semantic-ui-css/semantic.min.css";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <h3>React CRUD</h3>
        </div>
        <div>
          <Route exact path="/" component={Create} />
        </div>
        <div style={{ marginTop: 25 }}>
          <Route exact path="/read" component={Read} />
        </div>
        <div>
          <Route path="/update" component={Update} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
