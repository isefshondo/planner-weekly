import styled from "styled-components";

/* Header's Style */
export const StyledHeader = styled.header`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-block-start: 1.519rem;
  padding-block-end: 1.813rem;
`;
/* End of Header's Style */

/* Description's Style */
export const DescriptionWrapper = styled.hgroup`
  width: 36.75rem;
  height: 4rem;
  background-color: #000;
  border-radius: 0px 14px 15px 0px;
  color: #fff;
  padding-block: 0.625rem;
  padding-inline: 1.5rem;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
/* End of Description's Style */

/* Clock's Style */
export const ClockWrapper = styled.hgroup`
  text-align: center;

  & time {
    font-size: 2.5rem;
    font-weight: 700;
  }

  & h3 {
    font-size: 1.25rem;
    font-weight: 400;
  }
`;
/* End of Clock's Style */

/* Weather's Style */
export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  & h6{
    font-weight: 400;
  }
`;

export const StyledWeather = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: .75rem;
  font-size: 3rem;
  font-weight: 700;
`;
/* End of Weather's Style */

/* Logout Style */
export const LogoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 1.313rem;
  padding-inline-end: 1.438rem;
`;

export const StyledLogoutButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: transparent;
`;
/* End of Logout Style */