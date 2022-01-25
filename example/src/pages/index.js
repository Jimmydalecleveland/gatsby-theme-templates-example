import React from 'react'
import Heading from 'gatsby-theme-minimal/src/components/Heading'
import InFolder from 'gatsby-theme-minimal/src/components/InFolder'
// This does not seem to matter vs the above
// import { Heading, InFolder } from 'gatsby-theme-minimal'

import HeadingDuplicate from '@myscope/gatsby-theme-minimal/src/components/Heading'

const HomePage = () => (
  <div>
    <Heading>Homepage in an example site</Heading>
    <HeadingDuplicate>Scoped Package Heading</HeadingDuplicate>
    <InFolder>example site's InFolder use</InFolder>
  </div>
)

export default HomePage
