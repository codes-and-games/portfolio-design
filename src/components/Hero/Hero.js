import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Divyesh's Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hello There! My name is Divyesh Idhate aka{" "}
          <a style={{color: "orange"}} href="https://github.com/codes-and-games">pirateSteel</a>!<br></br>{" "}
          I am just a guy who is filled with enthusiasm for this new era of
          technology and I practice <a style={{color: "orange"}}>programming</a> as a hobby.
        </SectionText>
        <Button onClick={() => window.location = "#contact"}>Get In Contact</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
