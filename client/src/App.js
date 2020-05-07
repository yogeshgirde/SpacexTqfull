import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import logo from "./logo.jpeg";
import Launches from "./components/Launches";
import { BrowserRouter as Router, Route } from "react-router-dom";
import launch from "./components/launch";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 400, display: "block", margin: "auto" }}
          />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
