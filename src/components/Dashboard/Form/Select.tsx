import React, { SetStateAction } from "react";
import { StyledSelect } from "../../../assets/styles/Global.styles";

type SelectProps = {
  valueWeekDay: string;
  setWeekDay: React.Dispatch<SetStateAction<string>>;
};

const WeekDays = [
  { id: "Monday", value: "MONDAY" },
  { id: "Tuesday", value: "TUESDAY" },
  { id: "Wednesday", value: "WEDNESDAY" },
  { id: "Thursday", value: "THURSDAY" },
  { id: "Friday", value: "FRIDAY" },
  { id: "Saturday", value: "SATURDAY" },
  { id: "Sunday", value: "SUNDAY" },
];

const Select = (props: SelectProps) => {
  return (
    <StyledSelect
      name="week-days"
      id="week-days"
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        props.setWeekDay(e.target.value);
      }}
      value={props.valueWeekDay}
    >
      {WeekDays.map((options) => (
        <option key={options.id} value={options.value}>
          {options.id}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;