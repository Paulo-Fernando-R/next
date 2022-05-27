import '../styles/globals.scss'
import MainContainer from '../components/layout/MainContainer'
import { useState } from 'react'

import { CookiesProvider } from 'react-cookie'

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState(null)
  
  
  return(
    <CookiesProvider>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer> 
      </CookiesProvider>
  )
}

export default MyApp
