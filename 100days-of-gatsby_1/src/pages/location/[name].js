import * as React from "react"
import { Link } from "gatsby"

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

const NonExistent = () => {
    return (
        <main style={pageStyles}>
            <title>Non Existent location</title>
            <h1 style={titleStyles}>Sorry, couldn't find the location you were looking for!</h1>
            <Link to="/location" style={linkStyle}>Go back to the locations page.</Link>
        </main>
        
    )
}

export default NonExistent
