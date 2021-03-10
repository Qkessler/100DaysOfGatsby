import React from "react"
import { graphql } from "gatsby"

const locationName = props.contentfulLocation.name;

const Location = ({ data }) => {
    <div>
        <h1>{locationName}</h1>
        <div>
            data.contentfulLocation.edges.map(({node}) => {
            <p>{node.description.content.content.value}</p>
            <img alt="locationImage" src="{node.locationImage.file.url}"/>
            })
        </div>
    </div>
}

export const query = graphql`
  {
    contentfulLocation(name: {eq: "{locationName.toUpperCase()}"}) {
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
