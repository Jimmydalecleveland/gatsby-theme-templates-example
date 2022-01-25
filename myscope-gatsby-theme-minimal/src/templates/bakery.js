import React from 'react'
import Heading from '../components/Heading'

const Bakery = ({ pageContext }) => {
  return (
    <div>
      <Heading>{pageContext.title}</Heading>
    </div>
  )
}

export default Bakery
