import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiFiverr } from 'react-icons/si'


import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id='contact'>
      <LinkList>
        <LinkColumn>
          <LinkTitle >Call</LinkTitle>
          <LinkItem style={{color: "orange"}}>+91 9359315488</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem style={{color: "orange"}} href="mailto:contact@jsmastery.com">
            piratesteel27@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/codes-and-games">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.fiverr.com/divyeshidhate">
            <SiFiverr size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/divyesh__idhate__/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
