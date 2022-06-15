import Link from "next/dist/client/link"
import styles from '../../styles/extra/Extra.module.scss';
export default function Extra(){
    return(
        <div className={styles.back}>
            <div>
                <h1>Produtos</h1>
                <Link href={'/extra/product'}><a>Continuar</a></Link>
                
            </div>
            <div>
                <h1>Fornecedores</h1>
                <Link href={'/extra/suplier'}><a>Continuar</a></Link>
            </div>
        </div>
    )
}