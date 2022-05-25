import { NextPage } from 'next';
import styles from '../../styles/enter-schema/EnterSchema.module.scss'
import Title from '../../components/enter-schema/title'
import List from '../../components/enter-schema/list'
import { useRouter } from 'next/router'

export default function EnterSchema(){

   /* const router = useRouter();
    const {
        query: { id, name, description },
    } = router;
    const props = {
        id,
        name, 
        description,
    };*/

    const arr = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6}
    ]

    const router = useRouter()
    const {
        query: {name, description},
    } = router
    return(
        <div className={styles.body}>
            <Title/>
            <h1>{name}aqui{description}</h1>


            
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

/*EnterSchema.getInitialProps = ({query: {name}}) =>{
    return {name}
}*/