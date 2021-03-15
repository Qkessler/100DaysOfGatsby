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

const AboutPage = () => {
  return (
    <main style={pageStyles}>
      <title>About page</title>
      <h1 style={titleStyles}>About page: Welcome!</h1>
      <p>This is the about page for the 100days-challenge-1, with the intention of practising with the types of routes that you can create with Gatsby!</p>
      <Link to="/" style={linkStyle}>Go back to index.</Link>
    </main>

  )
}

export default AboutPage
