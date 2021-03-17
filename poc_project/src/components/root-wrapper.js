import { ChackraProvider, ColorModeProvider } from "@chakra-ui/react";
import React from "react"


export const wrapRootElement = ({element}) => {
  return (
      <ChackraProvider>
      <ColorModeProvider>
      {element}
      </ColorModeProvider>
      </ChackraProvider>
      
  )
}
