import styled from "styled-components";

export const StyledInput = styled.input`
  width: ${(props) => props.type === "text" ? '25rem' : '8rem'};
  border: 2px solid #FECE00;
  border-radius: 10px;
  padding: .55rem;
  outline: none;

  &::-webkit-calendar-picker-indicator{
    background: none;
  }
`;

export const StyledSelect = styled.select`
  width: 15rem;
  border-color: #FECE00;
  border-radius: 10px;
  padding: .55rem;
  outline: none;
`;

export const StyledFormTask = styled.form`
  display: flex;
  justify-content: space-between;
  padding-inline: 1.5rem;
  margin-top: 35px;
  margin-bottom: 22px;
`;

export const InputWrapper = styled.div`
  display: flex;
  column-gap: ${(props) => props.variant === "buttons" ? '.75rem' : '.3rem'};
`;

export const StyledAction = styled.button`
  background-color: ${(props) => props.type === "submit" ? '#00BA88' : '#FF3D1F;'};
  border-radius: 10px;
  border-width: 0;
  width: 200px;
  font-size: 18px;
  padding-block: .3rem;
  color: white;
`;