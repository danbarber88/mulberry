import React, { Component } from 'react'
import Image from 'gatsby-image'
import Modal from 'react-modal'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from './button'

// custom styles for the Modal and overlay
const customStyles = {
  content: {
    maxWidth: '500px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  overlay: {
    zIndex: '5',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
}

const Container = styled.div`
  width: ${props => props.width};
  height: auto;
  cursor: pointer;

  img {
    margin: 0;
  }
`

const ModalText = styled.p`
  font-size: 1.075rem;
`

const ButtonContainer = styled.div`
  margin: 0 auto;
`

class SupplierLogo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    Modal.setAppElement('body')
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <>
        <Container width={this.props.width} onClick={this.openModal}>
          <Image fluid={this.props.img} />
        </Container>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <ModalText>
            By clicking this link you are navigating away from our website, any
            prices you encounter are not representative of what we can offer
            you. Please get in touch for an accurate quote.
          </ModalText>
          <ButtonContainer>
            <Button onClick={this.closeModal}>go back</Button>
            <a href={this.props.url} target="_blank" rel="noopener noreferrer">
              <Button primary onClick={this.closeModal}>
                i understand
              </Button>
            </a>
          </ButtonContainer>
        </Modal>
      </>
    )
  }
}

SupplierLogo.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
}

export default SupplierLogo
