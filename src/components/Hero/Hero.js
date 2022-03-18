import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Started with passion. Professional MERN stack and full stack developer.
          <br/>
          The evolution of web application is fascinating and growing every now and then.
          It is very crucial for us to stay upto date with the Technologies.
          Thus, It is becoming more dynamic with time passing by.
          Get in touch with me!
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;