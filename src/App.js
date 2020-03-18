import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ThemeProvider, withTheme } from "emotion-theming";
import light from "./themes/light";

import "./App.css";
import Header from "./components/Header/Header";
import Add from "./pages/Add";
import Vote from "./pages/Vote";
import Result from "./pages/Result";
import Button from "./components/Button";
import GlobalStyles from "./themes/GlobalStyles";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Router>
        <main>
          <Header />
          <Switch>
            <Route exact path="/">
              <div className="container">
                <Link to="/add">
                  <Button>New Poll</Button>
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
    </ThemeProvider>
  );
}
