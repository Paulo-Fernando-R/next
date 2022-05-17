import Head from 'next/head'
import Image from 'next/image'
import Body from '../../components/test/body'

export default function Home() {
  return (

    <>
      <Head>
        <title>Principal</title>
        <meta name='keywords' content='Roupas, Calçados, Boné'></meta>
      </Head>

      <div className='back'>
       <Body/>
      </div>
    </>
   

    
  )}
