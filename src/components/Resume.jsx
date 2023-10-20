import React from 'react';
import { ResumeWrapper, MainContent, SectionTitle } from './ResumeStyledComponents';
import { NavBar } from './NavBar';

export const Resume = () => (
    <ResumeWrapper>
        <NavBar />
        <MainContent>
            <SectionTitle>Education</SectionTitle>
            <SectionTitle>Work</SectionTitle>
        </MainContent>
    </ResumeWrapper>
)