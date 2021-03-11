import React from "react"
import { graphql } from "gatsby"

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const linkStyle = {
    color: "#1234",
}

export default function LocationsPage({data}) {
    return (
        <div style={headingStyles}>
            <h1>Locations <span role="img" aria-label="Location at dusk emoji">🌆</span></h1>
        </div>
            <ul>
                {data.allContentfulLocation.edges.map(({ node }) => (
                    <li>
                        <a href="" style={linkStyle}>{node.name}</a>
                    </li>
                ))}
            </ul>
    )
}

export const query = graphql`
query {
  allContentfulLocation {
    edges {
      node {
        id
        name
      }
    }
  }
}

`
