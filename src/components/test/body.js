import Card from "./card"
import styles from '../../styles/test/Body.module.scss'
export default function Body(){

    const arr = [
        {id:1},
        {id:2},
        {id:3}
    ]
    
    return(
        <nav className={styles.body}>
            <h2>dfdfdfdffdfd</h2>
            {arr.map(() => {
                return(
                    <Card/>
                );
              
            })}
        </nav>
    )
}