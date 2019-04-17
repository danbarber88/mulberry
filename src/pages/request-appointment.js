import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from '../utils/device'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/button'
import AppointmentForm from '../components/appointmentForm'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`

const AppointmentFormPage = () => (
  <Layout>
    <SEO title="Request Appointment" />
    <Container>
      <AppointmentForm />
    </Container>
  </Layout>
)

export default AppointmentFormPage
