import Image from 'next/image'
import styles from '../../styles/layout/Navbar.module.scss'
export default function NavBar(){
    return(
        <div className={styles.header}>
        <Image height='20' width='20' src='/images/bleach.png'/>
        <Image height='20' width='20' src='/images/dry-clean.png'/>
        </div>
    )
}