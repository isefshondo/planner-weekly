import styled from "styled-components";

export const Description = styled.div`
  background-color: #000;
  border-radius: 0px 14px 15px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;
  padding-inline: .75rem;

  & {
    color: white;
  }
`;

export const FormDashboard = styled.form`
  display: flex;
  justify-content: space-between;
  padding-inline: 1.5rem;
  margin-top: 35px;

  & .add-task{
    display: flex;
    column-gap: .15rem;
  }

  & .add-task input,
  & .add-task select{
    background-color: white;
    border: 1px solid #FECE00;
    border-radius: 10px;
    outline: none;
    padding-inline: .5rem;
  }

  & .manage-task{
    display: flex;
    column-gap: .75rem;
  }
`;

export const ButtonForm = styled.button`
  background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  border-width: 0;
  color: #E0E0E0;
  font-weight: 400px;
  font-size: 1.125rem;
  padding-block: .65rem;
`;

export const BtnDashboard = styled.button`
  background-color: ${(props) => props.type === "submit" ? '#00BA88' : '#FF3D1F;'};
  border-radius: 10px;
  border-width: 0;
  width: 200px;
  font-size: 18px;
  padding-block: .3rem;
  color: white;
`;