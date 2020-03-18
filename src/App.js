import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ThemeProvider } from "emotion-theming";
import { light } from "./themes/light";
import { dark } from "./themes/dark";

import "./App.css";
import Header from "./components/Header/Header";
import Add from "./pages/Add";
import Vote from "./pages/Vote";
import Result from "./pages/Result";
import Button from "./components/Button";
import GlobalStyles from "./themes/GlobalStyles";

export default function App() {
  const [theme, setTheme] = React.useState(dark);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <main>
          <Header
            onSwitchColorButton={() => setTheme(theme === dark ? light : dark)}
          />
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

            <Route path="/polls/:pollId">
              <Result />
            </Route>
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
}
