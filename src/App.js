//Dependencies
import React, { Fragment } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Components
import NavBar from "./components/Navigation/NavBar";
import Home from "./components/Home/Home";
import PlayerList from "./components/Player/PlayerList";
import DeletePlayer from "./components/Player/DeletePlayer";
import League from "./components/Competition/League";
import Friendly from "./components/Competition/Friendly";
import AddMatch from "./components/Match/AddMatch";

//Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App = () => (
  
  <ApolloProvider client={client}>
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/fichas-jugadores" component={PlayerList} />
          <Route path="/baja-jugadores" component={DeletePlayer} />
          <Route path="/liga" component={League} />
          <Route path="/amistosos" component={Friendly} />
          <Route path="/nuevo-partido" component={AddMatch} />
        </Switch>
      </Fragment>
    </Router>
  </ApolloProvider>
);

export default App;
