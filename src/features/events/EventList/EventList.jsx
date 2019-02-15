import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, deleteEvent } = this.props;
    const evnts = events.map(event => (
      <EventListItem key={event.id} event={event} deleteEvent={deleteEvent} />
    ));
    return <div>{evnts}</div>;
  }
}

export default EventList;
