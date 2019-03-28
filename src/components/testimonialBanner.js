import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/device'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 70px 0;
`

const Text = styled.p`
  width: 70%;
  font-size: 26px;
  color: #000928;
  text-align: center;
  margin: 0;

  @media ${device.laptop} {
    font-size: 24px;
    width: 80%;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.mobileL} {
    font-size: 16px;
  }
`

const Name = styled.p`
  display: flex;
  align-self: flex-end;
  font-size: 30px;
  color: #8f5200;
  margin: 10px 15% 0 0;

  @media ${device.laptop} {
    font-size: 28px;
    margin-right: 10%;
  }

  @media ${device.tablet} {
    font-size: 24px;
  }

  @media ${device.mobileL} {
    font-size: 20px;
  }
`

const Testimonial = props => (
  <Wrapper>
    <Text>"{props.text}"</Text>
    <Name>- {props.name}</Name>
  </Wrapper>
)

export default Testimonial
