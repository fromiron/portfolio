import React, {useState} from 'react';
import styled from 'styled-components';
import colors from "../colors";
import SkillIcon from "../skill/skillIcon";
import ProjectDetail from "./projectDetail";


const ImageWrapper = styled.div`
 width: 50%; 
  position: relative;
  display:flex;
  justify-content: center;
  @media screen and (max-width:768px){
box-sizing: border-box;
width: 100%;
padding: 0 4%;
    }
`;

const Image = styled.div`
width: 100%;
height: 400px;
background-image: url(${props => props.image});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 10px;
z-index: 1;
box-sizing: border-box;
margin-bottom: 30px;
transition: all 0.4s ease-in-out;
position: relative;
overflow: hidden;
border: 1px #e3e3e3 solid;
 &:last-child{ //imgをblurして自然な影を作る
 position: absolute;
 top: 10px;
  filter: blur(10px);
 opacity: 0.8;
 z-index: -1;
 width: 90%;
 }
`;

const ImgHoverMenu = styled.div`
width: inherit;
height: inherit;
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-around;
opacity: 0;
transition: all 0.2s ease-in-out;
letter-spacing: 7px;
font-weight: 600;

&:hover{//imageのカーバー hover
opacity: 1;
background-color: rgba(0,0,0,0.4);
}

& li{//btn
width: fit-content;
background-color: rgba(0,0,0,0.4);
font-size: 2rem;
padding:  20px;
margin: 5px 0 ;
cursor: pointer;
& a{//btn text
color: ${colors.white};
}
&:hover{//btn box
background-color: rgba(0,0,0,0.8);
& a{//btn text hover
color: ${colors.pink};
}
}
}
`;


const Text = styled.div`
margin-top: 2rem;
font-size: 1.5rem;
line-height: 2rem;
color : ${colors.gray2};   
max-width: 500px;
`;

const ProjectContainer = styled.div`
width:100%;
height: auto;
overflow: visible;
position: relative;
display: flex;
 @media screen and (max-width:768px){
display: block;
    }
`;


const RightWrapper = styled.div`
width: 50%;
height: auto;
box-sizing: border-box;
padding-left:3.5rem;
 @media screen and (max-width:768px){
width: 100%;
padding:0 2rem;
margin-top: 3rem;
    }
`;


const ProjectTitle = styled.div`
font-size: 4rem;
color : ${colors.gray2};
padding-bottom: 1rem;   
border-bottom: 4px ${colors.gray2} solid;
width: fit-content;
`;

const Sticker = styled.div`
margin-top: 1rem;
display: flex;
`;

const StickerName = styled.div`
width: fit-content;
line-height: 20px;
color: ${colors.white};
padding: 2px 10px;
border-radius: 6px 0 0 6px;
background-color: ${colors.purple};
`;

const StickerType = styled.div`
width: fit-content;
line-height: 20px;
color: ${colors.white};
padding: 2px 10px;
border-radius: 0 6px 6px 0;
background-color: ${colors.pink};
`;

const IconList = styled.div`
display: flex;
margin-top: 1rem;
margin-bottom: 1.5rem;
`;


const BtnWrapper = styled.div`
display: flex;
`;
const Btn = styled.a`
width: fit-content;
padding: 7px 18px;
border-radius: 7px;
font-size: 1.3rem;
background-color: ${colors.gray2};
margin-top: 1rem;
margin-right: 0.5rem;
color: ${colors.white};
text-align: center;
cursor: pointer;
`
const BtnButtonType = styled.button`
width: fit-content;
padding: 7px 18px;
border-radius: 7px;
font-size: 1.3rem;
background-color: ${colors.gray2};
margin-top: 1rem;
margin-right: 0.5rem;
color: ${colors.white};
text-align: center;
cursor: pointer;
`;

const UseList = styled.ul`
width: fit-content;
padding: 1rem;
border-left: 3px ${colors.gray2} solid;
& li {
margin-bottom: 1rem;
}
& li:last-child{
margin-bottom: 0;
}
`;


function Project(props) {
    const [visible, setCount] = useState(false); //project detailの表示用Hook

    return (
        <>
            <ProjectContainer>
                <ImageWrapper>
                    <Image image={props.image}>
                        <ImgHoverMenu>
                            <ul>
                                <li><a href={props.view} target={"_blank"} rel="noopener noreferrer">VIEW</a></li>
                                <li><a href={props.code} target={"_blank"} rel="noopener noreferrer">CODE</a></li>
                                <li><a onClick={() => setCount(!visible)}>DESCRIPTION</a></li>
                            </ul>
                        </ImgHoverMenu></Image>
                    <Image image={props.image}/>
                </ImageWrapper>

                <RightWrapper>
                    <ProjectTitle>{props.title}</ProjectTitle>
                    <Sticker><StickerName>{props.title}</StickerName><StickerType>{props.type}</StickerType></Sticker>
                    <Text>
                        {props.text}

                    </Text>


                    <IconList>
                        {props.icons.map((skill, index) => (//projectPageから受け取った2次元配列でIcon生成
                            <SkillIcon key={index} skill={skill[0]} color={skill[1]}/>
                        ))}
                    </IconList>

                    <div>
                        <UseList>
                            {props.use.map((useList, index) => (
                                <li key={index}>{useList}</li>
                            ))}
                        </UseList>
                    </div>

                    <BtnWrapper>
                        <Btn href={props.view} target={"_blank"} rel="noopener noreferrer">View</Btn>
                        <Btn href={props.code} target={"_blank"} rel="noopener noreferrer">Code</Btn>
                        <BtnButtonType onClick={() => setCount(!visible)}>Description</BtnButtonType>
                    </BtnWrapper>
                </RightWrapper>

            </ProjectContainer>
            <ProjectDetail visible={visible}/>
        </>
    )
}

export default Project;
