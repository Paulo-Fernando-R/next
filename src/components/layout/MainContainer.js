import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from '../../styles/layout/Content.module.scss'
import { useEffect, useState } from "react";
import { checkCookies, getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';

export default function MainContainer({children}, props){

    const [user, setUser] = useState(null)

    function verifyLogin(){
        if(checkCookies('idUser')){
            setUser(getCookie('idUser'))
        }
    }

    useEffect(()=>{
        verifyLogin()
    }, [user])
   
    
    return(
        <>
            <NavBar user={user}/>
            <div className={styles.content}>{children}</div>
            <Footer/>
        </>
    )
}
