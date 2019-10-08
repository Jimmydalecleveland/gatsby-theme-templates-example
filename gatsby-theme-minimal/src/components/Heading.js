import React from 'react'

const Heading = ({ children }) => (
  <h1
    style={{
      background: 'coral',
      color: 'white',
      fontSize: '48px',
      textAlign: 'center',
    }}
  >
    {children}
  </h1>
)

export default Heading
