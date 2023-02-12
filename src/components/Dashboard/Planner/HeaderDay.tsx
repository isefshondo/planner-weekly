import React from "react";
import { StyledDayFilter, StyledDayWrapper } from "../../../assets/styles/Global.styles";
import { SelectDayProps } from "../../../interfaces/Dashboard";

const WeekDays = [
  { id: "Monday", value: "MONDAY" },
  { id: "Tuesday", value: "TUESDAY" },
  { id: "Wednesday", value: "WEDNESDAY" },
  { id: "Thursday", value: "THURSDAY" },
  { id: "Friday", value: "FRIDAY" },
  { id: "Saturday", value: "SATURDAY" },
  { id: "Sunday", value: "SUNDAY" },
];

const HeaderDay = (props: SelectDayProps) => {
  return (
    <StyledDayWrapper>
      {WeekDays.map((days) => {
        return (
          <StyledDayFilter
            key={days.id}
            value={days.value}
            onClick={(e: React.MouseEvent)  => {
              props.setSelectedDayFilter((e.target as HTMLLIElement).innerHTML.toUpperCase());
            }}
            isSelected={props.choosenDay === days.id.toLocaleUpperCase()}
          >
            {days.id}
          </StyledDayFilter>
        );
      })}
    </StyledDayWrapper>
  );
};

export default HeaderDay;