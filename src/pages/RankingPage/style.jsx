import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  span{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
  }
  h1{
    font-weight: 700;
    font-size: 36px;
  }
`;

export const Rankings = styled.ul`
  width: 1017px;
  height: 241px;
  padding: 19px 40px;
  background: #FFFFFF;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
  overflow: scroll;
  li{
    display: flex;
    strong{
      font-weight: 700;
    }
    p{
      font-size: 22px;
    }
  }
  li~li{
      margin-top: 13px;
    }
`;

export const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`;