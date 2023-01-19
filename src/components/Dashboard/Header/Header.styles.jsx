import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
  padding-block: 1.5rem;
  padding-inline-end: .75rem;
`;

export const HeaderDescription = styled.hgroup`
  background-color: #000;
  border-radius: 0px 14px 15px 0px;
  color: #fff;
  padding-block: .5rem;
  padding-inline: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 588px;

  & p{
    opacity: .95;
  }
`;

export const HeaderHour = styled.hgroup`
  text-align: center;
  color: #3B3E45;
  
  & h1{
    font-size: 40px;
  }

  & p{
    font-size: 20px;
  }
`;

export const HeaderWeather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  & label{
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

export const HeaderLogout = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .5rem;
`;

export const ButtonLogout = styled.button`
  background-color: transparent;
  border-width: 0;
  display: flex;
  flex-direction: column;
`;