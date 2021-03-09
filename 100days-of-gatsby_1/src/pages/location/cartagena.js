import React from "react"
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

function CartagenaPage() {
    return (
       <main style={pageStyles}>
             <title>Cartagena</title>
             <h1 style={titleStyles}>Cartagena</h1>
             <p>Cartagena is the city I grew up in.</p>
           <Link to="/location" style={linkStyle}>Go back to the locations page.</Link>
         </main>
    )
}

export default CartagenaPage
