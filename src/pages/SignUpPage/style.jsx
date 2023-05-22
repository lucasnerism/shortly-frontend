import styled from "styled-components";
import colors from "../../constants/colors.js";

export const Form = styled.form`
  width: 50%;
  min-width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

export const Input = styled.input`
  width: 99%;
  min-width: 348px;
  height: 60px;
  background: #FFFFFF;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  padding: 21px;
  :disabled{
    opacity: 0.7;
  }
  ::placeholder{
    color:${colors.nav_color};
  }
  &&~&&{
    margin-top: 25px;
  }
`;

export const Button = styled.button`
  width: 182px;
  height: 60px;
  background-color: ${colors.primary_color};
  border-radius: 12px;
  color: #FFFFFF;
  font-weight: 700;
  margin-top: 61px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  :disabled{
    opacity: 0.7;
  }
  cursor: pointer;
`;