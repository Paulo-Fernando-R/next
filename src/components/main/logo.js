import Image from 'next/image'
import Link from 'next/dist/client/link'
import styles from '../../styles/home/Logo.module.scss'

import { CookiesProvider } from 'react-cookie'
export default function Logo(){

    return(
        <div className={styles.box}>
            
            <p className={styles.text}>Venha conhecer nossos esquemas</p>
            <ul>
            <li>
                <Link href="/test"><a className={styles.button}>Clique para começar</a></Link>
            </li>
            </ul>
        </div>
        
        
    )
}