const EventCard = (props) => {
  return (
    <div>
      <p>{props.startTime + "-" + props.endTime}</p>
      <h1>{props.startTime}</h1>
      <h2>{props.eventName}</h2>
    </div>
  );
};

export default EventCard;