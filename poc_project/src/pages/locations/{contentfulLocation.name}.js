import React from "react"
import { graphql, Link } from "gatsby"


const LocationPage = ({ data }) => {

  return (
    <>
      <h1>{data.contentfulLocation.name}</h1>
      <p>{data.contentfulLocation.location.lat}</p>
      <p>{data.contentfulLocation.location.lon}</p>
      <Link to="/locations">Go back to the locations page</Link>
    </>

  )
}

export default LocationPage

export const query = graphql`
query($id: String!){
  contentfulLocation(id: { eq: $id } ) {
    name
    createdAt
    location {
       lat
       lon
    }
  }
}

`
