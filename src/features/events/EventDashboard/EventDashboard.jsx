import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { Grid } from "semantic-ui-react";
import EventList from "../../events/EventList/EventList";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { getEventsForDashboard } from "../eventActions";
import EventActivity from "../EventActivity/EventActivity";

const mapState = state => ({
  events: state.events,
  loading: state.async.loading
});

const actions = {
  getEventsForDashboard
};

class EventDashboard extends PureComponent {
  componentDidMount() {
    this.props.getEventsForDashboard();
  }

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events, loading } = this.props;
    if (loading) return <LoadingComponent inverted={true} />;
    return (
      <Grid style={{ marginTop: "7em" }}>
        <Grid.Column width={10}>
          {events && (
            <EventList deleteEvent={this.handleDeleteEvent} events={events} />
          )}
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: "events" }])(EventDashboard));
