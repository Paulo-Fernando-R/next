import Head from 'next/head'
import Image from 'next/image'
import Body from '../../components/test/body'

export async function getStaticProps(){
  try{
    const data = await fetch('http://localhost/web2-api/Routes/Schema/GetSchemas.php')
    const schemas = await await data.json()

    return{
      props: { schemas },

    }
  }
  catch(ex){
    const schemas = null
    return {
      props: {schemas},
    }
  }
  
}

export default function Schemas({ schemas }) {
  return (

    <>
      <Head>
        <title>Principal</title>
        <meta name='keywords' content='Roupas, Calçados, Boné'></meta>
      </Head>
      
       <Body schemas={schemas}/>
  
    </>
   

    
  )}
