import styles from '../../styles/enter-schema/EnterSchema.module.scss'
export default function List(props){
    return(
        <div className={styles.listItem}>
            <h2>{props.name}</h2>
        </div>
    )
}