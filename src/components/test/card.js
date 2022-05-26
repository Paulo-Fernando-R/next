import Image from 'next/image'
import styles from '../../styles/test/card.module.scss'
import Link from 'next/link'
import Router from 'next/router'

export default function Card(props){

    return(
        <div className={styles.card}>
            <Image height='300' width='300' src='/images/gota-de-sangue.png'/>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <div>
                <h2>Valor mínimo: ${props.minValue}</h2>
                
                <Link  href={{
                    pathname: '/enter-schema',
                    query: {
                        name: props.name,
                        description: props.description,
                        id: props.id
                    }

                }}><a>Entrar</a></Link>
            </div>
        </div>
    )
}