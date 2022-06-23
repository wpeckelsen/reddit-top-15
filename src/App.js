import "./App.css";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import Home from "./pages/homepage/Home";
import SubReddit from "./pages/subredditpage/SubReddit";
import Navigation from "./components/navigation bar/Navigation";

function App() {
  return (
      <>
        <Navigation/>

        <Switch>
          <Route exact path="/">
            <div className="flex-container">
              <Home />
            </div>
          </Route>

          <Route exact path="/subreddit/:id">
            <SubReddit />
          </Route>
        </Switch>
      </>
  );
}
export default App;
