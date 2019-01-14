import React, { Component } from 'react'
import styled from 'styled-components'
import fiveStars from '../images/five-stars.svg'

// TODO: Catch errors when fetching reviews fails
// TODO: Provide loading icons when reviews are loading in
// TODO: Change more testimonials link to not be full width
// QUESTION: Does using the cors anywhere url infront of api url slow things down?
// TODO: Max characters on reviews. truncate
// QUESTION: Where do reviews link to? google page with reviews or testimonials page.

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Review = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

class Reviews extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
    }

    this.getReviews = this.getReviews.bind(this)
  }

  componentDidMount() {
    this.getReviews()
  }

  getReviews() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ60UNMsC_eEgRU-82BhRHRsI&fields=review&key=${
        process.env.GOOGLE_API
      }`
    )
      .then(res => res.json())
      .then(json =>
        json.result.reviews
          .filter(review => review.rating === 5)
          .sort((a, b) => b.time - a.time)
      )
      .then(reviews =>
        this.setState({
          reviews: [reviews[0], reviews[1]],
        })
      )
  }

  render() {
    let reviews = this.state.reviews.map(review => (
      <Review>
        <Name>{review.author_name}</Name>
        <img src={fiveStars} alt="Star Rating" />
        <p>{review.text}</p>
      </Review>
    ))

    return <Container>{reviews}</Container>
  }
}

export default Reviews
