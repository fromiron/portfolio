import React from 'react';
import styled from 'styled-components';
import colors from "../components/colors";
import certificate from "../components/certificateList";

const SectionBase = styled.section`
max-width: 100vm;
max-height: 100vm;
padding: 0 10%;
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
grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
grid-column-gap: 3rem;
 grid-row-gap: 4rem;
 margin: 4rem auto 4rem auto;
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

function CertificatesPage() {


    return (

        <SectionBase>
            <LeftWrapper>
                <Title>Certificates</Title>

                <GridContainer>
                    {certificate.map((certificate, index) => (
                        <GridItem key={index}>
                            <GridYear>{certificate.year}</GridYear>
                            <GridTitle>{certificate.titleJp}</GridTitle>
                            <GridSubTitle>{certificate.titleEn}</GridSubTitle>
                            <GridSticker>{certificate.agency}</GridSticker>
                            <GridText>{certificate.description}</GridText>
                        </GridItem>
                    ))}

                </GridContainer>

            </LeftWrapper>
        </SectionBase>
    );
}

export default CertificatesPage;
