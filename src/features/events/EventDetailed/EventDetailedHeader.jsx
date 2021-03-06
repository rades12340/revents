import React from "react";
import { Segment, Image, Item, Header, Button, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import moment from "moment";

const eventImageStyle = {
  filter: "brightness(30%)"
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};

const EventDetailedHeader = ({
  loading,
  event,
  isHost,
  isGoing,
  goingToEvent,
  authenticated,
  openModal,
  cancelGoingToEvent
}) => {
  let eventDate;
  if (event.date) {
    eventDate = moment(event.date).toDate();
  }
  return (
    <Segment.Group style={{ marginTop: "7em" }}>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/${event.category}.jpg`}
          fluid
          style={eventImageStyle}
        />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.title}
                  style={{ color: "white" }}
                />
                <p>{format(eventDate, "dddd Do MMMM")}</p>
                <p>
                  Hosted by <strong>{event.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        {!isHost && (
          <React.Fragment>
            {isGoing && !event.cancelled && (
              <Button onClick={() => cancelGoingToEvent(event)}>
                Cancel My Place
              </Button>
            )}
            {!isGoing && authenticated && !event.cancelled && (
              <Button
                loading={loading}
                onClick={() => goingToEvent(event)}
                color="teal"
              >
                JOIN THIS EVENT
              </Button>
            )}
            {!authenticated && !event.cancelled && (
              <Button
                loading={loading}
                onClick={() => openModal("UnauthModal")}
                color="teal"
              >
                JOIN THIS EVENT
              </Button>
            )}
            {event.cancelled && !isHost && (
              <Label
                size="large"
                color="red"
                content="This event has been cancelled"
              />
            )}
          </React.Fragment>
        )}

        {isHost && (
          <Button as={Link} to={`/manage/${event.id}`} color="orange">
            Manage Event
          </Button>
        )}
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailedHeader;
