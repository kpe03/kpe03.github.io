import React from 'react';

import { HomeWrapper, MainContent, Greeting, SocialLinks, Avatar } from './HomeStyledComponents'

export const Home = () => (
    <HomeWrapper>
        <MainContent>
            <Greeting>Bonjour</Greeting>
            <SocialLinks url="https://github.com/kpe03"></SocialLinks>
            <SocialLinks url="https://www.linkedin.com/in/kaitlyn-peters-1473081a3/"></SocialLinks>
        </MainContent>
    </HomeWrapper>
);
