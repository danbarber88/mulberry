import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { device } from '../utils/device'

import Nav from './nav'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  * {
    letter-spacing: 1px;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  }

  a:hover {
    text-decoration: none !important;
  }

  p {
    letter-spacing: 0.5px;
    color: #292929;
  }

  .no-scroll {
    overflow: hidden;
  }

  .ril-caption-content {
    margin: 0 auto;
  }

  .ril__navButtons {
    outline: none
  }

  // used when disabling lightbox buttons
  .disabled, .disabled:hover {
    opacity: 0.1 !important;
    background-color: rgba(0, 0, 0, 1);
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 87px;
  width: 100%;

  @media ${device.mobileL} {
    margin-top: 79.5px;
  }
`
const Layout = ({ location, children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <GlobalStyle />
    <Nav location={location} />
    <MainContainer>{children}</MainContainer>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
