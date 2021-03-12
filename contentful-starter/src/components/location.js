import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Location({locationName}) { return (
    <StaticQuery
        query={graphql`query {
  contentfulLocation(name: {eq: "$locationName"}, location: {lat: {}, lon: {}}, createdAt: {}) {
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
`}
        render={data => (
            <div>
                <h1>{data.name}</h1>
                
            </div>
        )}/>
    
)}
    

