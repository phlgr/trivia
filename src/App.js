import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Add from "./pages/Add";
import Vote from "./pages/Vote";
import Result from "./pages/Result";

export default function App() {
  return (
    <>
      <Router>
        <main>
          <Header />
          <Switch>
            <Route exact path="/">
              <div className="container">
                <Link className="btn-primary" to="/add">
                  New Poll
                </Link>
              </div>
            </Route>

            <Route path="/add">
              <Add />
            </Route>

            <Route path="/vote">
              <Vote />
            </Route>

            <Route path="/result">
              <Result />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}
