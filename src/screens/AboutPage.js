import React from 'react';
import styled from 'styled-components';
import colors from "../components/colors";


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

const AboutTitle = styled.div`
font-size: 12rem;
padding-top: 40vh;
padding-bottom: 5vh;
font-weight: 600;
color : ${colors.gray2};
@media screen and (max-width:768px){
padding-top: 20vh;
}
`;

const Text = styled.div`
font-size: 1.5rem;
line-height: 2rem;
max-width: 40vw;
color : ${colors.gray2};
@media screen and (max-width:768px){
max-width: 50vw;
    }
@media screen and (max-width:480px){
max-width: 70vw;
    }    
`;


function AboutPage() {

    return (

        <SectionBase>
            <LeftWrapper>
                <AboutTitle>HELLO,</AboutTitle>
                <Text>韓国でデザイン、ブランディングをしていました。
                    今はWeb Engineerに転向し、Front-end開発及びサーバーサイド開発をしています。</Text>
            </LeftWrapper>
        </SectionBase>
    );
}

export default AboutPage;
