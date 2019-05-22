import React from 'react'
import Img from './gatsbyImageWithIEPolyfill'
import { StaticQuery, graphql } from 'gatsby'
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
  margin: 60px 0 75px 0;
`

const StepContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: -80px;

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
  min-width: ${props => props.width};
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
              fluid(quality: 80, maxWidth: 2000) {
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
            alt="Visit the Showroom"
            width="120px"
            height="120px"
            style={{ marginBottom: '0' }}
          />
          <div>
            <StepHeader>1. Visit the Showroom</StepHeader>
            <p>
              The initial process of having your dream kitchen realised is to
              pay a visit to our showroom, armed with your own ideas, plans, etc
              or in the hope of being inspired by our room settings. We pride
              ourselves on not being "pushy". We would really like you to enjoy
              the experience and we will always be available to answer your
              questions or to help in any way we can.
            </p>
          </div>
        </Step>
        <Step>
          <Icon src={home} alt="Home Visit" width="110px" height="110px" />
          <div>
            <StepHeader>2. Home Visit</StepHeader>
            <p>
              Some people bring in plans but the majority ask us to arrange a
              home consultation. While there, Geoff will take measurements while
              Colleen discusses your requirements in finer detail. During this
              meeting we also gain an insight into the pros and cons of your
              current kitchen layout. It is our intention to ensure your design
              is as efficient as it is stunning.
            </p>
          </div>
        </Step>
        <Step>
          <Icon
            src={presentation}
            alt="Design Presentation"
            width="120px"
            height="110px"
          />
          <div>
            <StepHeader>3. Design Presentation</StepHeader>
            <p>
              Customers are asked to make a mutually convenient appointment to
              revisit the showroom. On this occasion we now have the opportunity
              to present to you our designs alongside our state of the art
              rendered images and virtual reality views. It is now the time to
              amend, tweak or to change anything in order to achieve your
              vision. Nothing is too much trouble, weekend and evening
              appointments are available if necessary.
            </p>
          </div>
        </Step>
        <Step>
          <Icon src={tape} alt="Installation" width="120px" height="80px" />
          <div>
            <StepHeader>4. Installation</StepHeader>
            <p>
              The average installation will take about one week and will have
              several personnel attending. In addition to the joiner, there will
              be a plumber/gas fitter, electrician and possibly a
              builder/plasterer depending on the installation. Mulberry will
              undertake as many or as few works as the client dictates. These
              can include minor building works, removal of interior walls,
              lowering of ceilings and skimming walls etc. If you are having
              building works, granite, flooring or tiling the installation time
              will increase accordingly.
            </p>
          </div>
        </Step>
      </StepContainer>
    </ContentSection>
  </MainContainer>
)

Icon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

export default DesignProcess
