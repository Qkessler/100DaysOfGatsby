import * as React from "react"
import { graphql, Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const titleStyles = {
    color: "#32a852",
    padding: 20,
}

function City(props) {
    const { city } = props.data
    return (
        <main style={pageStyles}>
            <title>{city.name}</title>
            <h1 style={titleStyles}>{city.name}</h1>
            <h2 style={titleStyles}>{city.description}</h2>
            <Link to="/location" style={linkStyle}>Go back to the locations page.</Link>
        </main>
    )
}

export default City

export const query = graphql`
  query($id: String!) {
    city(id: { eq: $id }) {
      name
      description
      meta {
        createdAt
        id
        sku
      }
    }
  }
`
