import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/enter-schema/EnterSchema.module.scss'
export default function Title(props){
    return(
        <div className={styles.title}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <Image width='200' height='200'  src={'/images/giphy.gif'}></Image>
            <Link href="/test"><a className={styles.button}>Entrar no esquema</a></Link>
        </div>
    )
}