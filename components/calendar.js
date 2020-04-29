let today = {
  day: Date().match(" [0-9][0-9] ")[0].trim(),
  month: Date().match(" [A-z]+ ")[0].trim(),
	year: Date().match(" [0-9][0-9][0-9][0-9] ")[0].trim(),
	weekDay: Date().match("[A-z]+ ")[0].trim()
};

let monthLength = {
	"Jan": 31,
	"Feb": 28 + Number(today.year%4 == 0),
	"Mar": 31,
	"Apr": 30,
	"May": 31,
	"Jun": 30,
	"Jul": 31,
	"Aug": 31,
	"Sep": 30,
	"Oct": 31,
	"Nov": 30,
	"Dec": 31
};

let weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function firstDay(date, day) {
	return ((1-date)%7 + 7 + weekDays.indexOf(day) ) % 7;
}

// Rewrite to give a valid calendar
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
      <button onClick={toggle}></button>
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
              {weekDays.map( (day) => <th>{day}</th>)}
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

/*
<html>
  <head>
	<title>Calendar</title>
  </head>
  <body>
		<div id="month"></div> <button onclick="toggle()">Toggle</button>
		<div id="slider"></div>
		<div id="calendar"></div>
		
		<script type="text/javascript">
			let today = {
				day: Date().match(" [0-9][0-9] ")[0].trim(),
				month: Date().match(" [A-z]+ ")[0].trim(),
				year: Date().match(" [0-9][0-9][0-9][0-9] ")[0].trim()
			};

			function getCalendar() {
				let weekDay = Math.floor(Math.random() * 7); // Random day to start the week
				let numOfDays = [28, 30, 31][Math.floor(Math.random() * 3)];

				let calArray = Array(["M", "T", "W", "T", "F", "S", "S"].map(ch => ch.italics()));
				calArray[1] = Array();

				//fill empty slots
				for( let i=0; i<weekDay; i++ ) {
					calArray[1][i] = "";
				}

				let week = 1;
				for( let i=1; i<=numOfDays; i++) {
					if( weekDay%7 == 0 ) {
						week++;
						calArray[week] = Array();
					}
					calArray[week][weekDay++%7] = i==today.day?i.toString().bold():i.toString();
				}

				return calArray;
			}

			function getSlider() {
				let slideValues = [];
				for( let i=Number(today.day)-2; i<Number(today.day)+2; i++) {
					slideValues.push(i);
				}
				return slideValues;
			}

			function fillCalendar() {
				let container = document.getElementById("calendar");
				let table = document.createElement("table");
				let calGrid = getCalendar();
				calGrid.forEach( row => {
					let calRow = document.createElement("tr");
					row.forEach( cell => {
						let calCell = document.createElement("td");
						calCell.innerHTML = cell;
						calRow.append(calCell);
					})
					table.append(calRow);
				})
				container.append(table);
			}
			function fillSlider() {
				let container = document.getElementById("slider");
				let slider = document.createElement("table");
				let sliderValues = getSlider();
				sliderValues.forEach( val => {
					let cell = document.createElement("td");
					cell.innerHTML = val;
					slider.append(cell);
				})
				container.append(slider);
			}
			
			function toggle() {
				let slider = document.getElementById("slider");
				let calendar = document.getElementById("calendar");

				// This way, they'll always toggle, even if not setup properly
				slider.hidden = calendar.hidden;
				calendar.hidden = !calendar.hidden;
			}
			document.getElementById("month").innerText = today.month + " " + today.year;
			fillCalendar();
			fillSlider();
			document.getElementById("calendar").hidden = true;

		</script>
  </body>
</html>*/
