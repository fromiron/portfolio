import React from 'react';
import styled, {keyframes} from 'styled-components';
import colors from "../components/colors";

const ProgressBox = styled.div`
width: 100px;
height: 100px;
border-left: 6px ${colors.purple} solid ;
border-bottom: 6px ${colors.purple} solid ;
border-right: 6px ${colors.purple} solid ;
position: relative;
overflow: hidden;
transition: all 0.5s ease-in-out;
border-radius: 0 0 4px 4px;
cursor: pointer;
&:hover{
border-left: 6px ${colors.pink} solid ;
border-bottom: 6px ${colors.pink} solid ;
border-right: 6px ${colors.pink} solid ;
}
}
`;

const WaveGauge = keyframes`
from {
top: 100%;
}
`;

const WaveFrame = keyframes`
from {
transform: rotate(0deg);
}
to{transform: rotate(360deg);
}
`;

const Wave = styled.div`
position: absolute;
top: ${props => props.gauge || "100%"};
left: -70%;
background-color: rgba(51,124,255,0.7);
width: 200px;
height: 200px;
border-radius: 45% 46% 40% 44%;
animation: ${WaveFrame} 4s ${props=>props.random}ms infinite, ${WaveGauge} 2s ease-in-out;
`;

const Wave2 = styled.div`
position: absolute;
top: ${props => props.gauge || "100%"};
left: -70%;
background-color: rgba(11,159,255,0.7);
width: 200px;
height: 200px;
border-radius: 45% 40% 45% 47%;
animation: ${WaveFrame} 5.7s ${props=>props.random}ms infinite, ${WaveGauge} 2s ease-in-out;;
`;


const Wave3 = styled.div`
position: absolute;
top: ${props => props.gauge || "100%"};
left: -70%;
background: linear-gradient(to right, rgba(179,220,237,0.78) 0%,rgba(41,184,229,0.75) 50%,rgba(188,224,238,0.81) 100%); 
width: 200px;
height: 200px;
border-radius: 45% 46% 40% 43%;
animation: ${WaveFrame} 5.2s ${props=>props.random}ms infinite, ${WaveGauge} 2s ease-in-out;;
`;

const Wave4 = styled.div`
position: absolute;
top: ${props => props.gauge || "100%"};
left: -30%;
background-color: rgba(11,${props=>props.random},255,0.4);
width: 200px;
height: 200px;
border-radius: 45% 40% 45% 47%;
animation: ${WaveFrame} 5.2s ${props=>props.random}ms infinite, ${WaveGauge} 2s ease-in-out;;
`;

const Wave5 = styled.div`
position: absolute;
top: ${props => props.gauge || "100%"};
left: -30%;
background: linear-gradient(to right, rgba(169,228,247,0.71) 0%,rgba(15,180,231,0.73) 100%);
width: 200px;
height: 200px;
border-radius: 45% 48% 43% 43%;
animation: ${WaveFrame} 5.2s ${props=>props.random}ms infinite , ${WaveGauge} 2s ease-in-out;;
`;


const Wave6 = styled.div`
position: absolute;
top: ${props => props.gauge || "100%"};
left: -30%;
background-color: rgba(11,159,${props=>props.random},0.7);
width: 200px;
height: 200px;
border-radius: 45% 48% 45% 43%;
animation: ${WaveFrame} 5.2s ${props=>props.random}ms infinite, ${WaveGauge} 2s ease-in-out;;
`;

const Wave7 = styled.div`
position: absolute;
top: ${props => props.gauge || "100%"};
left: -100%;
background-color: rgb(57,175,${props=>props.random},0.7);
width: 300px;
height: 300px;
border-radius: 50% 49% 48% 49%;
animation: ${WaveFrame} 7s ${props=>props.random}ms infinite, ${WaveGauge} 2s ease-in-out;;
`;

const PercentText = styled.div`
text-align: center;
color: ${colors.white};
font-size: 2rem;
bottom: 10px;
z-index: 100;
position: absolute;
width: 100%;
`;

const Skill = styled.div`
text-align: center;
color: ${colors.purple};
font-size: 1.5rem;
z-index: 100;
width: 100%;
margin-top: 10px;
`;

const SkillWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: fit-content;
font-weight: 600;
`;

function ProgressBar(props) {
    let num = 110 - props.percent;
    let per = num + "%";
    return (
        <SkillWrapper>
            <ProgressBox>
                <Wave gauge={per} random={props.random}/>
                <Wave2 gauge={per} random={props.random}/>
                <Wave3 gauge={per} random={props.random}/>
                <Wave4 gauge={per} random={props.random}/>
                <Wave5 gauge={per} random={props.random}/>
                <Wave6 gauge={per} random={props.random}/>
                <Wave7 gauge={per} random={props.random}/>
                <PercentText>{props.percent + "%"}</PercentText>

            </ProgressBox>
            <Skill>{props.skill}</Skill>
        </SkillWrapper>

    );
}

export default ProgressBar;



