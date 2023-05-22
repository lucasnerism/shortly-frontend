import styled from "styled-components";
import colors from "../../constants/colors.js";

export const Container = styled.header`
  height: 250px;
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
  div{
    width: 185px;
    display: flex;
    justify-content: space-between;
    p{      
      &.green{
        color: ${colors.primary_color};
      }
    }
  }
  img{
    padding-top: 35px;
  }
`;

export const Navbar = styled.nav`
  width: 185px;
  display: flex;
  justify-content: space-between;
  max-height: 14px;
  p{    
    color: ${colors.nav_color};
    &.green{
      color: ${colors.primary_color};
    }
  }
`;