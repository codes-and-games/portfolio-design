import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiFiverr } from 'react-icons/si'
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="#">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }} >
          <DiCssdeck size="3rem" /> <span>pirateSteel</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      
      <li>
        <Link href="#services">
          <NavLink>Services</NavLink>
        </Link>
      </li>  
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
      <SocialIcons href="https://github.com/codes-and-games">
            <AiFillGithub size="3.5rem" />
          </SocialIcons>
          <SocialIcons href="https://www.fiverr.com/divyeshidhate">
            <SiFiverr size="3.5rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/divyesh__idhate__/">
            <AiFillInstagram size="3.5rem" />
          </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
