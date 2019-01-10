import 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// FADE!?

// Ideally, ContentSections children will be two side by side ContentContainers - can contain whatever
export const ContentSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 65%;
  padding-bottom: 50px;
`

export const ContentContainer = styled.div`
  max-width: 50%;

  h3 {
    font-weight: 400;

    line-height: 30px;
  }

  ${props => `
    width: ${props.width};
    color: ${props.darkBg ? '#fff' : 'inherit'}
  `};
`

ContentContainer.propTypes = {
  width: PropTypes.string, // Percentage
  darkBg: PropTypes.bool,
}