import React from 'react';
import styled from 'styled-components';
import colors from "../components/colors";
import ProgressBar from "../components/progressBar";
import skill from "../components/skill/skillList";

const SectionBase = styled.section`
max-width: 100vm;
max-height: 100vm;
padding: 0 10%;
overflow: hidden;
box-sizing: border-box;
@media screen and (max-width:768px){
padding: 0;
}
`;
const LeftWrapper = styled.div`
margin-left: 2rem;
`;

const Title = styled.div`
font-size: 7rem;
padding-top: 10vh;
padding-bottom: 5vh;
font-weight: 600;
color : ${colors.gray2};
@media screen and (max-width:768px){
font-size: 6rem;
}
`;


const GridContainer = styled.div`
max-width: 70%;
display: grid;
grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
grid-column-gap: 1rem;
 grid-row-gap: 2rem;
 margin: 4rem auto 4rem auto;
 
`;
const GridItem = styled.div`
color: ${colors.purple}; 
padding-bottom: 2rem;

transition: all 0.4s ease-in-out;
display:flex;
justify-content: center;
`;


function SkillsPage() {

    return (

        <SectionBase>
            <LeftWrapper>

                <Title>
                    Skills
                </Title>

                <GridContainer>

                    {skill.map((skill, index) => (
                        <GridItem key={index}>
                            <ProgressBar percent={skill.percent} skill={skill.skill}
                                         random={Math.round(Math.random() * 256)}/>
                        </GridItem>
                    ))}


                </GridContainer>

            </LeftWrapper>
        </SectionBase>
    );
}

export default SkillsPage;
