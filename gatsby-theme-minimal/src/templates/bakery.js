import React from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'

const Bakery = ({ pageContext }) => {
  return (
    <div>
      <Heading>{pageContext.title}</Heading>
      <Subheading>{pageContext.subtitle}</Subheading>
    </div>
  )
}

export default Bakery
