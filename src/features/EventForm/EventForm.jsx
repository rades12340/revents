import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

class EventForm extends Component {
  state = {
    events: emptyEvent
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({ events: this.props.selectedEvent });
    }
  }

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.events.id) {
      this.props.updateEvent(this.state.events);
    } else {
      this.props.createEvent(this.state.events);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedEvent !== this.props.selectedEvent) {
      this.setState({ events: nextProps.selectedEvent || emptyEvent });
    }
  }

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
      <Segment>
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
          <Button type="button" onClick={handleForm}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
