import React from "react";
import Styled from '@emotion/styled';
import { Link } from "react-router-dom";
import { ProjectWrapper, HeaderWrapper, Description } from "./ProjectsStyledComponents";
import { MainContent } from "./HomeStyledComponents";
import { Header } from "./ResumeStyledComponents";

const projectData =  {
    games: [
        {header: 'Farming Game', description: 'A game where players can grow crops, inspired by Stardew Valley. In development' +
         'and is built in Python and Pygame library.'}
    ]       
};
export const projectBuilder = (project) => {
    project.map(entry =>
        <ProjectEntry header={entry.header} description={entry.description}/>
    )
}

export const ProjectEntry = ({header = '', description = ''}) => {
    <HeaderWrapper>
        <Header>{header}</Header>
        <Description>{description}</Description>
    </HeaderWrapper>
}

export const Projects = () => (
    <ProjectWrapper>
        <MainContent>
            <SectionTitle>Projects</SectionTitle>
            {projectBuilder(projectData.games)}
        </MainContent>
    </ProjectWrapper>
)