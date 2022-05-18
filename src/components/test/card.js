import Image from 'next/image'
import styles from '../../styles/test/card.module.scss'
export default function Card(){
    return(
        <div className={styles.card}>
            <Image height='300' width='300' src='/images/gota-de-sangue.png'/>
            <p>Esquema de venda de criptomoedas usando a imagem de pessoas inexplicavelmente famosas </p>
            <div>
                <h2>Valor mínimo: R$2000,00</h2>
                <a href='/enter-schema'>Entrar</a>
            </div>
        </div>
    )
}