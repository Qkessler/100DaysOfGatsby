import React from "react"
import { graphql } from "gatsby"

export default ({data}) => {
  console.log("This is the data \n" + data);
  return (
      <div>
      <h1>{data.contentfulLocation.name}</h1>
      <p>{data.contentfulLocation.description.content.content.value}</p>
      </div>
)}

export const query = graphql`
  query ($id: String!) {
    contentfulLocation(id: { eq: $id }) {
      name
      description {
        content {
          content {
            value
          }
        }
      }
    }
  }
`
