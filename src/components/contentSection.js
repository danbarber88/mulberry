import 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { device } from '../utils/device'

// FADE!?
export const MainHeader = styled.h1`
  font-size: 2rem;
  border: none;
  color: #000928;
  font-weight: 400;
  margin-top: 60px;
  margin-bottom: 1.21875rem;
`

export const SecondaryHeader = styled.h2`
  font-size: 2rem;
  border: none;
  color: #000928;
  font-weight: 400;
  margin-top: 60px;
  margin-bottom: 1.21875rem;
`

// Ideally, ContentSections children will be two side by side ContentContainers - can contain whatever
export const ContentSection = styled.section`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: space-between;
  flex-wrap: wrap;
  width: 70%;
  padding-bottom: 50px;

  @media ${device.laptopL} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 70%;
  }

  @media ${device.laptop} {
    width: 80%;
  }
`

export const ContentContainer = styled.div`
  max-width: 45%;

  width: ${props => props.width};
  color: ${props => (props.darkBg ? '#fff' : 'inherit')};

  @media ${device.laptop} {
    max-width: 80%;
  }

  @media ${device.tablet} {
    width: 100%;
    max-width: 100%;
  }
`

ContentSection.propTypes = {
  column: PropTypes.bool,
  wrap: PropTypes.bool,
}

ContentContainer.propTypes = {
  width: PropTypes.string, // Percentage
  darkBg: PropTypes.bool,
  marginTop: PropTypes.bool,
  marginBottom: PropTypes.bool,
}
