import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AppointmentForm from '../components/appointmentForm'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`

const AppointmentFormPage = props => (
  <Layout location={props.location.pathname}>
    <SEO
      title="Request Appointment"
      description="Book an appointment to make sure a designer will be present when you visit our showroom."
    />
    <Container>
      <AppointmentForm />
    </Container>
  </Layout>
)

export default AppointmentFormPage
