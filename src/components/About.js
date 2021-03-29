import {
  AboutWrapper,
  SectionHeading,
  BlueText,
  AboutImageWrapper,
  AboutImage,
  AboutParagraphWrapper,
  AboutParagraphText,
  SvgWrapper,
  Svg
} from './About.elements'
import { Element } from 'react-scroll'

const elementStyle = {
  height: '100%',
  width: '100%',
}

const About = () => {
  return (
    <>
      <AboutWrapper>
        <Element id='about' style={elementStyle}>
          <SectionHeading>
            <BlueText>Who&nbsp;</BlueText>I am
          </SectionHeading>
          <AboutParagraphWrapper>
            <AboutImageWrapper>
              <AboutImage src={require('../images/coding.svg').default}/>
            </AboutImageWrapper>
            <AboutParagraphText>
              Hello and welcome to my site! My name is Mitchell Mujwit and I am a 
              full stack developer, primarily working with React and Node.js. 
              When I was enrolled at a local college focusing on economics, 
              I was intrigued by an open seat in an intro to coding class. 
              I decided to enroll and was hooked! Since that day I've been engrossed 
              in software development and learning about emerging technologies. 
              I have prepared this introductory portfolio and project summary for 
              review and would enjoy discussing anything that might interest you. 
              I encourage your questions and comments and would welcome an opportunity 
              to connect. 
            </AboutParagraphText>
          </AboutParagraphWrapper>
          <SectionHeading>
              <BlueText>Technologies&nbsp;</BlueText>that I use
            </SectionHeading>
          <SvgWrapper>
            <Svg src={require('../images/html.svg').default}/>
            <Svg src={require('../images/css.svg').default}/>
            <Svg src={require('../images/js.svg').default}/>
            <Svg src={require('../images/react.svg').default}/>
            <Svg src={require('../images/node.svg').default}/>
          </SvgWrapper>
          <SectionHeading>
              <BlueText>Tools&nbsp;</BlueText>that I use
          </SectionHeading>
          <SvgWrapper>
            <Svg src={require('../images/vs.svg').default}/>
            <Svg src={require('../images/bootstrap.svg').default}/>
            <Svg src={require('../images/git.svg').default}/>
            <Svg src={require('../images/netlify.svg').default}/>
          </SvgWrapper>
        </Element>
      </AboutWrapper>
    </>
  )
}

export default About
