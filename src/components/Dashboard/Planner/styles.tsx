import styled from "styled-components";
import { TimeProps } from "../../../interfaces/dashboard-interfaces";
import { StyledCardsWrapperProps, StyledDayProps, StyledTaskProps } from "../../../interfaces/styles-interfaces";

/* Planner's Style */
export const PlannerWrapper = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  column-gap: 1.125rem;
  /* flex-direction: column; */
  overflow-y: scroll;
  padding-inline-start: 1.5rem;
  padding-inline-end: .625rem;
  
  &::-webkit-scrollbar{
    width: 1rem;
    background: #fff;
    border-radius: 1.375rem;
  }

  &::-webkit-scrollbar-thumb{
    background: #dcdfe3;
    border-radius: .5rem;
  }

  &::-webkit-scrollbar-corner{
    visibility: hidden;
  }
`;

export const TimeWrapper = styled.div`
  width: 5.313rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.875rem;
`;

export const TasksWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: .875rem;
  overflow-x: scroll;

  &::-webkit-scrollbar{
    width: 1rem;
    background: #fff;
    border-radius: 1.375rem;
  }

  &::-webkit-scrollbar-thumb{
    background: #dcdfe3;
    border-radius: .5rem;
  }

  &::-webkit-scrollbar-corner{
    visibility: hidden;
  }
`;

export const CardsWrapper = styled.div<StyledCardsWrapperProps>`
  display: flex;
  align-items: center;
  column-gap: 1.063rem;

  /*${(props) => props.hasConflict && (
    `&::after{
      content: "";
      width: 90%;
      background: rgba(0, 0, 0, .7);
      border: 4px solid rgba(0, 0, 0, .7);
      border-radius: 5px;
      position: absolute;
    }`
  )}*/
`;
/* End of Planner's Style */

/* Days Header's Style */
export const StyledDayWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  column-gap: .188rem;
  padding-inline-end: 2.938rem;
`;

export const StyledDayFilter = styled.li<StyledDayProps>`
  width: ${(props) => props.isSelected ? `18.125rem` : `15rem` };
  height: 2.063rem;
  list-style: none;
  background-color: var(--${(props) => props.value.toLocaleLowerCase()});
  box-shadow: ${(props) => props.isSelected ? `0px 5px 5px rgba(168, 168, 168, 0.75);` : `0px 4px 24px rgba(168, 168, 168, 0.25)`};
  border-width: 0;
  border-radius: 9px 9px 0px 0px;
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding-inline: .375rem;
  transition: width .3s;
`;
/* End of Days Header's Style */

/* Time's Card Style */
export const StyledTaskTime = styled.time<TimeProps>`
  width: 5.313rem;
  height: ${(props) => props.belongTime === "Time" ? `4.688rem` : `5.313rem`};
  background: ${(props) => props.hasConflict ? 'rgba(0, 0, 0, 0.7)' : `var(--${props.belongDay.toLocaleLowerCase()})`};
  border-radius: 10px;
  box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
  color: ${(props) => props.hasConflict ? '#fff' : '#000'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.063rem;
  font-weight: 800;
`;
/* End of Time's Card Style */

/* Card's Style */
export const Card = styled.div`
  width: 32rem;
  height: 5.313rem;
  background: linear-gradient(112.83deg, rgba(228, 240, 248, 0.42) 0%, rgba(255, 255, 255, 0.336) 110.84%);
  box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(10.5px);
  border-radius: 15px;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-self: center;
  overflow: hidden;

  & p{
    position: absolute;
    width: 27.25rem;
    height: 3.75rem;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-block: .75rem;
    margin-inline-start: 1.75rem;
  }
`;

export const StyledDivTask = styled.div<StyledTaskProps>`
  width: .875rem;
  height: 100%;
  background: ${(props) => props.hasConflict ? 'rgba(0, 0, 0, 0.7)' : `var(--${props.selectedDay.toLocaleLowerCase()})`};
  border-radius: 15px 0px 0px 15px;
  position: absolute;
`;

export const DeleteCardButton = styled.button`
  width: 3.563rem;
  height: 1.563rem;
  background-color: #FF3D1F;
  border-width: 0;
  border-radius: 4px;
  color: #fff;
  position: absolute;
  top: .375rem;
  right: .438rem;
`;
/* End of Card's Style */