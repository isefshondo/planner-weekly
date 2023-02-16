import styled from "styled-components";
import { CloseModalProps } from "../../interfaces/Styles";

export const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const Overlay = styled.div<CloseModalProps>`
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.closeModal && (`
    display: none;
  `)}
`;

export const Box = styled.article`
  width: 45%;
  background-color: white;
  border-radius: 15px;
  border: none;
  color: #1C1D20;
  font-size: 2em;

  & figure {
    display: flex;
    justify-content: end;
    padding: .75em;
  }

  & hgroup {
    text-align: center;
    padding-block-end: 2.5em;
    padding-inline: 1.75em;
  }
`;