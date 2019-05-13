import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import blueArrow from '../images/blue-arrow.svg'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import { ContentSection, SecondaryHeader } from '../components/contentSection'
import Button from '../components/button'

import { device } from '../utils/device.js'

const Arrow = styled.img`
  width: 250px;
  margin: 50px auto;

  @media ${device.tablet} {
    width: 200px;
    margin: 30px auto 10px auto;
  }
`

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`

const CardLink = styled(Link)`
  width: 335px;
  min-height: 641px;
  margin: 0 20px;

  @media ${device.laptopL} {
    min-width: 300px;
    margin: 0 10px;
  }

  @media ${device.laptop} {
    min-width: 250px;
    margin: 0 2.5px;
  }

  @media ${device.tablet} {
    max-width: 335px;
    margin: 20px 0;
  }

  @media ${device.mobileM} {
    max-width: 310px;
  }
`

const Card = styled.div`
  height: 100%;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;

  p {
    text-align: center;
  }
`

const CardContent = styled.div`
  height: 416px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`

const CardImg = styled(Img)`
  height: 225px;

  @media ${device.laptop} {
    height: 160px;
  }

  @media ${device.tablet} {
    height: 225px;
  }

  @media ${device.mobileM} {
    height: 200px;
  }
`

const CardHeader = styled(SecondaryHeader)`
  font-size: 1.7rem;
  text-align: center;
  margin-top: 10px;

  @media ${device.laptop} {
    font-size: 1.5rem;
  }

  @media ${device.tablet} {
    font-size: 1.7rem;
  }
`

const CardButton = styled(Button)`
  margin: 60px 0 0 0;
  width: 100%;
`

class ThankYouPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { location, data } = this.props
    return (
      <Layout location={location.pathname}>
        <SEO title="Thanks!" />
        <Banner
          img={data.bannerImg.childImageSharp.fluid}
          backgroundColor="#716559"
          header="Thank You!"
          text="We are checking our diary, we will be in touch very soon."
        />
        <ContentSection>
          <Arrow src={blueArrow} alt="scroll down" />
          <CardContainer>
            <CardLink to="/projects">
              <Card>
                <CardImg fluid={data.project.childImageSharp.fluid} />
                <CardContent>
                  <div>
                    <CardHeader>Projects</CardHeader>
                    <p>
                      If we get the opportunity to take pictures of a completed
                      job we are always more than happy to display them here on
                      our website to serve as great examples of our work.
                    </p>
                  </div>
                  <CardButton>Projects</CardButton>
                </CardContent>
              </Card>
            </CardLink>
            <CardLink to="/contact-us">
              <Card>
                <CardImg fluid={data.contact.childImageSharp.fluid} />
                <CardContent>
                  <div>
                    <CardHeader>Contact Us</CardHeader>
                    <p>
                      If you have any questions don't hesitate to get in touch.
                    </p>
                    <p>
                      289 National Avenue, <br />
                      Hull, HU5 4JB
                    </p>
                    <p>
                      <strong>T: </strong>01482 475 370 <br />
                      <strong>E: </strong>info@mulberrykitchens.co.uk
                    </p>
                  </div>
                  <CardButton>Contact Us</CardButton>
                </CardContent>
              </Card>
            </CardLink>
            <CardLink to="/testimonials">
              <Card>
                <CardImg fluid={data.testimonial.childImageSharp.fluid} />
                <CardContent>
                  <div>
                    <CardHeader>Testimonials</CardHeader>
                    <p>
                      There is nothing better than receiving a kind word from a
                      customer upon a jobs completion. This is a selection of
                      the testimonials we have collected over the years.
                    </p>
                  </div>
                  <CardButton>Testimonials</CardButton>
                </CardContent>
              </Card>
            </CardLink>
          </CardContainer>
        </ContentSection>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    bannerImg: file(relativePath: { eq: "design.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    project: file(relativePath: { eq: "snow-projects.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    contact: file(relativePath: { eq: "map.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    testimonial: file(relativePath: { eq: "broughton-testimonial.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default ThankYouPage
