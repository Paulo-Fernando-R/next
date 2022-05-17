import Card from "./card"
import styles from '../../styles/test/Body.module.scss'
export default function Body(){
    return(
        <nav className={styles.body}>
            <Card/>
        </nav>
    )
}