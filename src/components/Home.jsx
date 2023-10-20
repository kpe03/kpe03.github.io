import React from 'react';
import { HomeWrapper, MainContent, Greeting, SocialLinks, Avatar } from './HomeStyledComponents'
import { NavBar } from './NavBar';

export const Home = () => (
    <HomeWrapper>
        <NavBar />
        <MainContent>
            <Greeting>Bonjour</Greeting>
            <SocialLinks url="https://github.com/kpe03"></SocialLinks>
            <SocialLinks url="https://www.linkedin.com/in/kaitlyn-peters-1473081a3/"></SocialLinks>
        </MainContent>
    </HomeWrapper>
);
