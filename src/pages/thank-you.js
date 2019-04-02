import React, { Component } from 'react'
import { Link } from 'gatsby'
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
  min-width: 335px;
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
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;

  p {
    text-align: center;
  }
`

const CardContent = styled.div`
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
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { location, data } = this.props
    return (
      <Layout location={location.pathname}>
        <SEO title="Thanks!" keywords={[`gatsby`, `application`, `react`]} />
        <Banner
          img={data.bannerImg.childImageSharp.fluid}
          backgroundColor="#716559"
          header="Thank You!"
          text="We are checking our diary, we will be in touch very soon."
        />
        <ContentSection>
          <Arrow src={blueArrow} />
          <CardContainer>
            <CardLink to="/projects">
              <Card>
                <CardImg fluid={data.project.childImageSharp.fluid} />
                <CardContent>
                  <CardHeader>Projects</CardHeader>
                  <p>
                    Selling point about big brands not being able to provide the
                    same level as we can - pastrami ex ad culpa. Jerky ad mollit
                    dolor beef ribs esse biltong minim sirloin elit leberkas
                    short loin flank ex ut. Ribeye alcatra fatback, tail id
                    sausage laboris pancetta shoulder ut rump turkey et.
                  </p>
                  <CardButton>Projects</CardButton>
                </CardContent>
              </Card>
            </CardLink>
            <CardLink to="/contact-us">
              <Card>
                <CardImg fluid={data.contact.childImageSharp.fluid} />
                <CardContent>
                  <CardHeader>Contact Us</CardHeader>
                  <p>
                    Selling point about big brands not being able to provide the
                    same level as we can - pastrami ex ad culpa. Jerky ad mollit
                    dolor beef ribs esse biltong minim sirloin elit leberkas
                    short loin flank ex ut. Ribeye alcatra fatback, tail id
                    sausage laboris pancetta shoulder ut rump turkey et.
                  </p>
                  <CardButton>Contact Us</CardButton>
                </CardContent>
              </Card>
            </CardLink>
            <CardLink to="/testimonials">
              <Card>
                <CardImg fluid={data.testimonial.childImageSharp.fluid} />
                <CardContent>
                  <CardHeader>Testimonials</CardHeader>
                  <p>
                    Selling point about big brands not being able to provide the
                    same level as we can - pastrami ex ad culpa. Jerky ad mollit
                    dolor beef ribs esse biltong minim sirloin elit leberkas
                    short loin flank ex ut. Ribeye alcatra fatback, tail id
                    sausage laboris pancetta shoulder ut rump turkey et.
                  </p>
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
