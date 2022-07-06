import Card from "./card"
import styles from '../../styles/test/Body.module.scss'
import { useContext, useState } from "react";
import Link from "next/link";
//<a href="/create-schema">Criar novo esquema</a>
export default function Body(props){

    return(
        <nav className={styles.body}>
            <div className={styles.new}>
                <Link href={'/create-schema'}><a>Criar novo esquema</a></Link>
               
            </div>
            {props.schemas !=null ?(
                props.schemas.map((schema) => {
                return(
                    <Card 
                        key={schema.id} 
                        id = {schema.id}
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