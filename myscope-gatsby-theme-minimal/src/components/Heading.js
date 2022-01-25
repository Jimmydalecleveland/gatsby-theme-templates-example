import React from 'react'

const Heading = ({ children }) => (
  <h1
    style={{
      background: 'darkslateblue',
      color: 'white',
      fontSize: '48px',
      textAlign: 'center',
    }}
  >
    {children}
  </h1>
)

export default Heading
