// This shadow causes an infinite loop clientside
import React from 'react'
import Subheading from 'gatsby-theme-minimal/src/components/Subheading'

export default ({ children }) => <Subheading>Customized {children}</Subheading>
