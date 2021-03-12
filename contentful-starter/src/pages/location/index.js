import React from "react"
import { graphql } from "gatsby"

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

export default function LocationsPage({data}) {
    return (
        <div>
            <div style={headingStyles}>
                <h1>Locations <span role="img" aria-label="Location at dusk emoji">🌆</span></h1>
            </div>
          <div>
            <ul>
              {data.allContentfulLocation.edges.map(node => (
                  <li>
                  {node.name}
                  </li>
              ))}
            </ul>
          </div>
        </div>
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
