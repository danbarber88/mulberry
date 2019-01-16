import React, { Component } from 'react'
import styled from 'styled-components'
import fiveStars from '../images/five-stars.svg'

// TODO: Merge after tidy up

// TODO: Catch errors when fetching reviews fails
// TODO: Provide loading icons when reviews are loading in
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
  }

  // TODO: Tidy this up, remove unnecessary code.

  getReviews = () => {
    const request = {
      placeId: 'ChIJ60UNMsC_eEgRU-82BhRHRsI',
      fields: ['review']
    };
    if(window.google) {
      const service = new window.google.maps.places.PlacesService(document.getElementById("reviews-container"));
      service.getDetails(request, place => {
        const reviews = place.reviews
          .filter(review => review.rating === 5)
          .sort((a, b) => b.time - a.time)
        this.setState({
          reviews: [reviews[0], reviews[1]]
        })
      });
    }
  }

  componentDidMount() {
    if(!window.google) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA95kwx9MTvPh3sRwBNK6RlPRPTDczQDj0&libraries=places`;
      const headScript = document.getElementsByTagName('script')[0];
      headScript.parentNode.insertBefore(script, headScript);
      script.addEventListener('load', () => {
        this.getReviews();
      });
    } else {
      this.getReviews();
    }
  }

  render() {
    let reviews = this.state.reviews.map(review => (
      <Review>
        <Name>{review.author_name}</Name>
        <img src={fiveStars} alt="Star Rating" />
        <p>{review.text}</p>
      </Review>
    ))

    return <Container id="reviews-container">{reviews}</Container>
  }
}

export default Reviews
