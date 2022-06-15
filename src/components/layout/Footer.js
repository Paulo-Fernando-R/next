import styles from '../../styles/layout/Footer.module.scss'
import Link from 'next/link'
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <Link href={'/extra'}><a>Páginas extras</a></Link>
            <div>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
                    ut orci id est iaculis tristique. Nullam vitae sem mauris. Vestibulum euismod purus sit amet 
                </p>
            </div>
           
        </footer>
    )
}