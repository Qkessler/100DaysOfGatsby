import { ChakraProvider } from "@chakra-ui/gatsby-plugin"
import React from "react"

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS>
      {element}
    </ChakraProvider>
  )
}
