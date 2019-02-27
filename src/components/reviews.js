import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import fiveStars from '../images/five-stars.svg'
import reviewPlaceholder from '../images/review-placeholder.svg'
import caret from '../images/caret-right.svg'
import Button from './button'
import { device } from '../utils/device'

const flash = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`

const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  color: #8f5200;

  h2 {
    text-align: center;
    font-weight: 200;
    color: #292929;
    margin: 20px;
  }
`

const Review = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  a {
    width: 100%;
  }

  @media ${device.laptop} {
    width: 40%;
  }

  @media ${device.tablet} {
    width: 70%;
    margin-bottom: 50px;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`

const Name = styled.h3`
  font-size: 1.6rem;
  border: none;
  color: #000928;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`

const Placeholder = styled.img`
  animation: 1.5s ${flash} linear infinite;
`

const SmallCaret = styled.img`
  height: 15px;
  width: auto;
  margin-left: 5px;
  transition: 300ms linear all;
`

class Reviews extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      loading: true,
      error: false,
    }
  }

  getReviews = () => {
    const request = {
      placeId: 'ChIJ60UNMsC_eEgRU-82BhRHRsI',
      fields: ['review'],
    }

    const service = new window.google.maps.places.PlacesService(
      document.getElementById('attribution-container')
    )

    service.getDetails(request, (place, status) => {
      // Latest 5 star reviews.
      if (status === 'OK') {
        const reviews = place.reviews
          .filter(review => review.rating === 5 && review.text.length > 0)
          .sort((a, b) => b.time - a.time)

        this.setState({
          reviews: [reviews[0], reviews[1]],
          loading: false,
        })
      } else {
        this.setState({
          loading: false,
          error: true,
        })
      }
    })
  }

  tryAgain = () => {
    this.setState({
      loading: true,
      error: false,
    })
    this.getReviews()
  }

  componentDidMount() {
    // Add script tag to head, load script and call getReviews.
    if (!window.google) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        process.env.GATSBY_GOOGLE_API_KEY
      }&libraries=places`
      const headScript = document.getElementsByTagName('script')[0]
      headScript.parentNode.insertBefore(script, headScript)
      script.addEventListener('load', () => {
        this.getReviews()
      })
    } else {
      this.getReviews()
    }
  }

  render() {
    const placeHolders = [
      <Review key={0}>
        <Placeholder src={reviewPlaceholder} alt="Review placeholder" />
      </Review>,
      <Review key={1}>
        <Placeholder src={reviewPlaceholder} alt="Review placeholder" />
      </Review>,
    ]

    const reviews = this.state.reviews.map((review, i) => (
      <Review key={i}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/search?rlz=1C1CHBF_en-GBGB784GB784&ei=YGJEXPWUIv6d1fAPps2YuA4&q=Mulberry+Fitted+Kitchens+Ltd&oq=Mulberry+Fitted+Kitchens+Ltd&gs_l=psy-ab.3..35i39l2j0i67.32730.37250..37659...0.0..0.243.3234.9j18j1......0....1..gws-wiz.......0i71j0i131i67j0j0i20i263j0i22i10i30j0i22i30.GCcKXiiCcRw#lrd=0x4878bfc0320d45eb:0xc24647140636ef53,1,,,"
        >
          <Name>{review.author_name}</Name>
          <img src={fiveStars} alt="Star Rating" />
          <p>
            {/* Truncate review text to a max of 50 words. */}
            {review.text.length > 350
              ? review.text
                  .split(' ')
                  .slice(0, 50)
                  .join(' ')
                  .concat('...')
              : review.text}
            {review.text.length > 350 ? (
              <span>
                <SmallCaret src={caret} />
              </span>
            ) : null}
          </p>
        </a>
      </Review>
    ))

    if (this.state.error) {
      return (
        <ErrorContainer>
          <h2>FAILED TO FETCH REVIEWS</h2>
          <Button primary onClick={this.tryAgain.bind(this)}>
            Try Again
          </Button>
          <div id="attribution-container" style={{ display: 'none' }} />
        </ErrorContainer>
      )
    }

    return (
      <Container>
        {this.state.loading ? placeHolders : reviews}
        <div id="attribution-container" style={{ display: 'none' }} />
      </Container>
    )
  }
}

export default Reviews
