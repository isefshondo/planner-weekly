import styled from "styled-components";
import DashboardLogo from "../../../assets/logo-uol.svg"

export const WeekRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-inline-end: 2.85rem;
`;

export const StyledButton = styled.button`
  --monday: #ff0024;
  --tuesday: #ff8000;
  --wednesday: #ffce00;
  --thursday: rgba(255, 0, 36, 0.7);
  --friday: rgba(255, 128, 0, 0.7);
  --saturday: rgba(255, 206, 0, 0.7);
  --sunday: rgba(255, 0, 36, 0.5);
  background-color: var(--${(props) => props.day});
  border-radius: 9px 9px 0px 0px;
  border-width: 0;
  width: 15rem;
  font-size: 1.25rem;
  font-weight: 600;
  padding: .3rem;
  text-align: left;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${DashboardLogo});
  background-repeat: no-repeat;
  background-position: bottom right;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const StyledTime = styled.div`
  --monday: #ff0024;
  --tuesday: #ff8000;
  --wednesday: #ffce00;
  --thursday: rgba(255, 0, 36, 0.7);
  --friday: rgba(255, 128, 0, 0.7);
  --saturday: rgba(255, 206, 0, 0.7);
  --sunday: rgba(255, 0, 36, 0.5);
  width: 85px;
  height: 85px;
  background-color: var(--${(props) => props.day});
  border-radius: 10px;
  box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
`;

export const PlannerWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: .65em;
  padding-inline-start: 1.75rem;
  padding-inline-end: .25rem;
  overflow-x: auto;
  overflow-y: auto;
`;

export const PlannerRow = styled.li`
  width: 100%;
  display: flex;
  column-gap: 1rem;
`;

export const TaskDescription = styled.div`
  background: linear-gradient(112.83deg, rgba(228, 240, 248, 0.42) 0%, rgba(255, 255, 255, 0.336) 110.84%);
  display: flex;
  width: 512px;
  height: 85px;
  overflow: hidden;
  color: #333333;
  box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(10.5px);
  border-radius: 15px;

  & p{
    width: 435px;
    height: 60px;
    overflow: hidden;
    padding-block: .75rem;
    padding-inline: 1.5rem;
    font-size: 20px;
  }
`;

export const TaskColor = styled.div`
  --monday: #ff0024;
  --tuesday: #ff8000;
  --wednesday: #ffce00;
  --thursday: rgba(255, 0, 36, 0.7);
  --friday: rgba(255, 128, 0, 0.7);
  --saturday: rgba(255, 206, 0, 0.7);
  --sunday: rgba(255, 0, 36, 0.5);
  width: 14px;
  height: 85px;
  border-radius: 15px 0px 0px 15px;
  background-color: var(--${(props) => props.day});
  position: absolute;
`;

export const DeleteTask = styled.button`
  width: 57px;
  height: 25px;
  background: #FF3D1F;
  border-radius: 4px;
  border-width: 0;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 6px;
  margin-right: 7px;
`;