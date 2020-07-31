import React from "react";
import styled from "styled-components";
import colors from "../colors";


const Description = styled.div`
width: 100%;
height: ${props => props.visible === true ? "560px" : "0"};
background-color: orange;
transition: all 1s ease-in-out;
margin-bottom: 10rem;
overflow: hidden;
`;

const InnerWrapper = styled.div`
padding: 2rem;
`;


const GridContainer = styled.div`
max-width: 100%;
display: grid;
grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
grid-column-gap: 3rem;
 grid-row-gap: 4rem;
 background-color: red;
`;
const GridItem = styled.div`
color: #fcfcfc; 
border-left: 6px ${colors.purple} solid;
padding-bottom: 2rem;
cursor: pointer;
transition: all 0.4s ease-in-out;
 &:hover {
 box-sizing: border-box;
 box-shadow: 0 0 0 6px ${colors.pink} inset; 
 }`


const GridYear = styled.div`
font-size: 2.5rem;
padding: 0.4rem 2rem;
background-color: ${colors.purple};
width: fit-content;
`;

const GridTitle = styled.div`
font-size: 2rem;
padding: 0.4rem 2rem;
color: ${colors.purple};
font-weight: 600;
`;

const GridSubTitle = styled.div`
font-size: 1.8rem;
padding: 0.4rem 2rem;
font-weight: 300;
color: ${colors.gray2};
`;
const GridSticker = styled.div`
font-size: 1.4rem;
padding: 0.6rem 2rem;
width: fit-content;
margin: 0.5rem 0 0.5rem 2rem ; 
border-radius: 7px;
color: ${colors.white};
font-weight: 300;
background-color: ${colors.purple};
`;


const GridText = styled.div`
font-size: 1.6rem;
padding: 0.4rem 2rem;
font-weight: 300;
 color: ${colors.gray2};
`;

function ProjectDetail(props) {
    return (
        <Description visible={props.visible}>
            <InnerWrapper>
                <GridContainer>
                    <GridItem>
                        <GridYear>Point1</GridYear>
                        <GridTitle>天気情報システム</GridTitle>
                        <GridSubTitle>OpenWeatherMap API</GridSubTitle>
                        <GridSticker>GridSticker</GridSticker>
                        <GridText>

                        </GridText>
                    </GridItem>

                </GridContainer>


            </InnerWrapper>
        </Description>
    )

}

export default ProjectDetail;
