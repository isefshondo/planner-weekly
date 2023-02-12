import React from "react";
import { ClockWrapper } from "../../../assets/styles/Global.styles";

const Clock = () => {
  const [currentDate, setCurrentDate] = React.useState<Date>(new Date());

  let months: Array<string> = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];

  let date: Date = new Date();
  let currentMonth: string = months[date.getMonth()];
  let currentDay: number = date.getDate();
  let abbreviationLogic: number = (currentDay % 10);
  let currentYear: number = date.getFullYear();
  let abbreviationDate: number | string = 0;

  if(abbreviationLogic === 1) abbreviationDate = currentDay + "st";
  if(abbreviationLogic === 2) abbreviationDate = currentDay + "nd";
  if(abbreviationLogic === 3) abbreviationDate = currentDay + "rd";
  if(abbreviationLogic === 0 || abbreviationLogic > 3) abbreviationDate = currentDay + "th";

  React.useEffect(() => {
    setInterval(() => setCurrentDate(new Date()), 1000);
    return clearInterval(setInterval(() => setCurrentDate(new Date()), 1000));
  }, []);

  return (
    <ClockWrapper>
      <time>
        {currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </time>
      <h3>{`${currentMonth} ${abbreviationDate}, ${currentYear}`}</h3>
    </ClockWrapper>
  );
};

export default Clock;