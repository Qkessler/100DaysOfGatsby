import React from "react"
import { graphql } from "gatsby"

export default function CartagenPage({ data }) {
    const cartagenaLocation = data.contentFulLocation
    return (
    <div>
        <h1>Cartagena</h1>
        <p>{cartagenaLocation.id}</p>
    </div>)
}

export const query = graphql`
query MyQuery {
  contentfulLocation(name: {eq: "Cartagena"}) {
    id
    location {
      lat
      lon
    }
    description {
      content {
        content {
          value
        }
      }
    }
    locationImage {
      file {
        url
      }
    }
  }
}
`
