import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventList from "../../events/EventList/EventList";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { updateEvent } from "../eventActions";

const mapState = state => ({
  events: state.events,
  loading: state.async.loading
});

const actions = {
  updateEvent
};

class EventDashboard extends PureComponent {
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events, loading } = this.props;
    if (loading) return <LoadingComponent inverted={true} />;
    return (
      <Grid style={{ marginTop: "7em" }}>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventDashboard);
