import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, onEventOpen, deleteEvent } = this.props;
    const evnts = events.map(event => (
      <EventListItem
        key={event.id}
        event={event}
        onEventOpen={onEventOpen}
        deleteEvent={deleteEvent}
      />
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
