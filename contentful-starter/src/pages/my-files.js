import React from "react"
import { graphql } from "gatsby"

export default function MyFilesPage({data}) {
    console.log(data)
    return (
        <div>
            <h1>These are the files under the src dir</h1>
            <ul>
                {data.allFile.edges.map(({node}, index) => (
                    <li key={index}>
                        {node.base}
                    </li>
                ))} 
            </ul>
        </div>
    )
}

export const query = graphql`
query {
  allFile {
    edges {
      node {
        id
        base
      }
    }
  }
}
`
