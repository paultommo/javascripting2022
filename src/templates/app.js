// app.tsx
import React from 'react'
import { Router } from '@reach/router'

const Team = () => {

  return (

    <div>kkkkkkkk</div>

  )

}


const App = () => (
  <div>
   
    <Router>
          <Team path={`/app/:slug`} />
    </Router>

  </div>
)

export default App