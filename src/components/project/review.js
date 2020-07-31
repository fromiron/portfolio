import React from "react";
import styled from "styled-components";
import colors from "../colors";
import Gist from "react-gist";

const Title = styled.h1`
color: ${colors.purple};
padding: 1rem 2rem; 
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


const GridTitle = styled.div`
font-size: 2rem;
margin-top: 1rem;
padding: 1rem 2rem;
color: ${colors.purple};
font-weight: 600;
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
&:hover{
background-color: ${colors.pink};
}
`;


const GridText = styled.div`
font-size: 1.6rem;
padding: 0.4rem 2rem;
font-weight: 300;
 color: ${colors.gray2};
`;

const GridStickerWrapper = styled.div`
display: inline-flex;
width: 100%;
flex-wrap: wrap;
`;

function GistCode(props) {
    return (<>
            <Title>重要Code</Title>
            <Gist id={props.gistId}/>
            <Title>Review</Title>
        </>
    )
}

function Review(props) {

    const {label = []} = props.label;

    return (
        <GridItem>
            <GridTitle>{props.title}</GridTitle>


            <GridStickerWrapper>
                {props.label.map((gist, index) => (
                    <GridSticker>{gist}</GridSticker>
                ))}
            </GridStickerWrapper>


            <GistCode gistTitle={props.title} gistId={props.id}/>
            <GridText>
                {props.review}
            </GridText>
        </GridItem>
    )
}

export default Review;
