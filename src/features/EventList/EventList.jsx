import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events } = this.props;
    const evnts = events.map(event => (
      <EventListItem key={event.id} event={event} />
    ));
    return (
      <div>
        <h1>Event List </h1>
        {evnts}
      </div>
    );
  }
}

export default EventList;
