import "./App.scss";
import React from "react";
import Home from "./components/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import notFound from "./components/404Component";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme";

function App() {
    return (
        <ThemeProvider
            // @ts-ignore
            theme={Theme}
        >
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/menu" exact component={Menu} />
                    <Route path="/contact" exact component={Contact} />
                    <Route component={notFound} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
