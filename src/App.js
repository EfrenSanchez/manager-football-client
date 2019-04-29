//Dependencies
import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";

//Components
import PlayerList from "./components/Player/PlayerList";

//Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app </h2>
      <PlayerList />
    </div>
  </ApolloProvider>
);

export default App;
