import styles from '../../styles/create-schema/CreateSchema.module.scss'
export default function Body(){
    return(
        <nav className={styles.body}>
            <h1>Crie novos esquemas para enganar muitas pessoas</h1>
            <div>
            <form>
                    <input placeholder='Nome do esquema'></input>
                    <input placeholder='Descrição do esquema'></input>
                    <input type={'number'} placeholder='Valor mínimo'></input>
                    <button type='submit'>Criar</button>
                </form>
            </div>
        </nav>
    )
}