import React from "react";

const WeekDays = [
  { id: "Monday", value: "MONDAY" },
  { id: "Tuesday", value: "TUESDAY" },
  { id: "Wednesday", value: "WEDNESDAY" },
  { id: "Thursday", value: "THURSDAY" },
  { id: "Friday", value: "FRIDAY" },
  { id: "Saturday", value: "SATURDAY" },
  { id: "Sunday", value: "SUNDAY" },
];

const HeaderDay = () => {
  return (
    <ul>
      {WeekDays.map((days) => {
        return (
          <li value={days.value}>
            {days.id}
          </li>
        )
      })}
    </ul>
  );
};

export default HeaderDay;