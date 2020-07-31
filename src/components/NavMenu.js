import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import colors from "../components/colors";
import Hamburger from "../components/hamburger";
import useWindowSize from "../components/windowSize";
import {Link} from 'react-router-dom';


const MenuBtn = styled.div`
position: fixed;
transition: all 0.5s ease-in-out;
right: 60px;
width: 60px;
height: 50px;
display: flex;
justify-content: center;
top:45%;
z-index: 999;
@media screen and (max-width:768px){
top:4rem;
right: 30px;
transform: scale(0.8);
}
@media screen and (max-width:480px){
transform: scale(0.5);
}
`;

const NavMenu = styled.div`
background-color: ${colors.purple};
position: fixed;
display: flex;
justify-content: center;
flex-direction: column;
right: -280px;
width: 280px;
height: 100%;
transition: all 0.4s ease-in-out;
z-index: 998;
&.disable{
transform: translateX(280px);
opacity: 0;
}
@media screen and (max-width:768px){
position: fixed;
top: 0;
left: 0;
right: 0;
width: 100%;
height: 400px;
&.disable{
transform: translateY(-400px);
}
}
`;


const MenuUl = styled.ul`
list-style: none;
padding: 50% 0;`;

const MenuLi = styled.li`
padding: 10px  10px 10px 100px;
margin-bottom: 10px;
font-size: 2rem;
cursor: pointer;
color: ${colors.gray2};
position: relative;
width: fit-content;
&:hover{
color: ${colors.white};
}
`;

const Contact = styled.div`
position: absolute;
bottom: 0;
text-align: center;
border-top: 1px ${colors.gray2} solid;
width: 80%;
padding: 20px 0;
margin-left: 10%;
`;


const Overlay = styled.div`
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.2);
      display: ${props => props.overlay === true ? "block" : "none"};
      opacity: ${props => props.overlay === true ? 1 : 0};
      z-index: 997;
      position: fixed;
      top: 0;
      left: 0;
`;


const useTitle = initTitle => {
    const [title, setTitle] = useState(initTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title")
        htmlTitle.innerText = title.toString();
    }
    useEffect(updateTitle, [title]);
    return setTitle;
};


function Nav() {
    const updateTitle = useTitle("Welcome");
    const [overlay, setOverlay] = useState(false);


    let widthSize = useWindowSize().width;

    function buttonPositionFix() {
        const menu = document.querySelector(".menu");
        const menuBtn = document.querySelector(".menuBtn");
        //width 769px以上　メニュー、メニューボタン位置Fix
        if (widthSize > 768 && menu.offsetWidth === 280) {
            menuBtn.style.right = "210px";
            menu.style.right = "0";
            try {
                const disable = document.querySelector('.disable');
                if (disable !== null) {
                    menuBtn.style.right = "60px";
                }
            } catch (e) {
            }
        }
        //width 768px以下　メニュー、Fix
        if (widthSize <= 768) {
            menuBtn.style.right = "30px";
        }
    }

    function clearMenu() {
        window.addEventListener('resize', function clear(e) {
                buttonPositionFix()
            }
        )
    }

    const HandleMenu = () => {
        const menu = document.querySelector(".menu");
        menu.classList.toggle("disable");
        setOverlay(!overlay);
        buttonPositionFix();
    }
    clearMenu();

    return (

        <>
            <MenuBtn className="menuBtn" onClick={HandleMenu} overlay={overlay}><Hamburger/></MenuBtn>
            <NavMenu className="menu disable">
                <MenuUl>
                    <Link to="/" onClick={() => updateTitle("About")}><MenuLi>About me</MenuLi></Link>
                    <Link to="/certificates"
                          onClick={() => updateTitle("certificates")}><MenuLi>Certificates</MenuLi></Link>
                    <Link to="/skills" onClick={() => updateTitle("skills")}> <MenuLi>Skills</MenuLi></Link>
                    <Link to="/projects" onClick={() => updateTitle("projects")}><MenuLi>Projects</MenuLi></Link>
                </MenuUl>
                <Contact>
                    Mail / Tel
                </Contact>
            </NavMenu>
            <Overlay onClick={HandleMenu} overlay={overlay}/>
        </>
    );
}

export default Nav;
