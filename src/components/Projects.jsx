import React from "react";
import { ProjectWrapper, HeaderWrapper, MainContent, Header, ProjectEntryWrapper, SectionTitle, Description } from "./ProjectsStyledComponents";
import {NavBar} from './NavBar';

const projectData =  {
    games: [
        {header: 'Farming Game', description: 'A game where players can grow crops, inspired by Stardew Valley. In development' +
         'and is built in Python and Pygame library.'},
    ]       
};
export const projectBuilder = (project) => {
    project.map(entry =>
        <ProjectEntry header={entry.header} description={entry.description}/>
    )
}

export const ProjectEntry = ({header = '', description = ''}) => {
    <ProjectEntryWrapper>
        <HeaderWrapper>
            <Header>{header}</Header>
        </HeaderWrapper>
        <Description>{description}</Description>
    </ProjectEntryWrapper>
}

export const Projects = () => (
    <ProjectWrapper>
        <NavBar />
        <MainContent>
            <SectionTitle>Projects</SectionTitle>
            {projectBuilder(projectData.games)}
        </MainContent>
    </ProjectWrapper>
);