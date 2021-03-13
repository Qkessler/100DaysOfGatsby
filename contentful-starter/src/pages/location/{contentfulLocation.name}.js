import React from "react"
import { graphql } from "gatsby"

export default (props) => {
  const data = props.data
  const location = data.contenfulLocation
  return (
  <div>
      <h1>{props.params.name}</h1>
      <p>{location.description.content.content.value}</p>
</div>
  
)}

export const query = graphql`
  query ($id: String) {
    contentfulLocation(id: { eq: $id }) {
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
