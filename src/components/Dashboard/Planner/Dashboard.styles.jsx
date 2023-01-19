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
  height: 75px;
  background-color: var(--${(props) => props.day});
  border: 1px solid #DCDFE3;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
`;

export const PlannerWrapper = styled.div`
  width: 100%;
  padding-inline-start: 1.75rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const PlannerRow = styled.div`
  width: 100%;
  display: flex;
`;