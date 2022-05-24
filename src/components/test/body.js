import Card from "./card"
import styles from '../../styles/test/Body.module.scss'
export default function Body(props){

    /*const arr = [
        {id:1},
        {id:2},
        {id:3}
    ]*/
    
    return(
        <nav className={styles.body}>
            <div className={styles.new}>
                <a href="/create-schema">Criar novo esquema</a>
            </div>
            {props.schemas !=null ?(
                props.schemas.map((schema) => {
                return(
                    <Card 
                        key={schema.id} 
                        name={schema.name}
                        description={schema.description}
                        minValue={schema.minvalue}
                        />
                );
            }) 
            ):<></>}
        </nav>
    )
}