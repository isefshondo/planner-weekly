import styled from "styled-components";

export const FormRegisterWrapper = styled.form`
  margin-top: 67px;
`;

export const RegisterInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;

  & div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const InvalidMessage = styled.span`
  display: flex;
  align-items: center;
  height: 56px;
  color: #E9B425;
`;