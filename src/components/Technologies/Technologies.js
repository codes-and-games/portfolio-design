import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the IT world. I use <a style={{color: "orange"}} href='https://atom.io/'>Atom</a> and <a style={{color: "orange"}} href='https://code.visualstudio.com/'>VS Code</a> as code editors. Here is a log:-
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js<br></br>
            HTML<br></br>
            CSS<br></br>
            SASS<br></br>
            JavaScript<br></br>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Python<br></br>
            C Language<br></br>
            JavaScript<br></br>
            SQLite<br></br>
            Oracle Database<br></br>
            Node<br></br>
            Express<br></br>
            MongoDB<br></br>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Learning Currently</ListTitle>
          <ListParagraph>
            Ethical Hacking<br></br>
            C++<br></br>
            MERN Stack<br></br>
            AI and ML in Python<br></br>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
