import moment from "moment";

const Calendar = () => {
  let today = moment();
  let firstWeek = moment(
    moment(today.format("MM YYYY"), "MM YYYY", true).format("ww YYYY"),
    "ww YYYY",
    true
  );

  let lastWeek = moment(
    today.clone().add(1, "month").date(0).format("ww YYYY"),
    "ww YYYY",
    true
  );

  let dayNames = new Array();
  for (
    var i = firstWeek.clone();
    i.week() === firstWeek.week();
    i.add(1, "day")
  ) {
    dayNames.push(i.format("ddd"));
  }

  let calGrid = new Array();
  for (
    var i = firstWeek.clone();
    i.week() <= lastWeek.week();
    i.add(1, "day")
  ) {
    if (calGrid[i.week()] === undefined) {
      calGrid[i.week()] = new Array();
    }
    calGrid[i.week()].push({
			date: i.format("DD"),
			cssClass: `${i.month()==moment().month()?"curr":"adj"} ${i.isSame(today, 'day') ? "today": ""}`
			})
		}

  return (
    <div id="calendar">
      <table className="grid">
        <tr className="dayNames">
          {dayNames.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
        {calGrid.map((week, i) => (
          <tr key={`week__${i}`}>
            {week.map((day) => (
              <td className={day.cssClass} key={day.date}>{day.date}</td>
            ))}
          </tr>
        ))}
      </table>
			<style jsx>{`
			.grid {
				width: 100%;
				text-align: center;
			}
			.adj {
				color: #aaa;
			}
			.today {
				text-decoration-line: underline;
			}
			`}</style>
    </div>
  );
};

export default Calendar;
