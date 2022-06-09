import Image from 'next/image'
import styles from '../../styles/layout/Navbar.module.scss'
import {parseCookie} from "../../helpers/index"
import { useEffect } from 'react'
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';

export default function NavBar({data}){

    return(
        <div className={styles.header}>
        <a href="/">
            <Image height='20' width='20' src='/images/bleach.png'/>
        </a>
        <a href="/login">
            <Image height='20' width='20' src='/images/dry-clean.png'/>
        </a>
        
        </div>
    )
}

/*NavBar.getInitialProps = async ({req, res}) => {
    const data = parseCookie(req)
  
    if (res) {
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        res.writeHead(301, { Location: "/" })
        res.end()
      }
    }
  
    return {
      data: data && data,
    }
  }*/