import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            defaultTitle={data.site.siteMetadata.title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `google-site-verification`,
                content: 'DLQyN7WlDDX0QuZKdHotyPBXjUXt_PyEuYiHd0RlMEA',
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          >
            <script type="application/ld+json">
              {`
                {
                  "@context": "http://www.schema.org",
                  "@type": "LocalBusiness",
                  "name": "Mulberry Fitted Kitchens Ltd",
                  "url": "https://www.mulberrykitchens.co.uk/",
                  "description": "Mulberry Fitted Kitchens Ltd specialises in the design and installation of bespoke luxury kitchens in Hull & East Yorkshire.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "289 National Avenue",
                    "addressLocality": "Hull",
                    "postalCode": "HU5 4JB",
                    "addressCountry": "Britain"
                  },
                  "email": "info@mulberrykitchens.co.uk",
                  "telephone": "01482 475370",
                  "openingHours": "Mo 09:00-16:30 Tu 09:00-16:30 We 09:00-16:30 Th 09:00-16:30 Fr 09:00-16:30 Sa 10:00-13:00"
                  "review": [
                    {
                      "@type": "Review",
                      "author": "John McCaffrey",
                      "description": "We commissioned Mulberry fitted kitchens to design and fit our new kitchen  and the results are outstanding. Geoff and Colleen took our rather vague ideas for a new kitchen and improved on them delivering a completely thought through design. The Mulberry team that fitted the kitchen were excellent and could not have been more helpful, especially Steve and Martin. I would recommend the whole Mulberry team to anyone looking at installing a new kitchen.",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                      "@type": "Review",
                      "author": "andy quin",
                      "description": "Pretty disappointed. Good initial meetings, suggested a budget, Geoff said was fine. Tell us it will be 40% more than we had discussed. Give them plans and they never get back to us despite chasing them.",
                      "reviewRating": { "@type": "Rating", "ratingValue": "1" }
                    },
                    {
                      "@type": "Review",
                      "author": "Malcolm Noble",
                      "description": "We have experienced 2 kitchen installations by the Mulberry team. One a major re modelling with all the bells and whistles and the other a modest update of an existing kitchen in a period building. Each time Geoff Colleen and the team translate the brief into a desirable yet practical solution and can be relied upon to give fair value for money with minimim fuss. Happy to recommend",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                      "@type": "Review",
                      "author": "Susan Stride",
                      "description": "Colleen and Geoff designed, supplied and fitted our perfect kitchen for us. The staff and fitters all went out of their way to make sure everything was just as we wanted.  I would recommend this company wholeheartedly!",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                      "@type": "Review",
                      "author": "Kerry Wardell",
                      "description": "First Class, professional, and friendly service!
                      We have recently had our kitchen designed and fitted by Mulberry and from start to finish Geoff & Colleen helped us to create a modern kitchen that would fit in with our busy family life. We had been to numerous kitchen design firms but a friend recommended Mulberry Kitchens to us, and we are so pleased they did! We visited the showroom and the quality of the units far exceeded any other of the other kitchen firms we had been to. 
                      So after numerous changes (as us women do) and lots of patience from Geoff, we went ahead.
                      We wanted two rooms made into one big kitchen, complete with all mod cons (sound system, induction hob and plinth lights). Throughout the process we were kept up-to-date and disruption was kept to a minimum (despite having no kitchen for 3 weeks).  The workmen arrived on time and completed our dream kitchen to a very high standard. Nothing was too much trouble and Geoff and Colleen made the whole process less stressful for us.  We now have a beautiful, modern kitchen that we love and have had lovely comments about from family and friends. We would highly recommend Mulberry without hesitation.",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                      "@type": "Review",
                      "author": "lyndsay preston",
                      "description": "Amazing service with a personal touch!
                      Mulberry designed and fitted our stunning kitchen a year ago. We had no idea really of what we wanted and it was a problem shape. Other kitchen companies found it tricky to design and we weren't happy but Geoff and Coleen love a challenge and didn't disappoint! Our bespoke kitchens hosts some fantastic features, the ironing board in a drawer being my favourite! It all illuminates too. Visitors are wowed by our 'show piece' and we're  really proud.
                      Nothing is too much trouble and they can't do enough to help. After care is fabulous. Can't praise the team enough!",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                      "@type": "Review",
                      "author": "Jim Johnson",
                      "description": "10 years ago, Mulberry designed and fitted a new kitchen for us which resulted in us having a kitchen which was the envy of friends and neighbours. The service they provided was delivered in a friendly and professional manner by every member of the team, a rare commodity in those days as it is now. 
                      Following on from a recent water leak we needed some of the wall units replacing, so where else to turn but to Mulberry Kitchens.  We thought matching the colour of the units would be difficult but no, Mulberry matched the units perfectly and I’m happy to say that in the intervening years their skill, courtesy and downright professionalism hasn’t waned a bit. - Jim & Nicki",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                      "@type": "Review",
                      "author": "Andrew Hersom",
                      "description": "Our Mulberry kitchen looks as good today as when it was installed in November 2011. Geoff and Colleen and the whole team interpreted our (sometimes vague) wishes beautifully and produced an ideal working kitchen. All the staff are efficient and cheerful and nothing is too much trouble. The few problems are sorted immediately and Colleen makes marvelous cakes - what other kitchen company could match this?",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                      "@type": "Review",
                      "author": "Adam Charles",
                      "description": "Going to a bespoke kitchen location with a modest budget such as mine was quite daunting but I found the team to be very welcoming and understanding with regards to my needs and indeed the amount of money I wished to spend.

                      The end result was an excellent kitchen that was of a much higher quality than anything I could have got for a similar price from some of the major high street retailers so a big thanks must go to Geoff, Colleen and the rest of the lovely team at Mulberry.",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                      "@type": "Review",
                      "author": "Richard Denley",
                      "description": "Thank you Geoff and Coleen!
                      You made our choosing a kitchen a pleasurable experience.  We had tried looking at a couple of the well known kitchen suppliers but after visiting your showroom and talking through our wishes we felt that you completely understood what we were trying to achieve. You gave us some thoughtful suggestions which really helped.  I would recommend you to all of our friends.  Thanks again!
                      Julia & Richard Denley",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                      "@type": "Review",
                      "author": "Anon",
                      "description": "Never got back to me. A shame as I thought they were real nice people. Decent owners; I thought 'this looks promising'. I chose what I wanted at the showroom and they came to look at my kitchen a week later. They measured up and drew things out and  said they would be back in touch within two weeks. This was a few years ago and I am still waiting for them to come back - bit of a disappointment",
                      "reviewRating": { "@type": "Rating", "ratingValue": "1" }
                    },
                    {
                      "@type": "Review",
                      "author": "Peter Robson",
                      "description": "We bought our kitchen from Mulberry 18 months ago. Having visited several larger establishments we found Geoff and Colleen to be helpful and very patient with us. Their design took account of all our requirements. During the whole planning process they were attentive and happy to amend designs which took a great deal of their time, but we never felt rushed or under pressure. Following completion we had a few problems with the appliances and whilst they were covered by a warranty Geoff and Colleen were always there in addition to advise us and provide solutions to any problems.
                      This week we had a small issue with the light in the oven and wondered if this was covered in the warranty. We emailed them on the Sunday and by Monday morning they had got back to us and have arranged a replacement to be fitted within the week.
                      We are so glad we chose Mulberry as it is not only the kitchen design, but also the ongoing customer service that is important to us and they have consistently provided us with an excellent standard of service.",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                      "@type": "Review",
                      "author": "Monika Thomas",
                      "description": "Excellent service!!!   We used Mulberry Kitchens when we moved into our house a few years ago to install a modern bathroom and were so pleased with the job that we contacted them again when we needed the kitchen renovating.  
                      We found Geoff Chivers and  his partner Colleen to be most helpful and professional with their time and suggestions; as we had no idea so many decisions would have to be made!  Cupboards wood/styles/handles; tops laminate/granite; taps to be hot/cold separated or together; oh and the tiling/lights.... choices..choices.. it went on and on.  We really could not have ended with the perfect kitchen we have now without their help and input!",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                      "@type": "Review",
                      "author": "Charles Stride",
                      "description": "Staff very helpful and accommodating. Good advice and top quality kitchens.",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                    {
                      "@type": "Review",
                      "author": "Anon",
                      "description": "never got back to me",
                      "reviewRating": { "@type": "Rating", "ratingValue": "2" }
                    },
                    {
                      "@type": "Review",
                      "author": "Stephen Swaine",
                      "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    },
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "reviewCount": 16,
                    "ratingValue": 4.3
                  },
                }`}
            </script>
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
