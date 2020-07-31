import React from 'react';
import styled from 'styled-components';
import colors from "../components/colors";
import Project from "../components/project/project";
import {
    todoList as todo,
    jobScraper as job,
    rabbitSitterHana as hana,
    restoranteAmelie as amelie
} from "../components/project/projectSource";


const SectionBase = styled.section`
max-width: 100vm;
height: auto;
padding: 0 10%;
box-sizing: border-box;

@media screen and (max-width:768px){
padding: 0;

}
`;
const LeftWrapper = styled.div`
margin-left: 2rem;
height: 100vh;
 @media screen and (max-width:768px){
margin-left: 0;
    }`;
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


function ProjectsPage() {
    return (

        <SectionBase>
            <LeftWrapper>
                <Title>Projects</Title>

                <Project title={todo.title}
                         type={todo.type}
                         image={todo.image}
                         view={todo.view}
                         code={todo.code}
                         icons={todo.icons}
                         text={todo.text}
                         use={todo.use}
                         gist={todo.gist}
                />


                <Project title={job.title}
                         type={job.type}
                         image={job.image}
                         view={job.view}
                         code={job.code}
                         icons={job.icons}
                         text={job.text}
                         use={job.use}
                         gist={job.gist}/>

                <Project title={hana.title}
                         type={hana.type}
                         image={hana.image}
                         view={hana.view}
                         code={hana.code}
                         icons={hana.icons}
                         text={hana.text}
                         use={hana.use}
                         gist={hana.gist}/>

                <Project title={amelie.title}
                         type={amelie.type}
                         image={amelie.image}
                         view={amelie.view}
                         code={amelie.code}
                         icons={amelie.icons}
                         text={amelie.text}
                         use={amelie.use}
                         gist={amelie.gist}/>

            </LeftWrapper>
        </SectionBase>
    );
}

export default ProjectsPage;
