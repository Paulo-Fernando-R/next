import Image from 'next/image'
import styles from '../../styles/signup/SignUp.module.scss'

export default function SignUp() {
    return(
        <nav className={styles.box}>
            <div>
                <Image width='150' height='150'  src={'/images/dry-clean.png'}/>
                <Image width='200' height='200'  src={'/images/bleach.png'}/>
            </div>
            <div>
                <form>
                    <h1>Inscreva-se</h1>
                    <input placeholder='Nome de usuário'></input>
                    <input type={'password'} placeholder='Senha'></input>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </nav>
        
    )
}