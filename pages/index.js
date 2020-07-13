import Head from "next/head";
import Calendar from "../components/calendar";
import EventCard from "../components/eventCard";
import Query from "../components/query";
import TODAYS_LECTURES_QUERY from "../apollo/queries/lecture/lectures";
import moment from 'moment';
import { useState } from 'react';

export default function Home() {
  const [currDay, setDay] = useState(
    moment()
  );

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/event.css"></link>
      </Head>

      <div className="app">
        <Calendar dayHandler={setDay}></Calendar>
        <div className="events">
          <Query query={TODAYS_LECTURES_QUERY(currDay.format("ddd"))}>
            {({data: {lectures}}) => {
              if( lectures.length == 0 )
                return <EventCard event={{Start:"8", End: "20", subject: {Title: "Nothing planned today"}}} key={`event__0`}/>
              return lectures.map( lecture => {
                return <EventCard event={lecture} key={`event__${lecture.id}`}/>
              })
            }}
          </Query>
        </div>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 10px 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .events {
            display: grid;
            width: 100%;
        }

      `}</style>

      <style jsx global>{`
        
      `}</style>
    </div>
  );
}
