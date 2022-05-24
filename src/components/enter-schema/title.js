import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/enter-schema/EnterSchema.module.scss'
export default function Title(){
    return(
        <div className={styles.title}>
            <h2>Esquema tal</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque 
                convallis urna non eros consectetur malesuada. Suspendisse potenti. 
                Morbi non quam viverra, fringilla magna bibendum, dapibus leo. Mauris 
                eget dolor in mi porta aliquam. Nam ultricies in tortor ac tristique.
                Aliquam aliquam tellus non rhoncus eleifend. Praesent eu mauris justo. 
                Suspendisse sagittis lectus non enim vestibulum, a tempor mauris
                eleifend. Nulla a convallis tellus. Suspendisse quis odio vel ipsum 
                dapibus tempor porta a justo. Praesent mattis neque vitae nulla 
                condimentum, in laoreet nunc aliquam. Vestibulum sed pretium lacus.
            </p>
            <Image width='200' height='200'  src={'/images/giphy.gif'}></Image>
            <Link href="/test"><a className={styles.button}>Entrar no esquema</a></Link>
        </div>
    )
}