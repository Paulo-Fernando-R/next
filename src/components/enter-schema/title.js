import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/enter-schema/EnterSchema.module.scss'
import { useRouter } from 'next/router'
export default function Title(props){

    const router =  useRouter()

    async function enterSchema () {

        if(props.idUser == null || props.idSchema == null){
            alert('Você será redirecionado para a tela de login.');
            router.push({
                pathname:'/login',
                
            })  
            return;
        }
        const data = {
            idUser: props.idUser,
            idSchema: props.idSchema,
        }

         const JSONdata = JSON.stringify(data)
        
         const endpoint = 'http://localhost/web2-api/Routes/Schema/AddUserInSchema.php'
     
         const options = {

           method: 'POST',

           headers: {
             'Content-Type': 'application/json',
 
           },
           body: JSONdata,
         }
    
         const response = await fetch(endpoint, options)
    
         const result = await response.json()

        if(result.status == 'ok')
        {
            alert(`Parabéns! Você se cadastrou no schema: ${props.name}`)
           
            router.push({
                pathname:'/test'
            })
        }
        else if(result.status == 'errorInput')
        {
            alert(`Tente novamente!`)
        }
        else if(result.status == 'errorAdd')
        {
            alert(`Erro interno ao adicionar usuário. Tente novamente!`)
        }
        else if(result.status == 'preexistent')
        {
            alert('Você já está cadastrado neste schema!')
        }
    }

    async function outSchema(){

        const data = {
            idUser: props.idUser,
            idSchema: props.idSchema,
        }

         const JSONdata = JSON.stringify(data)
        
         const endpoint = 'http://localhost/web2-api/Routes/Schema/RemoveUserFromSchema.php'
     
         const options = {

           method: 'POST',

           headers: {
             'Content-Type': 'application/json',
 
           },
           body: JSONdata,
         }
    
         const response = await fetch(endpoint, options)
    
         const result = await response.json()

        if(result.status == 'ok')
        {
            alert(`Você saiu do schema: ${props.name}`)
           
            router.push({
                pathname:'/test'
            })
        }
        else if(result.status == 'errorInput')
        {
            alert(`Algo de errado não está certo com o que foi digitado. Tente novamente!`)
        }
        else if(result.status == 'errorRemove')
        {
            alert(`Erro interno ao remover usuário. Tente novamente!`)
        }
        else if(result.status == 'nonExistent')
        {
            alert('Você não está cadastrado neste schema!')
        }
    }

    return(
        <div className={styles.title}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <Image width='200' height='200'  src={'/images/giphy.gif'}></Image>
            
            {
                props.participate?
                <a onClick={outSchema} className={styles.button}>Sair do esquema</a>
                :
                <a onClick={enterSchema} className={styles.button}>Entrar no esquema</a>
            }
        </div>
    )
}