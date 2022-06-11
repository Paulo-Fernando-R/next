import Image from 'next/image'
import styles from '../../styles/signup/SignUp.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/router'
export default function SignUp() {
    
    const router = useRouter()
    const [name, setName] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Get data from the form.
        const data = {
          name: event.target.name.value,
          username: event.target.username.value,
          password: event.target.password.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
        
        // API endpoint where we send form data.
        const endpoint = 'http://localhost/web2-api/Routes/User/AddUser.php'
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
            /*'name': `${data.name}`,
            'username': `${data.username}`,
            'password': `${data.password}`*/

          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }
    
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        if(result.status == 'ok')
        {
            alert(`Usuário: ${event.target.name.value} cadastrado com sucesso!`)
            setName('')
            setUserName('')
            setPassword('')

            router.push({
                pathname:'/login'
            })
        }
        else if(result.status == 'errorInput')
        {
            alert(`Algo de errado não está certo com o que foi digitado. Tente novamente!`)
        }
        else if(result.status == 'errorAdd')
        {
            alert(`Erro interno ao adicionar usuário. Tente novamente!`)
        }
        else if(result.status == 'preexistent')
        {
            alert('Este nome de usuária já está sendo usado. Tente outro!')
        }

        
      }

    return(
        <nav className={styles.box}>
            <div>
                <Image width='150' height='150'  src={'/images/dry-clean.png'}/>
                <Image width='200' height='200'  src={'/images/bleach.png'}/>
            </div>
            <div>
                <form  onSubmit={handleSubmit}>
                    <h1>Inscreva-se</h1>
                    <input name='name' 
                    id='name' 
                    required 
                    placeholder='Nome'
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    ></input>

                    <input name='username' 
                    id='username' 
                    required 
                    placeholder='Nome de usuário'
                    value={username}
                    onChange={(e)=>{setUserName(e.target.value)}}
                    ></input>

                    <input name='password' 
                    id='password' 
                    required 
                    type={'password'} 
                    placeholder='Senha'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    ></input>

                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </nav>
        
    )
}