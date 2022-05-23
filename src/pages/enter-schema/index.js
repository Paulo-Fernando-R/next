import styles from '../../styles/enter-schema/EnterSchema.module.scss'
import Title from '../../components/enter-schema/title'
import List from '../../components/enter-schema/list'
export default function EnterSchema(){

    const arr = [
        {id:1},
        {id:2},
        {id:3}
    ]

    return(
        <div className={styles.body}>
            <Title/>


            
            <div className={styles.list}>
                <h3>Pessoas cadastradas no esquema</h3>
                {arr.map(() => {
                    return(
                        <List/>
                    )
                })}
            </div>
            
        </div>
    )
}