import React from "react";
import styled from "styled-components";
import Review from "./review";

const Description = styled.div`
width: 100%;
transition: height 1s ease-in-out;
height: ${props => props.visible === true ? "auto" : "0px"};
opacity: ${props => props.visible === true ? "1" : "0"};
margin-bottom: 10rem;
`;

const InnerWrapper = styled.div`
padding: 2rem;
`;


const GridContainer = styled.div`
max-width: 100%;
display: grid;
grid-template-columns: repeat( auto-fit, minmax(400px, 1fr) );
grid-column-gap: 3rem;
 grid-row-gap: 4rem;
`;

const DescriptionWrapper = styled.div`
height: fit-content;
overflow: hidden;
width: 100%;
`;

function ProjectDetail(props) {

    const {gist = []} = props; //propsを初期化しないとTypeError発生

    return (
        <DescriptionWrapper>
            <Description visible={props.visible}>
                <InnerWrapper>
                    <GridContainer>
                        {gist.map((gistData, index) => (
                            <Review key={index} title={gistData.title} id={gistData.id} label={gistData.label}
                                    review={gistData.review}

                            />))}


                    </GridContainer>


                </InnerWrapper>
            </Description>
        </DescriptionWrapper>
    )

}

export default ProjectDetail;
