import React from 'react'
import Img from './gatsbyImageWithIEPolyfill'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import {
  ContentSection,
  ContentContainer,
  SecondaryHeader,
} from '../components/contentSection'
import { device } from '../utils/device'
import goldenCaret from '../images/golden-caret-right.svg'

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

const LogoContainer = styled.div`
  height: 100%;
  min-height: 450px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media ${device.laptop} {
    display: none;
  }
`

const SupplierLogo = styled.div`
  width: ${props => props.width};
  height: auto;

  img {
    margin: 0;
  }
`

const BulletPoint = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 0.8rem;

  p {
    margin-left: 15px;
    margin-bottom: 0;
  }
`

const GoldenCaret = styled.img`
  min-width: 15px;
  margin: 0;
`

const Budget = props => (
  <MainContainer>
    <StaticQuery
      query={graphql`
        query {
          background: file(relativePath: { eq: "uform/true-handleless.jpg" }) {
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

    <ContentSection>
      <ContentContainer>
        <LogoContainer>
          <SupplierLogo width="175px">
            <Img fluid={props.neffLogo} />
          </SupplierLogo>
          <SupplierLogo width="140px">
            <Img fluid={props.cosentinoLogo} />
          </SupplierLogo>
          <SupplierLogo width="220px">
            <Img fluid={props.hafeleLogo} />
          </SupplierLogo>
        </LogoContainer>
      </ContentContainer>

      <ContentContainer>
        <SecondaryHeader>The budget question</SecondaryHeader>
        <p>
          During your first visit to our showroom our designers may inquire
          about your budget, if you do not feel comfortable sharing that
          information then please don’t hesitate to let the designer know that
          is the case.
        </p>
        <p>We ask because:</p>
        <BulletPoint>
          <GoldenCaret src={goldenCaret} alt="Budget bullet point" />
          <p>
            We can raise or lower your expectations during your first
            consultation, our priority is transparency, we have your best
            interests in mind.
          </p>
        </BulletPoint>
        <BulletPoint>
          <GoldenCaret src={goldenCaret} alt="Budget bullet point" />
          <p>
            We can maximise the potential of your design cutting out all guess
            work.
          </p>
        </BulletPoint>
        <BulletPoint>
          <GoldenCaret src={goldenCaret} alt="Budget bullet point" />
          <p>We can specify the best appliances for your needs and budget.</p>
        </BulletPoint>
      </ContentContainer>
    </ContentSection>
  </MainContainer>
)

export default Budget
