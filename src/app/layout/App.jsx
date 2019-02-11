/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar className="main" />
        <Container>
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
