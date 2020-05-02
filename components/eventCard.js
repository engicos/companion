const EventCard = (props) => {
  var startTime =
    props.startTime < 13 ? props.startTime + "am" : props.startTime - 12 + "pm";
  var endTime =
    props.endTime < 13 ? props.endTime + "am" : props.endTime - 12 + "pm";
  return (
    <div className="eventcard">
      <div></div>
      <div className="duration">{`${startTime} - ${endTime}`}</div>
      <div className="time">{startTime}</div>
      <div className="topic">{props.eventName}</div>
    </div>
  );
};

export default EventCard;
