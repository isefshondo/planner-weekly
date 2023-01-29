import styled from "styled-components";

import Background from './assets/main-img.png';

export const Wrapper = styled.main`
  display: flex;
  color: #e0e0e0;
`;

export const ImageWrapper = styled.section`
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

export const InputForm = styled.input`
  width: 379px;
  background: transparent;
  border: 1px solid ${(props) => props.isValid ? '#FFF' : '#E9B425'};
  border-radius: 50px;
  color: #E0E0E0;
  outline: none;
  padding: 1.25rem;
`;

export const GeneralButton = styled.button`
  background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
  border-radius: 50px;
  border-width: 0;
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  color: #E0E0E0;
  font-weight: 700;
  font-size: 2rem;
  /* padding-block: .75rem;
  padding-inline: 8.95rem; */
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

export const StyledWelcome = styled.hgroup`
  & h1{
    font-size: 60px;
    font-weight: 400;
  }
`;