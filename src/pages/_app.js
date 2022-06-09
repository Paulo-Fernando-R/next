import '../styles/globals.scss'
import MainContainer from '../components/layout/MainContainer'
import { useState } from 'react'
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';


import { CookiesProvider } from 'react-cookie'

function MyApp({ Component, pageProps }) {
  
  return(
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer> 
  )
}

/*<CookiesProvider>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer> 
      </CookiesProvider> */





export default MyApp