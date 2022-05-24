import Image from 'next/image'
import styles from '../../styles/test/card.module.scss'
export default function Card(props){
    return(
        <div className={styles.card}>
            <Image height='300' width='300' src='/images/gota-de-sangue.png'/>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <div>
                <h2>Valor mínimo: ${props.minValue}</h2>
                <a href='/enter-schema'>Entrar</a>
            </div>
        </div>
    )
}