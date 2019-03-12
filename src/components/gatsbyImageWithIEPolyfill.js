// https://github.com/gatsbyjs/gatsby/issues/4021#issuecomment-445238511

import React from 'react'
import Image from 'gatsby-image'

const Img = ({ objFit = `cover`, objPosition = `50% 50%`, ...props }) => (
  <Image
    {...props}
    imgStyle={{
      ...props.imgStyle,
      objectFit: objFit,
      objectPosition: objPosition,
      fontFamily: `"object-fit: ${objFit}; object-position: ${objPosition}"`,
    }}
  />
)

export default Img
