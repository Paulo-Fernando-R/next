import Image from 'next/image'
import styles from '../../styles/test/card.module.scss'
export default function Card(){
    return(
        <div className={styles.card}>
            <Image height='300' width='300' src='/images/gota-de-sangue.png'/>
            <p>lorem ipsun dollor </p>
        </div>
    )
}