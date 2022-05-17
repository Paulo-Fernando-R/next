import '../styles/globals.scss'
import MainContainer from '../components/layout/MainContainer'

function MyApp({ Component, pageProps }) {
  return( <MainContainer>
    <Component {...pageProps} />
  </MainContainer> 
  )
}

export default MyApp
