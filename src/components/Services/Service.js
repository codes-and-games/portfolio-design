import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle, SectionSubText } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './ServicesStyles';

const Services = () => (
    <Section id="services">
        <br />
        <SectionTitle>Services</SectionTitle>
        <SectionText>These are the services provide:- </SectionText>
        <SectionText>
            <SectionSubText>Web Development</SectionSubText>
            <br></br>
            <SectionText>Just write down your sketches and ideas and the rest of the magic will be done by me.<br></br>
                I will provide you with the following:<br></br>
                1) Full custom made website<br></br>
                2) Source Code of the site<br></br>
                3) Responsiveness<br></br>
                4) Additional Pages as per your requirement<br></br>
                If you have any questions regarding my services, please feel free to <a style={{color: "orange"}} href='https://www.fiverr.com/divyeshidhate/web-and-python-development'>contact me</a>.</SectionText>
        </SectionText>
        
        <SectionDivider />
        <br></br><br></br>
        <SectionText>
            <SectionSubText>Python Development</SectionSubText><br></br>
            <SectionText>Just write down your requirements in detail and the rest of the magic will be done by me.<br></br>
                I will provide you with the following:<br></br>
                1)   Full custom made software<br></br>
                2)   Source Code<br></br>
                3)   File type in .exe format<br></br>
                4)   Additional Content as per your requirement<br></br>
                If you have any questions regarding my services, please feel free to <a style={{color: "orange"}} href='https://www.fiverr.com/divyeshidhate/develop-software-for-you'>contact me</a>.</SectionText>
        </SectionText>
        
        <SectionDivider colorAlt />
    </Section>
);

export default Services;
