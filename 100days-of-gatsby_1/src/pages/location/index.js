import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    locationName: "Cartagena",
    description: 
      "This is the place I grew up.",
      color: "#E95800",
      badge: true,
  },
    {
        locationName: "Murcia",   
    description:
      "This is the place where I studied university.",
    color: "#1099A8",
        badge: true,
  },
  {
      locationName: "Caravaca",
      description:
      "This is the place where my spanish grandma lives.",
      color: "#BC027F",
      badge: true,
  },
]

// markup
const LocationPage = () => {
  return (
    <main style={pageStyles}>
      <title>Locations page</title>
      <h1 style={headingStyles}>
        Hi traveler!
        <br />
        <span style={headingAccentStyles}>— you are at the Locations page! </span>
        <span role="img" aria-label="Party popper emojis">
          🌆🌆🌆
        </span>
      </h1>
      <p style={paragraphStyles}>
          You will be able to select from the Locations list to access the different places
          we currently work at.
      </p>
      <ul style={listStyles}>
        {links.map(link => (
          <li style={{ ...listItemStyles, color: link.color }}>
            <span>
                <Link to="/cartagena" style={linkStyle}>{link.locationName}</Link>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default LocationPage
