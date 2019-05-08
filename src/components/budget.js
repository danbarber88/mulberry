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

import SupplierLogo from './supplierLogo'

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
  width: 15px;
  min-width: 15px;
  min-height: 24px;
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
          <SupplierLogo
            width="175px"
            img={props.neffLogo}
            url="http://www.neff.co.uk/"
          />
          <SupplierLogo
            width="140px"
            img={props.cosentinoLogo}
            url="http://microsite.cosentino.com/sites/irbiVm"
          />
          <SupplierLogo
            width="220px"
            img={props.hafeleLogo}
            url="http://www.ideasforliving.co.uk/"
          />
        </LogoContainer>
      </ContentContainer>

      <ContentContainer>
        <SecondaryHeader>The budget question</SecondaryHeader>
        <p>
          During your first consultation, our designers will ask about your
          budget. This is specifically the total cost you will be comfortable
          investing into your new kitchen.
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
            The product knowledge of our experienced designers allows them to
            specify what is best for you. Knowing your budget allows us to
            choose the best components without compromising other areas of the
            design.
          </p>
        </BulletPoint>
        <BulletPoint>
          <GoldenCaret src={goldenCaret} alt="Budget bullet point" />
          <p>
            We are genuinely attempting to make our creative collaboration with
            you as helpful and efficient as possible, without disappointment by
            over specifying or under specifying and reducing the ‘wow’ effect we
            are all trying to achieve.
          </p>
        </BulletPoint>
      </ContentContainer>
    </ContentSection>
  </MainContainer>
)

export default Budget
