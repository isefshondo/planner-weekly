import styled from "styled-components";

export const FormLoginWrapper = styled.form`
  margin-top: 135px;

  & h3{
    font-size: 30px;
    font-weight: 400;
  }
`;

export const InputFormWrapper = styled.label`
  display: flex;
  align-items: center;
  column-gap: .75rem;

  & img{
    transform: translateX(${(props) => props.inputState ? `-3.25rem` : `0`});
  }
`;

export const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

export const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  height: 115px;
  color: #E9B425;
`;

export const LinkWrapper = styled.div`
  & span{
    display: flex;
    justify-content: center;
    padding-block: 1.25rem;

    & a{
      text-decoration: none;
    }

    & a:visited{
      color: #e0e0e045;
    }
  }
`;