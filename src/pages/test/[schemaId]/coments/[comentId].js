import Link from "next/link";
import { useRouter } from "next/router";
export default function Coment(){

    const router = useRouter()

    const id = router.query.schemaId
    const id2 = router.query.comentId
    return(
        <>
            <Link href={`/test/${id}`}><a>Voltar</a></Link>
            <h1>essa parada {id}</h1>
            <h1>essa parada nova {id2}</h1>
           
        </>
    )
}