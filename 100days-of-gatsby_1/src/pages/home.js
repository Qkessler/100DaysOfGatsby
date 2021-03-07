import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const titleStyles = {
    color: "#32a852",
    padding: 20,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}


const HomePage = () => {
    return (
        <main style={pageStyles}>
            <title>Home page</title>
            <h1 style={titleStyles}>Home page: Welcome!</h1>
            <Link to="/" style={linkStyle}>Go back to index.</Link>
        </main>
        
    )
}

export default HomePage
