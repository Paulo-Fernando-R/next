import '../styles/globals.scss'
import MainContainer from '../components/layout/MainContainer'
import { useEffect, useState } from 'react';
import { checkCookies, getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';

function MyApp({ Component, pageProps }) {

  const [ ret, setRet ] = useState('');
//serve para buscar dados do child
  const childtoparent = (childdata) => {
      setRet(childdata)
      console.log(ret + 'sssdsdd')
    }

  return(
  
    <MainContainer>
      <Component childtoparent={childtoparent} {...pageProps} />
    </MainContainer> 
  )
}

export default MyApp