import React from 'react'
import { ContentSection } from './contentSection'
import styled from 'styled-components'
import { device } from '../utils/device'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook)

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #000117;
`

const Container = styled(ContentSection)`
  display: flex;
  align-items: center;
  padding: 0;
  color: #fff;
  font-size: 0.9em;

  @media ${device.tablet} {
    flex-direction: column-reverse;
    padding: 15px 0;
  }
`

const Copyright = styled.div`
  span {
    padding-right: 5px;
  }

  @media ${device.tablet} {
    .seperator {
      display: none;
    }
    span {
      display: block;
      text-align: center;
      padding: 0;
    }
  }
`

const FacebookIcon = styled(FontAwesomeIcon)`
  margin: 10px 0;
  color: #fff;
  font-size: 4em;
`

const BottomBar = props => (
  <Wrapper>
    <Container>
      <Copyright>
        <span>© {new Date().getFullYear()} Mulberry Fitted Kitchens Ltd</span>
        <span className="seperator">|</span>
        <span>Company reg. no: 4172958, England</span>
      </Copyright>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/MulberryKitchensHull"
      >
        <FacebookIcon icon={['fab', 'facebook']} />
      </a>
    </Container>
  </Wrapper>
)

export default BottomBar