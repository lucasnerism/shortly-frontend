import styled from "styled-components";
import colors from "../../constants/colors.js";

export const Container = styled.div`
  padding-top: 136px;
  margin: auto;
`;

export const ShortLink = styled.div`
  display: flex;
  justify-content: space-between;
  input{
    width: calc(100% - 220px);
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
  }
  button{
    width: 182px;
    height: 60px;
    background-color: ${colors.primary_color};
    border-radius: 12px;
    color: #FFFFFF;
    font-weight: 700;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    :disabled{
      opacity: 0.7;
    }
    cursor: pointer;
  }
`;

export const List = styled.ul`
  padding-top: 59px;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 60px;
  display: flex;
  background: ${colors.secondary_color};
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;  
  div{
    display: flex;
    padding: 0 94px 0 21px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    p{
      color: #FFFFFF;
      width: 33.33%;
      text-align: center;
      cursor: pointer;
      &:first-child{
        text-align: start;
      }
      &:last-child{
        text-align: end;
      }
    }
    &.delete{
      width: 130px;
      background: #FFFFFF;
      justify-content: center;
      align-items: center;
      padding: 0;
      
    }
  }
  &&~&&{
    margin-top: 42px;
  }
`;

