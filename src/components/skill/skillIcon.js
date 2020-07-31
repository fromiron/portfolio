import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const IconWrapper = styled.div`
box-sizing: border-box;
width: 50px;
height: 50px;
border-radius: 4px;
box-shadow: 1px 2px 2px 2px rgba(0,0,0,0.1);
margin-right: 1rem;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
cursor: pointer;
transition: all 0.3s ease-in-out; 
border: 2px white solid; //borderにpropsからの色が適用される前、黒色に見えることを防止
&:hover{
border: 2px ${props => props.skillColor} solid;
}
}`


function SkillIcon(props) {
    return (
        <IconWrapper skillColor={props.color}>
            <FontAwesomeIcon icon={props.skill} size="4x" color={props.color}/>
        </IconWrapper>
    );
}

export default SkillIcon;
