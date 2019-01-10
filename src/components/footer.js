import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { ContentSection, ContentContainer } from './contentSection'
import styled from 'styled-components'
import AppointmentForm from './appointmentForm'

const Footer = styled.section`
  position: relative;
  width: 100%;
  img {
    opacity: 0.03 !important;
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

const SectionOverlay = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`

const ContactDetails = styled.div`
  padding-top: 24px;
  h3 {
    font-weight: 600;
    padding-bottom: 20px;
  }
  .bold {
    font-weight: 600;
  }
  .contact-text {
    margin: 20px 0;
    p {
      margin: 0;
    }
  }
  .opening-times p {
    margin: 10px 0;
  }
  .dont-hesitate {
    margin-top: 50px;
  }
`

const BottomBar = styled.div`
  background-color: #000317;
  height: 80px;
  width: 100%;
`

export default props => (
  <React.Fragment>
    <Footer>
      <SectionOverlay>
        <StaticQuery
          query={graphql`
            query {
              background: file(relativePath: { eq: "uform/shaker.jpg" }) {
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
        <ContentSection>
          <ContentContainer darkBg width="370px">
            <ContactDetails>
              <h3>GET IN TOUCH</h3>
              <div className="contact-text bold">
                <p>289 National Avenue,</p>
                <p>Hull, HU5 4JB</p>
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
                <p className="bold">Opening Times</p>
                <p>Mon to Fri: 9:00am - 4:30pm</p>
                <p>Saturday: 10:00am - 1:00pm</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="dont-hesitate">
                <p>
                  Don't hesitate to contact us at any point from planning to
                  installation we are always available to offer help and advice.
                </p>
              </div>
            </ContactDetails>
          </ContentContainer>
          <ContentContainer darkBg width="300px">
            <AppointmentForm />
          </ContentContainer>
        </ContentSection>
      </SectionOverlay>
    </Footer>
    <BottomBar />
  </React.Fragment>
)