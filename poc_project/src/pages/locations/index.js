import * as React from "react"
import { Link, graphql } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

const LocationPage = ({ data }) => {
  return (
    <wrapRootElement>
      <main style={pageStyles}>
        <title>Locations page</title>
        <h1 style={headingStyles}>
          Hi traveler!
        <br />
          <span style={headingAccentStyles}>— you are at the Locations page! </span>
          <span role="img" aria-label="Party popper emojis">
            🌆🌆🌆
        </span>
        </h1>
        <p style={paragraphStyles}>
          You will be able to select from the Locations list to access the different places
          we currently work at.
      </p>
        <ul style={listStyles}>
          {data.allContentfulLocation.nodes.map((node) => (
            <li><Link to={node.gatsbyPath}>{node.name}</Link></li>
          ))}
        </ul>
      </main>
    </wrapRootElement>
  )
}

export default LocationPage

export const query = graphql`
query {
  allContentfulLocation {
    nodes {
      name
      gatsbyPath(filePath: "/locations/{contentfulLocation.name}")
    }
  }
}

`
