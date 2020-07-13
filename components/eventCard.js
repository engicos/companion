const EventCard = ({event}) => {
  event.Start = event.Start.slice(0,2);
  event.End = event.End.slice(0,2);
  var Start =
    event.Start < 13 ? event.Start + "am" : event.Start - 12 + "pm";
  var End =
    event.End < 13 ? event.End + "am" : event.End - 12 + "pm";
  return (
    <div className="eventcard">
      <div></div>
      <div className="duration">{`${Start} - ${End}`}</div>
      <div className="time">{event.Start}</div>
      <div className="topic">{event.subject.Title}</div>
      <style jsx>{`
        .eventcard {
            display: grid;
            grid-template:  [null] "time duration" 1em  [duration]
                            [time] "time topic"    auto [event title]
                                /   3em  auto;
            border: 1px solid;
            border-radius: 10px;
            margin: 0.5rem;
        }

        .eventcard > .duration {
            grid-area: duration;
            font-style: italic;
            text-align: left;
            padding: .5em 0em 0.5em 1em;
        }

        .eventcard > .time {
            grid-area: time;
            text-align: right;
            padding: 20%;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 2em;
        }

        .eventcard > .topic {
            grid-area: topic;
            text-align: left;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            padding: 1em 0.5em 1em 1em;
        }
      `}</style>
    </div>
  );
};

export default EventCard;
