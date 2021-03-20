import React from 'react'
// import { Link } from 'gatsby'

// import NavBar from './navbar'
import {GrMenu, GrClose} from 'react-icons/gr'
import {Box} from '@chakra-ui/react'

export default ({ children }) => {
  return (
    <div>
      <Box w="100%">
        {GrMenu}
      </Box>
      <Box w="100%">
        {GrClose}
      </Box>
      <main>
        { children }
      </main>
    </div>
  )
}
