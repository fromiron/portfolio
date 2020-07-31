import React from 'react';
import styled from 'styled-components';
import colors from "./colors";


const HamburgerBtn = styled.div`
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    box-sizing: border-box;
    padding: 0;
`;

const InputCheckBox = styled.input`
  display: flex;
  width: 60px;
  height: 60px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 1;
  &:checked ~ #line1{
   background-color:  ${colors.orange};
  transform: rotate(45deg) translate(8px);
  }
  
    &:checked ~ #line2{
   background-color: ${colors.orange};
  transform: rotate(495deg) translate(4px);   
  }
  
    &:checked ~ #line3{
   background-color: ${colors.orange};
  transform: rotate(45deg);
  opacity: 0;
  }
`;

const BtnLineObj = styled.span`
  width: 55px;
  height: 8px;
   background-color: ${colors.gray2};
   border-radius: 4px;
  margin-bottom: 10px;
  transition: all .5s cubic-bezier(.08,.81,.87,.71);
  &:nth-child(2){
   transform-origin: 4px 0;
   background-color: ${colors.pink};
  }
  &:last-child{
     margin-bottom: 0;
     transform-origin: bottom right;
  }
`;


function Hamburger() {

    return (
        <HamburgerBtn id="hamburger">
            <InputCheckBox type="checkbox"/>
            <BtnLineObj id="line1"></BtnLineObj>
            <BtnLineObj id="line2"></BtnLineObj>
            <BtnLineObj id="line3"></BtnLineObj>
        </HamburgerBtn>
    );
}

export default Hamburger;
