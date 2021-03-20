import React from 'react'
import NavBar from './navbar'
import {ChakraProvider} from '@chakra-ui/react'


export default ({ children }) => {
  return (
    <ChakraProvider>
      <NavBar/>
      <main>
        { children }
      </main>
    </ChakraProvider>
  )
}
