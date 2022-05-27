import Image from 'next/image'
import styles from '../../styles/signup/SignUp.module.scss'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
import Link from 'next'
import { useRouter } from 'next/router'

export default function Login() {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const router =  useRouter()

    const [cookie, setCookie] = useCookies(['user'])

    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Get data from the form.
        const data = {
          username: event.target.username.value,
          password: event.target.password.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
        
        // API endpoint where we send form data.
        const endpoint = 'http://localhost/web2-api/Routes/User/Login.php'
    
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
        if(result.status == 'notFound')
        {
            alert(`Usuário não encontrado`)
            return;
        }

        setCookie("user", result),{
            path:"/",
            maxAge:3600,
            sameSite: true,
        }
        router.push({
            pathname:'/'
        })
      }
      
    return(
        <nav className={styles.box}>
            <div>
                <Image width='150' height='150'  src={'/images/dry-clean.png'}/>
                <Image width='200' height='200'  src={'/images/bleach.png'}/>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Faça login</h1>
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
                    <a href='/signup'>Clique aqui se ainda não tem cadastro</a>
                </form>
            </div>
        </nav>
        
    )
}