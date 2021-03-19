import React from 'react'
import { Link } from 'gatsby'

import {NavBar} from './navbar'

export default ({ children }) => {
  return (
    <div>
      <NavBar/>
      <div style={{ display: 'flex' }}>
        <Link to='/cv'>
          <button>
            View My CV
          </button>
        </Link>
      </div>
      <main>
        { children }
      </main>
    </div>
  )
}
