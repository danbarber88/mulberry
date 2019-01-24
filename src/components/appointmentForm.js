import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './button'

// TODO: Set up redirect from gmail account
// TODO: Point to mail server on heroku
// TODO: Anti-spam
// TODO: Add a spinner into button when clicked - the page will either go to a thank you page or an error page so no need to change spinner back to text.

const AppointmentFormContainer = styled.div`
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
`

class AppointmentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        name: '',
        email: '',
        phone: '',
        budget: '',
      },
    }
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
          get back to you as soon as possible. or else.
        </p>
        {/* TODO: add action to direct to thank you page when complete */}
        <form
          name="appointment"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="text" name="name" placeholder="Full Name *" required />
          <input type="email" name="email" placeholder="Email *" required />
          <input type="tel" name="phone" placeholder="Telephone" />
          <input type="number" name="budget" placeholder="Budget" />

          <label style={{ display: 'none' }}>Do not fill this out: </label>
          <input style={{ display: 'none' }} name="bot-field" />

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
