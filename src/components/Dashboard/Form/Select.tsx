import React, { SetStateAction } from "react";
import { StyledSelect } from "../../../assets/styles/Global.styles";

type SelectProps = {
  valueWeekDay: string,
  setWeekDay: React.Dispatch<SetStateAction<string>>,
};

const WeekDays = [
  { id: "Monday", value: "MONDAY", isDefault: true },
  { id: "Tuesday", value: "TUESDAY", isDefault: false },
  { id: "Wednesday", value: "WEDNESDAY", isDefault: false },
  { id: "Thursday", value: "THURSDAY", isDefault: false },
  { id: "Friday", value: "FRIDAY", isDefault: false },
  { id: "Saturday", value: "SATURDAY", isDefault: false },
  { id: "Sunday", value: "SUNDAY", isDefault: false },
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