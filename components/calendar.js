let today = {
  day: Date().match(" [0-9][0-9] ")[0].trim(),
  month: Date().match(" [A-z]+ ")[0].trim(),
  year: Date().match(" [0-9][0-9][0-9][0-9] ")[0].trim(),
  weekDay: Date().match("[A-z]+ ")[0].trim(),
};

let monthLength = {
  Jan: 31,
  Feb: 28 + isLeapYear(today.year),
  Mar: 31,
  Apr: 30,
  May: 31,
  Jun: 30,
  Jul: 31,
  Aug: 31,
  Sep: 30,
  Oct: 31,
  Nov: 30,
  Dec: 31,
};

let weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function firstDay(date, day) {
  return (((1 - date) % 7) + 7 + weekDays.indexOf(day)) % 7;
}

function isLeapYear(year) {
  if (year % 400 == 0) return true;
  else if (year % 100 == 0) return false;
  else if (year % 4 == 0) return true;
  else return false;
}

function getCalendar() {
  let weekDay = firstDay(today.day, today.weekDay);
  let numOfDays = monthLength[today.month];

  let calArray = Array();
  calArray[0] = Array();

  //fill empty slots
  for (let i = 0; i < weekDay; i++) {
    calArray[0][i] = " ";
  }

  let week = 0;
  for (let i = 1; i <= numOfDays; i++) {
    if (weekDay % 7 == 0) {
      week++;
      calArray[week] = Array();
    }
    calArray[week][weekDay++ % 7] =
      i == today.day ? <b>{i.toString()}</b> : i.toString();
  }

  return calArray;
}

function toggle() {
  let calendar = document.getElementById("calendar");
  let slider = document.getElementById("slider");

  slider.hidden = calendar.hidden;
  calendar.hidden = !calendar.hidden;
}

const Calendar = () => {
  return (
    <div className="calendar">
      <div id="month">{today.month + " " + today.year}</div>
      <button onClick={toggle}>Toggle</button>
      <div id="slider">
        <table>
          <tbody>
            <tr>
              <td>{Number(today.day) - 2}</td>
              <td>{Number(today.day) - 1}</td>
              <td>
                <b>{Number(today.day) - 0}</b>
              </td>
              <td>{Number(today.day) + 1}</td>
              <td>{Number(today.day) + 2}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="calendar">
        <table>
          <thead>
            <tr>
              {weekDays.map((day) => (
                <th>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getCalendar().map((row) => (
              <tr>
                {row.map((cell) => (
                  <td>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
