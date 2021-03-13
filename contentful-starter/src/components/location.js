import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Location({locationName}) {
  const locationData = useStaticQuery(graphql`query {
    contentfulLocation(name: {eq: "Cartagena"}) {
      id
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
  `).contentfulLocation
  console.log(locationData.name)
  return (
    <div>
        <h1>{locationData.name}</h1>
        
    </div>
)}

