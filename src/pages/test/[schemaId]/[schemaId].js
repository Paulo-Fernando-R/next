import Link from "next/link";
export async function getStaticProps(context){
    const { params } = context

    const data = await fetch(`http://localhost/web2-api/Routes/Schema/GetSchemas.php/${params.schemaId}`,
    )
    const schema = await data.json()
    return{
        props:{ schema },
    }
}

export async function getStaticPaths(){
    const response = await fetch(`http://localhost/web2-api/Routes/Schema/GetSchemas.php/`)
    const data = await response.json()

    const paths = data.map((schema) => {
        return{
            params: {
                schemaId: `${schema.id}`,
            },
        }
    })

    return { paths, fallback: false }
}

export default function Schema({schema}){

    return(
        <>
            <Link href={'/test'}><a>Voltar</a></Link>
            <h1>essa parada {schema.id}</h1>
            <p>aaaaaaa<Link href={`/test/${schema.id}/coments/1`}><a>detalhes</a></Link></p>
        
  
        </>
    )
}