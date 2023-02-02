import React from "react";
import HeaderDay from "./HeaderDay";

const DashboardPlanner = () => {
  const [selectedDay, setSelectedDay] = React.useState<string>("");

  const selectedDayFilter = (selectedWeekDay: string) => {};

  return (
    <HeaderDay />
  );
};

export default DashboardPlanner;