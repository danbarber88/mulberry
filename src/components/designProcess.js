import React from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { ContentSection, SecondaryHeader } from '../components/contentSection'
import { device } from '../utils/device'
import PropTypes from 'prop-types'

import sign from '../images/sign.svg'
import home from '../images/home.svg'
import presentation from '../images/presentation.svg'
import tape from '../images/tape.svg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`

const BackgroundImg = styled(Img)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute !important;
  background-color: #fff;
  opacity: 0.175;
`

const HeaderText = styled(SecondaryHeader)`
  margin: 100px 0 75px 0;
`

const StepContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${device.tablet} {
    justify-content: center;
  }
`

const Step = styled.div`
  display: flex;
  flex-basis: 45%;
  margin-bottom: 100px;

  @media ${device.laptop} {
    flex-basis: 80%;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex-basis: 100%;
  }
`

const Icon = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-right: 20px;

  @media ${device.tablet} {
    margin-right: 0;
    margin-bottom: 30px;
  }
`

const StepHeader = styled(SecondaryHeader)`
  font-size: 1.6em;
  margin-top: 0;
`

const DesignProcess = props => (
  <MainContainer>
    <StaticQuery
      query={graphql`
        query {
          background: file(relativePath: { eq: "uform/raised-panel.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => (
        <BackgroundImg fluid={data.background.childImageSharp.fluid} />
      )}
    />

    <ContentSection column>
      <HeaderText>Our design process...</HeaderText>
      <StepContainer>
        <Step>
          <Icon
            src={sign}
            width="120px"
            height="120px"
            style={{ margin: '0' }}
          />
          <div>
            <StepHeader>1. Visit the Showroom</StepHeader>
            <p>
              Bacon ipsum dolor amet flank pastrami ex ad culpa. Jerky ad mollit
              dolor beef ribs esse biltong minim sirloin elit leberkas short
              loin flank ex ut. Ribeye alcatra fatback, tail id sausage laboris
              pancetta shoulder ut rump turkey et. Est aute sausage nulla, sed
              elit officia ground round dolore tenderloin in chicken laboris.
            </p>
          </div>
        </Step>
        <Step>
          <Icon src={home} width="110px" height="110px" />
          <div>
            <StepHeader>2. Home Visit</StepHeader>
            <p>
              Bacon ipsum dolor amet flank pastrami ex ad culpa. Jerky ad mollit
              dolor beef ribs esse biltong minim sirloin elit leberkas short
              loin flank ex ut. Ribeye alcatra fatback, tail id sausage laboris
              pancetta shoulder ut rump turkey et. Est aute sausage nulla, sed
              elit officia ground round dolore tenderloin in chicken laboris.
            </p>
          </div>
        </Step>
        <Step>
          <Icon src={presentation} width="120px" height="110px" />
          <div>
            <StepHeader>3. Design Presentation</StepHeader>
            <p>
              Bacon ipsum dolor amet flank pastrami ex ad culpa. Jerky ad mollit
              dolor beef ribs esse biltong minim sirloin elit leberkas short
              loin flank ex ut. Ribeye alcatra fatback, tail id sausage laboris
              pancetta shoulder ut rump turkey et. Est aute sausage nulla, sed
              elit officia ground round dolore tenderloin in chicken laboris.
            </p>
          </div>
        </Step>
        <Step>
          <Icon src={tape} width="120px" height="80px" />
          <div>
            <StepHeader>4. Installation</StepHeader>
            <p>
              Bacon ipsum dolor amet flank pastrami ex ad culpa. Jerky ad mollit
              dolor beef ribs esse biltong minim sirloin elit leberkas short
              loin flank ex ut. Ribeye alcatra fatback, tail id sausage laboris
              pancetta shoulder ut rump turkey et. Est aute sausage nulla, sed
              elit officia ground round dolore tenderloin in chicken laboris.
            </p>
          </div>
        </Step>
      </StepContainer>
    </ContentSection>
  </MainContainer>
)

Step.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

export default DesignProcess
