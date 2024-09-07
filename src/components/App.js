import React, { useState } from "react";

function Calendar() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getDaysArray = () => {
    const days = [];
    const firstDay = new Date(year, month).getDay(); // 0-6
    const daysInMonth = getDaysInMonth(month, year);
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const handleMonthChange = (e) => {
    setMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value));
  };

  const handlePreviousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div id="calendar">
      <h1>Calendar</h1>
      <div id="month-year">
        <select id="month" value={month} onChange={handleMonthChange}>
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
        <span id="year" onDoubleClick={() => (document.getElementById("year").contentEditable = true)}>
          {year}
        </span>
        <input
          id="year-input"
          type="number"
          value={year}
          onChange={handleYearChange}
          onBlur={() => (document.getElementById("year").contentEditable = false)}
          style={{ display: "none" }}
        />
      </div>
      <table id="calendar-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {getDaysArray().map((day, index) => (
            <tr key={index}>
              {day !== null && (
                <td>
                  <span id={`day-${index + 1}`}>{day}</span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div id="navigation">
        <button id="previous-month" onClick={handlePreviousMonth}>
          &lt;&lt;
        </button>
        <button id="previous-year" onClick={() => setYear(year - 1)}>
          &lt;
        </button>
        <button id="next-year" onClick={() => setYear(year + 1)}>
          &gt;
        </button>
        <button id="next-month" onClick={handleNextMonth}>
          &gt;&gt;
        </button>
      </div>
    </div>
  );
}

export default Calendar;
