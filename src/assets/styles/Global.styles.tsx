import styled from "styled-components";
import Background from "../imgs/main-img.png";

export const Wrapper = styled.main`
  display: flex;

  // Here check if the current page is
  // the planner. Is it is, apply Background
  // style.
`;

export const InitialSection = styled.section`
  width: 50%;
  height: 100vh;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageSection = styled.section`
  width: 50%;
  height: 100vh;
  background: url(${Background});
  background-position: center;
  background-size: cover;
  text-align: center;

  & img{
    margin-top: 36px;
  }
`;