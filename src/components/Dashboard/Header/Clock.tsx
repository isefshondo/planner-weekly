import React from "react";

const Clock = () => {
  const [currentDate, setCurrentDate] = React.useState<Date>(new Date());

  let months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];

  let date = new Date();
  let currentMonth = months[date.getMonth()];
  let currentDay = date.getDate();
  let abbreviationLogic = (currentDay % 10);
  let currentYear = date.getFullYear();
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
    <React.Fragment>
      <h1>
        {currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h1>
      <p>
        {`${currentMonth} ${abbreviationDate}, ${currentYear}`}
      </p>
    </React.Fragment>
  );
};

export default Clock;