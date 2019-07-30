import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './button'
import { device } from '../utils/device'
import { navigateTo } from 'gatsby-link'

const AppointmentFormContainer = styled.div`
  width: 300px;
  text-align: center;
  padding-top: 24px;

  .form-group {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;

    label {
      transition: all 0.3s ease;
      color: ${props => (props.footer ? '#fff' : '#000928')};
      font-weight: ${props => (props.footer ? '400' : '600')};
      font-size: 1.1rem;
    }

    input {
      transition: all 0.3s ease;
      width: 100%;
      padding: 10px 0 10px 20px;
      margin: 0 0 7.5px 0;
      outline: none;
      border: ${props =>
        props.footer ? '1px solid #fff ' : '1px solid #000928'};

      &:focus {
        border-color: #bf6e00;

        + label {
          color: #bf6e00;
        }
      }
    }
  }

  ${Button} {
    display: block;
    width: 100%;
    margin: 10px 0;
  }

  h3 {
    font-weight: 600;
    color: ${props => (props.footer ? '#fff' : '#000928')};
  }

  p {
    font-weight: 200;
    color: ${props => (props.footer ? '#fff' : '#000928')};
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

  invalidEmail = e => {
    if (e.target.value.length > 0) {
      e.target.setCustomValidity('Invalid email address.')
    } else {
      e.target.setCustomValidity('Please fill out this field.')
    }
  }

  resetEmailValidation = e => {
    e.target.setCustomValidity('')
  }

  render() {
    return (
      <AppointmentFormContainer footer={this.props.footer ? 1 : 0}>
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
          action="/thank-you/"
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
          <div className="form-group">
            <input
              id="name"
              type="text"
              name="name"
              onChange={this.handleChange}
              required
              maxlength="200"
            />
            <label htmlFor="name">Full Name *</label>
          </div>
          <div className="form-group">
            <input
              id="email"
              type="text"
              name="email"
              onChange={this.handleChange}
              pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{3,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$"
              onInvalid={this.invalidEmail}
              onInput={this.resetEmailValidation}
              required
              maxlength="200"
            />
            <label htmlFor="email">Email *</label>
          </div>
          <div className="form-group">
            <input
              id="customer-phone"
              type="tel"
              name="customer-phone"
              onChange={this.handleChange}
              maxlength="200"
            />
            <label htmlFor="customer-phone">Telephone</label>
          </div>
          <div className="form-group">
            <input
              id="budget"
              type="text"
              name="budget"
              onChange={this.handleChange}
              maxlength="200"
            />
            <label htmlFor="budget">Budget</label>
          </div>

          <div className="form-text">
            <p>Required *</p>
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
