import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Banner from '../components/banner'
import {
  ContentSection,
  ContentContainer,
  MainHeader,
  SecondaryHeader,
} from '../components/contentSection'
import Button from '../components/button'
import DesignProcess from '../components/designProcess'
import Testimonial from '../components/testimonial'

const DesignPage = props => (
  <Layout location={props.location.pathname}>
    <SEO title="Design Service" keywords={[`gatsby`, `application`, `react`]} />
    <Banner />
    <ContentSection>
      <ContentContainer marginBottom>
        <MainHeader>Design sets us apart</MainHeader>
        <p>
          Selling point about big brands not being able to provide the same
          level as we can - esse biltong minim sirloin elit leberkas short loin
          flank ex ut. Ribeye alcatra fatback, tail id sausage laboris pancetta
          shoulder ut rump turkey et. Est aute sausage nulla, sed elit officia
          ground round dolore tenderloin in chicken laboris.
        </p>
        <p>
          Jerky ad mollit dolor beef ribs esse biltong minim sirloin elit
          leberkas short loin flank ex ut. Ribeye alcatra fatback, tail id
          sausage laboris pancetta shoulder ut rump turkey et. Est aute sausage
          nulla.
        </p>
      </ContentContainer>
      <ContentContainer marginBottom>
        <SecondaryHeader>Let us help</SecondaryHeader>
        <p>
          Tell the customer that they can come and see us for any reasons and
          that we can answer any questions they have - leberkas short loin flank
          ex ut. Ribeye alcatra fatback, tail id sausage laboris pancetta
          shoulder ut rump turkey et. Est aute sausage nulla, sed elit officia
          ground round dolore tenderloin in chicken laboris.
        </p>
        <Link to="/contact-us">
          <Button primary>visit showroom</Button>
        </Link>
        <a href="mailto:help@mulberrykitchens.co.uk">
          <Button>email us</Button>
        </a>
      </ContentContainer>
    </ContentSection>
    <DesignProcess />
    <Testimonial
      text="Thank you for designing such a stunning kitchen - we love it, even the cat is happy as he's got a new hammock! Also for the first class service and support you gave throughout the fitting, from your first visit to discuss ideas to your last visit to deliver the cutlery drawer - nothing was too much trouble for you. We will certainly recommend Mulberry Kitchens in the future."
      name="Mrs E"
    />
  </Layout>
)

export default DesignPage
