import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from './gatsbyImageWithIEPolyfill'
import { ContentSection, ContentContainer } from './contentSection'
import BottomBar from './bottomBar'
import styled from 'styled-components'
import AppointmentForm from './appointmentForm'
import { device } from '../utils/device'

const Footer = styled.section`
  position: relative;
  width: 100%;
  img {
    opacity: 0.05 !important;
  }

  p {
    color: #fff;
  }
`

const FooterContentContainer = styled(ContentContainer)`
  @media ${device.laptop} {
    width: auto;
  }

  @media ${device.tablet} {
    width: 100%;
    max-width: 100%;
  }
`

const BackgroundImg = styled(Img)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute !important;
  background-color: #000928;
`

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`

const ContactDetails = styled.div`
  width: 370px;
  padding-top: 24px;
  h3 {
    font-weight: 600;
    padding-bottom: 20px;
  }
  .bold {
    font-weight: 600;
  }
  .orange-header {
    font-size: 1.2rem;
    color: #8f5200;
    margin-bottom: 0 !important;
  }
  .contact-text {
    margin: 20px 0;
    p {
      margin: 0;
    }
  }
  .opening-times p {
    margin-bottom: 10px;
  }
  .dont-hesitate {
    margin-top: 50px;
  }

  @media ${device.laptop} {
    width: 275px;
  }

  @media ${device.tablet} {
    width: 300px;
    margin: 0 auto;
  }

  @media ${device.mobileM} {
    width: 256px;
  }
`

export default props => (
  <>
    <Footer>
      <Wrapper>
        <StaticQuery
          query={graphql`
            query {
              background: file(relativePath: { eq: "uform/shaker.jpg" }) {
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
          <FooterContentContainer darkBg>
            <ContactDetails>
              <h3>GET IN TOUCH</h3>
              <div className="contact-text">
                <p className="orange-header bold">Showroom</p>
                <p>289 National Avenue,</p>
                <p>Hull,</p>
                <p>HU5 4JB</p>
              </div>
              <div className="contact-text">
                <p>
                  <span className="bold">T:</span> 01482 475 370
                </p>
                <p>
                  <span className="bold">E:</span> info@mulberrykitchens.co.uk
                </p>
              </div>
              <div className="contact-text opening-times">
                <p className="orange-header bold">Opening Times</p>
                <p>Mon to Fri: 9:00am - 4:30pm</p>
                <p>Saturday: 10:00am - 1:00pm</p>
                <p>Sunday: Closed</p>
                <p>Closed on all UK bank holidays.</p>
              </div>
              <div className="dont-hesitate">
                <p>
                  Don't hesitate to contact us at any point from planning to
                  installation we are always available to offer help and advice.
                </p>
              </div>
            </ContactDetails>
          </FooterContentContainer>

          <FooterContentContainer darkBg width="300px">
            <AppointmentForm footer />
          </FooterContentContainer>
        </ContentSection>
      </Wrapper>
    </Footer>
    <BottomBar />
  </>
)
