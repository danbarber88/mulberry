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
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const SupplierLogo = styled.div`
  width: 175px;
  height: auto;

  img {
    margin: 0;
  }
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
          <SupplierLogo style={{ width: '175px' }}>
            <Img fluid={props.neffLogo} />
          </SupplierLogo>
          <SupplierLogo style={{ width: '140px' }}>
            <Img fluid={props.cosentinoLogo} />
          </SupplierLogo>
          <SupplierLogo style={{ width: '220px' }}>
            <Img fluid={props.hafeleLogo} />
          </SupplierLogo>
        </LogoContainer>
      </ContentContainer>

      <ContentContainer>
        <SecondaryHeader>The budget question</SecondaryHeader>
        <p>
          Our showroom is of a fairly large size on National Avenue and we have
          made the utmost effort to ensure that any visiting customer will be
          able to see something they like. We can answer any queries you may
          have and get the ball rolling on your new kitchen.
        </p>
        <p>
          We offer a free design service, meaning that no costs will be incurred
          if for any reason your design does not meet your expectations.
        </p>
        <p>
          Our showroom is of a fairly large size on National Avenue and we have
          made the utmost effort to ensure that any visiting customer will be
          able to see something they like. We can answer any queries you may
          have and get the ball rolling on your new kitchen.
        </p>
        <p>
          We offer a free design service, meaning that no costs will be incurred
          if for any reason your design does not meet your expectations.
        </p>
      </ContentContainer>
    </ContentSection>
  </MainContainer>
)

export default Budget
