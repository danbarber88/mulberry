import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  ContentSection,
  ContentContainer,
  MainHeader,
  SecondaryHeader,
} from '../components/contentSection'

const Header = styled(MainHeader)`
  font-size: 3rem;
`

const PrivacyPolicyPage = props => (
  <Layout location={props.location.pathname}>
    <SEO
      title="Privacy Policy"
      description="Read our privacy policy, which explains what information we collect on our website."
    />
    <ContentSection>
      <ContentContainer width="60%">
        <Header>Privacy Policy</Header>
        <p>
          We are committed to protecting your privacy. We will only use the
          information that we collect about you lawfully (in accordance with the
          Data Protection Act 1998 and GDPR).
        </p>
        <p>
          The only reason we may collect information about you is to enable us
          to contact you about a requested appointment.
        </p>
        <p>We will not use your email for any other purpose in the future.</p>
        <p>The type of information we may collect about you includes:</p>
        <ul>
          <li>your name</li>
          <li>email address</li>
          <li>phone number</li>
        </ul>
        <p>
          We will never collect information about you without your explicit
          consent.
        </p>
        <p>
          The personal information which we hold will be held securely in
          accordance with the law.
        </p>
        <p>
          We may use technology to track the patterns of behaviour of visitors
          to our site. This can include using a "cookie" which would be stored
          on your browser. You can usually modify your browser to prevent this
          happening. The information collected in this way can be used to
          identify you unless you modify your browser settings.
        </p>
        <p>
          Check our <Link to="/cookie-policy">cookie policy</Link> for more
          information on the cookies we use.
        </p>
        <SecondaryHeader>Hotjar</SecondaryHeader>
        <p>
          We use{' '}
          <a
            href="http://www.hotjar.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Hotjar
          </a>{' '}
          in order to better understand our users’ needs and to optimize this
          service and experience. Hotjar is a technology service that helps us
          better understand our users experience (e.g. how much time they spend
          on which pages, which links they choose to click, what users do and
          don’t like, etc.) and this enables us to build and maintain our
          service with user feedback. Hotjar uses cookies and other technologies
          to collect data on our users’ behavior and their devices (in
          particular device's IP address (captured and stored only in anonymized
          form), device screen size, device type (unique device identifiers),
          browser information, geographic location (country only), preferred
          language used to display our website). Hotjar stores this information
          in a pseudonymized user profile. Neither Hotjar nor we will ever use
          this information to identify individual users or to match it with
          further data on an individual user. For further details, please see
          Hotjar’s privacy policy by clicking on{' '}
          <a
            href="https://www.hotjar.com/legal/policies/privacy"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            this link
          </a>
          .
        </p>
        <p>
          You can opt-out to the creation of a user profile, Hotjar’s storing of
          data about your usage of our site and Hotjar’s use of tracking cookies
          on other websites by following this{' '}
          <a
            href="https://www.hotjar.com/legal/compliance/opt-out"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            opt-out link
          </a>
          .
        </p>
      </ContentContainer>
    </ContentSection>
  </Layout>
)

export default PrivacyPolicyPage
