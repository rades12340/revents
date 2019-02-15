import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import cuid from "cuid";
import { createEvent, updateEvent } from "../eventActions";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    id: "",
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    event
  };
};

const actions = {
  createEvent,
  updateEvent
};

class EventForm extends Component {
  state = {
    events: Object.assign({}, this.props.event)
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.events.id) {
      this.props.updateEvent(this.state.events);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...this.state.events,
        id: cuid(),
        hostPhotoURL: "./assets/user.png"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };

  onInputChange = e => {
    const newEvent = this.state.events;
    newEvent[e.target.name] = e.target.value;
    this.setState({
      events: newEvent
    });
  };

  render() {
    const { handleForm } = this.props;
    const { events } = this.state;

    return (
      <Segment style={{ marginTop: "7em" }}>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.onInputChange}
              value={events.title}
              placeholder="First Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              onChange={this.onInputChange}
              type="date"
              value={events.date}
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={events.city}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.onInputChange}
              value={events.venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.onInputChange}
              value={events.hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.history.goBack}>Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventForm);
