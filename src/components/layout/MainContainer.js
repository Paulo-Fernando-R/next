import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from '../../styles/layout/Content.module.scss'
import {parseCookie} from "../../helpers/"
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';

export default function MainContainer({children}, {data}){
    return(
        <>
            <NavBar/>
            <div className={styles.content}>{children}</div>
            <Footer/>
        </>
    )
}
