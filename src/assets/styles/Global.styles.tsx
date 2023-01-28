import styled from "styled-components";
import Background from "../imgs/main-img.png";

export const Wrapper = styled.main`
  display: flex;
  color: #e0e0e0;

  // Here check if the current page is
  // the planner. If it is, apply Background
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

export const StyledMessage = styled.hgroup`
  & h1{
    font-size: 60px;
    font-weight: 400;
  }
`;

export const StyledLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 379px;
  background: transparent;
  border: 1px solid #FFF;
  border-radius: 50px;
  color: #E0E0E0;
  outline: none;
  padding: 1.25rem;
`;