import Image from 'next/image'
import styles from '../../styles/test/card.module.scss'
import Link from 'next/link'
import Router from 'next/router'

export default function Card(props){

   /* const id = props.key
    const name = props.name
    const description = props.description

    function sendProps(){
        Router.push({
            pathname: "/enter-schema",
            query: {
                id,
                name,
                description,
                
            },
            
        })
    }*/


/*<Link href={{
                    pathname: '/enter-schema',
                    query: {name: props.name}

                }}><a>Entrar</a></Link>
                
                <a onClick={() => sendProps()}>Entrar</a>
                */


    return(
        <div className={styles.card}>
            <Image height='300' width='300' src='/images/gota-de-sangue.png'/>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <div>
                <h2>Valor mínimo: ${props.minValue}</h2>
                
                <Link as={'/enter-schema'} href={{
                    pathname: '/enter-schema',
                    query: {
                        name: props.name,
                        description: props.description
                    }

                }}><a>Entrar</a></Link>
            </div>
        </div>
    )
}