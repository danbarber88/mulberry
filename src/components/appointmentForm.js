import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './button'
import { device } from '../utils/device'
import { navigateTo } from 'gatsby-link'
import { Link } from 'gatsby'

const AppointmentFormContainer = styled.div`
  width: 300px;
  text-align: center;
  padding-top: 24px;

  input {
    width: 100%;
    padding: 10px 0 10px 20px;
    margin: 7.5px 0;
  }

  ${Button} {
    display: block;
    width: 100%;
    margin: 10px 0;
  }

  h3 {
    font-weight: 600;
  }

  p {
    font-weight: 200;
  }

  .form-text {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p {
      font-size: 12px;
      span {
        font-weight: 700;
      }
    }
    .privacy {
      text-decoration: underline;
    }
  }

  @media ${device.laptop} {
    width: 275px;
  }

  @media ${device.tablet} {
    width: 300px;
    margin: 0 auto;
  }

  @media ${device.mobileM} {
    width: 256px;
  }
`

const PrivacyLink = styled(Link)`
  font-size: 12px;
  margin: 0;
  color: #fff;
  text-decoration: underline;
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class AppointmentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <AppointmentFormContainer>
        <h3>
          REQUEST AN
          <br />
          APPOINTMENT
        </h3>
        <p>
          Enter your details to arrange a consultation at our showroom. We will
          get back to you as soon as possible.
        </p>

        <form
          name="appointment"
          method="post"
          action="/thank-you"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            onChange={this.handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telephone"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="budget"
            placeholder="Budget"
            onChange={this.handleChange}
          />

          <div className="form-text">
            <p>Required *</p>
            <PrivacyLink to="/privacy-policy">Privacy Policy</PrivacyLink>
          </div>
          <Button primary type="submit">
            Request Appointment
          </Button>
        </form>
      </AppointmentFormContainer>
    )
  }
}

export default AppointmentForm
