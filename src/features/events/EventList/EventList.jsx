import React, { Component } from "react";
import EventListItem from "./EventListItem";
import InfinitScroll from "react-infinite-scroller";

class EventList extends Component {
  render() {
    const { events, getNextEvents, loading, moreEvents } = this.props;
    const evnts =
      events &&
      events.map(event => <EventListItem key={event.id} event={event} />);
    return (
      <div>
        {events && events.length !== 0 && (
          <InfinitScroll
            pageStart={0}
            loadMore={getNextEvents}
            hasMore={!loading && moreEvents}
            initialLoad={false}
          >
            {evnts}
          </InfinitScroll>
        )}
      </div>
    );
  }
}

export default EventList;
