import styles from '../../styles/layout/Footer.module.scss'
import Link from 'next/link'
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <Link href={'/extra'}><a>Páginas extras</a></Link>
            <div>
                <p className={styles.text}>
                    O Schema é um site para você que tem meios duvidosos para entrar em coisas interessantes e legais,
                    saiba que é muito bem vindo. Lembre-se, estamos procurando o Messi Agiota, ele deixou meu gato calvo. Obrigado
                    - Viva como se fosse morrer, porque você vai.
                </p>
            </div>
           
        </footer>
    )
}