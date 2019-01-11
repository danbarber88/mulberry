import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

import Nav from './nav'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  * {
    letter-spacing: 1px;
  }

  p {
    letter-spacing: 0.5px;
    color: #292929;
  }

  // moved these to cotent section, only other place might need them is footer. probs can delete
  // h1, h2{
  //   font-size: 2rem;
  //   border: none;
  //   color: #000928;
  //   font-weight: 400;
  //   margin-top: 60px;
  //   margin-bottom: 1.21875rem;
  // }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  width: 100%;
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
