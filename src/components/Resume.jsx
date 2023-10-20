import React from 'react';

import { ResumeWrapper, MainContent, SectionTitle, ResumeEntryWrapper, HeaderWrapper, Header, Dates, SubHeader, Description } from './ResumeStyledComponents';
import { NavBar } from './NavBar';

const resumeData = {
    education: [
        { header: 'University of Oklahoma', subHeader: 'BS Computer Science', dates: 'Jan 2023 - May 2025',
            description: ''
        },
        {
            header: 'Oklahoma City Community College', subHeader: 'AS Computer Science', dates: 'Aug 2021 - Mar 2023',
            description: ''
        },
    ],
    work: [
        { header: '76 Software Engineering Group', subHeader: "Computer Scientist Intern", dates: 'May 2023 - Aug 2023', description: "Collaborated via pair programming for bug fixes on a KC-46 refueling simulator, using Unity and C#" +
        "\nImplemented bug fixes for a B2 simulation in FlightGear using XML and Nasal, and Jira for AGILE workflow" +
        "\nCommunicated through presentations over progress on projects to interns and supervisors" +
        "\nDocumented and tested projects through AGILE methodology" },
        { header: 'Showplace Market', subHeader: 'Cashier', dates: 'Aug 2021- Mar 2023', description: "Provided excellent customer service by welcoming customers, answering inquiries, and finding products for customers" + 
        "\nCommunicated with the store's vendors to collect rent, manage vendor paperwork, and request products for customers" +
        "\nEfficiently processed cash, credit, and debit transactions"
        },
    ]
};
const ResumeEntry = ({header = '', subHeader = '', dates = '', description = ''}) => (
    <ResumeEntryWrapper>
        <HeaderWrapper>
            <Header>{header}</Header>
           
            <Dates>{dates}</Dates>
        </HeaderWrapper>
        <SubHeader>{subHeader}</SubHeader>
        <Description>{description}</Description>
    </ResumeEntryWrapper>
);

export const resumeEntryBuilder = (entries) => (
    entries.map(entry =>
        <ResumeEntry header={entry.header} subhHeader={entry.subhHeader} dates={entry.dates} description={entry.description}/>
    )
)

export const Resume = () => (
    <ResumeWrapper>
        <NavBar />
        <MainContent>
            <SectionTitle>Education</SectionTitle>
            {resumeEntryBuilder(resumeData.education)}
            <SectionTitle>Work</SectionTitle>
            {resumeEntryBuilder(resumeData.work)}   
        </MainContent>
    </ResumeWrapper>
);