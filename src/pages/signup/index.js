import Image from 'next/image'
import styles from '../../styles/signup/SignUp.module.scss'

export default function SignUp() {

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
        alert(JSONdata)
    
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
        alert(`Is this your full name: ${result.status}`)
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
                    <input name='name' id='name' required placeholder='Nome'></input>
                    <input name='username' id='username' required placeholder='Nome de usuário'></input>
                    <input name='password' id='password' required type={'password'} placeholder='Senha'></input>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </nav>
        
    )
}