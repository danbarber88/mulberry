import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/device'

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

const CookieTable = styled.div`
  display: flex;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`

const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 0;

  &:first-child {
    padding-right: 40px;
    min-width: 165px;
  }
`

const TableHeader = styled.div`
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`

const TableData = styled.div`
  height: 100%;
  padding-top: 20px;
`

const CookiePolicyPage = props => (
  <Layout location={props.location.pathname}>
    <SEO
      title="Cookies"
      description="Read our cookie policy, which explains how we use cookies on our website."
    />
    <ContentSection>
      <ContentContainer width="60%">
        <Header>Cookie Policy</Header>
        <SecondaryHeader>What are cookies?</SecondaryHeader>
        <p>
          A cookie is a small information file that is sent to your computer,
          mobile, tablet or other device when you visit a website. These files
          are used to ensure each user has the most relevant experience possible
          when using a website. This includes remembering your preferences, and
          ensuring all adverts or offers are relevant to you.
        </p>
        <p>
          Cookies are perfectly safe to be stored on your computer and almost
          all web browsers have cookie storing enabled as default. However, all
          browsers have the option of disabling cookies being stored on your
          computer if you wish to do this.
        </p>
        <SecondaryHeader>Our cookie policy</SecondaryHeader>
        <p>
          We only use 3rd party cookies to collect anonymous information on how
          people use the Site, and don't store sensitive information such as
          your name, address or credit/debit card details. If you visit the Site
          when your browser is set to accept cookies, we will interpret this as
          an indication that you consent to our use of cookies and other similar
          technologies as described in this policy. However, if you would prefer
          to restrict, block or delete cookies from the Site, or any other
          website, you can use your browser to do this.
        </p>
        <SecondaryHeader>3rd party cookies</SecondaryHeader>
        <p>
          When you visit the Site you may notice some cookies that are not
          related to Mulberry Kitchens. If you go on to a web page that contains
          embedded content, for example from YouTube, you may be sent cookies
          from these websites. We don't control the setting of these cookies, so
          we suggest you check the third-party websites for more information
          about their cookies and how to manage them.
        </p>

        <CookieTable>
          <TableColumn>
            <TableHeader>COOKIE NAME</TableHeader>
            <TableData>Google Analytics</TableData>
          </TableColumn>
          <TableColumn>
            <TableHeader>COOKIE FUNCTION</TableHeader>
            <TableData>
              These cookies enable the function of our data analytics package –
              Google Analytics. This software helps us track and analyse visitor
              information such as browser usage, new visitor numbers and
              response to marketing activity. That information helps us to
              improve the website. The data stored by these cookies can be seen
              only by the relevant people at Mulberry Kitchens and Google. The
              information is anonymous and never reveals any personal or
              financial data.
            </TableData>
          </TableColumn>
        </CookieTable>

        <SecondaryHeader>Managing your cookies</SecondaryHeader>
        <p>
          You have different options to manage the cookies on your computer or
          device. You can change your browser settings to prevent cookies from
          being accepted, or, depending on which browser you are using, you
          might be able to receive an alert when a website is trying to place
          one on your browser. With most browsers you can allow first party
          cookies to be set but refuse third party cookies.
        </p>
        <p>
          Your browsers 'help' menu should tell you how to block cookies or
          change your cookie settings. How you adjust your browser will depend
          on the browser you are using.
        </p>
        <p>
          You can delete cookies stored in your browser by using a function in
          your browser. Whilst this does not mean you won't collect cookies in
          the future, it gives you freedom to delete your cookies after you have
          been online. This function is often known as 'clearing cookies'.
        </p>
        <p>
          Clearing your cookies on one browser of one device does not
          automatically clear them on another. You need to clear all browsers on
          all channels independently.
        </p>
      </ContentContainer>
    </ContentSection>
  </Layout>
)

export default CookiePolicyPage
