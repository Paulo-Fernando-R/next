import styles from '../../styles/create-schema/CreateSchema.module.scss'
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
export default function Body(){

    const router = useRouter()
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [minValue, setMinValue] = useState('');

    function verifyLogin(){

        if(getCookie('idUser') == null){
            alert('Faça login antes!');
            router.push({
                pathname:'/login',
            })
        }
    }
    
    useEffect(()=>{
        verifyLogin();
    },[])

    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Get data from the form.
        const data = {
          name: event.target.name.value,
          description: event.target.description.value,
          minValue: event.target.minValue.value,
          idUser: getCookie('idUser'),
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
        
        // API endpoint where we send form data.
        const endpoint = 'http://localhost/web2-api/Routes/Schema/AddSchema.php'
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',

          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }
    
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()

        if(result.status == 'errorInput')
        {
            alert(`Algo de errado não está certo com o que foi digitado. Tente novamente!`)
            return;
        }
        else if(result.status == 'errorAdd')
        {
            alert(`Não foi possível cadastrar este Schema. Tente novamente!`)
            return;
        }
        else if(result.status == 'exception')
        {
            alert(`Erro interno. Tente novamente!`)
            return;
        }
        //await setTimeout(()=>{router.reload()},100)
        alert(`Schema: ${name} cadastrado com sucesso!`);
        router.push({
            pathname:'/test',
        })
        
      }

    return(
        <nav className={styles.body}>
            <h1>Crie novos esquemas para enganar muitas pessoas</h1>
            <div>
            <form onSubmit={handleSubmit}>
                    <input 
                        id='name' 
                        name='name' 
                        placeholder='Nome do esquema'
                        required
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    ></input>

                    <input 
                        id='ninValue' 
                        name='minValue'  
                        type={'number'} 
                        placeholder='Valor mínimo'
                        required
                        value={minValue}
                        onChange={(e)=>{setMinValue(e.target.value)}}
                    ></input>

                    <textarea 
                        className={styles.desc} 
                        id='description' 
                        name='description' 
                        type={'textarea'} 
                        placeholder='Descrição do esquema'
                        required
                        value={desc}
                        onChange={(e)=>{setDesc(e.target.value)}}
                    ></textarea>

                    <button type='submit'>Criar</button>
                </form>
            </div>
        </nav>
    )
}