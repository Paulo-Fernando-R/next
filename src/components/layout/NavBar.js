import Image from 'next/image'
import styles from '../../styles/layout/Navbar.module.scss'
import { checkCookies, getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';
import { useRouter } from 'next/router'

export default function NavBar(props){

    const router = useRouter()

    function logoff(){
        setCookies('idUser', 'null')
        setCookies('nameUser', 'null')
        alert('Deslogado')
        router.reload(window.location.pathname)
    }

    return(
        <div className={styles.header}>
        <a href="/">
            <Image height='20' width='20' src='/images/bleach.png'/>
        </a>
        {
            props.user == null?
            <a href="/login">
                <Image height='20' width='20' src='/images/dry-clean.png'/>
            </a>
            :
            <a onClick={logoff}>
                <Image height='20' width='20' src='/images/opcao-de-sair.png'/>
            </a>
        }
        
        </div>
    )
}
