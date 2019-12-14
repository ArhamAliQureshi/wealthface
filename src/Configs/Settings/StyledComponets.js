import styled from 'styled-components';

export const PageHeading = styled.h1`
    text-align: left;
`;

export const Menu = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  border-radius: 5px;
  width: 25%;
  min-height: 50vh;
  float: left;
  margin-right: 2%;
`;

export const MenuUl = styled.ul`
    list-style: none;
    text-align: left;
    font-weight: 800;
    &>a{
        color: gray;
        cursor: pointer;
        display: block;
        margin-bottom: 1em;
        text-decoration: none;
    }
    &>a:hover{
        /* margin: 10px 0; */
        color:  rgb(2, 125, 255);
        /* color: red; */
    }
`;

export const Tab = styled.div`
    background-color: #f2f2f2;
    border-radius: 5px;
    width: 70%;
    min-height: 50vh;
    float: left;
    &:first-child {
    color: red;
    margin-bottom: 20px;
    background-color: blue;
  }
`;
export const TabHeading = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: rgb(2, 125, 255);
    color: white;
    height: 30px;
    text-align: left;
    padding: 20px 0px 0px 30px;

`;   

export const TabBody = styled.div`
    margin: 2%
`;

export const PrimaryButton = styled.button`
  background-color: rgb(2, 125, 255);
  color: white;
  width: 6em;
  height: 3em;
  border: 0;
  border-radius: 5px;
  &:hover{
      background-color: gray;
      cursor: pointer;
  }
`;