import { NextPage } from 'next';
import styles from '../../styles/enter-schema/EnterSchema.module.scss'
import Title from '../../components/enter-schema/title'
import List from '../../components/enter-schema/list'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useState } from 'react';
import {parseCookie} from "../../helpers/index"
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';

/*EnterSchema.getInitialProps = ({ query: { name, description, id } }) => {
    if(name != null || description != null || id != null)
        return { name, description, id }
  }*/
  

export default function EnterSchema(){

    const router = useRouter()
    const {
        query: {name, description, id},
    } = router

    const [users, setUsers] = useState([])
    const [ids, setIds] = useState()
    const [names, setnames] = useState()
    const [descriptions, setDescriptions] = useState()
    const user = getCookie('user');


    function verifyInfos(){
        if(name != null || description != null || id != null)
        {
            setCookies('idSchema', id);
            setCookies('nameSchema', name);
            setCookies('descriptionSchema', description);
            setIds(id);
            setnames(name);
            setDescriptions(description);
            return;
        }
         
        setIds(getCookie('idSchema'));
        setnames(getCookie('nameSchema'));
        setDescriptions(getCookie('descriptionSchema'));
    }

    useEffect(() => {
        verifyInfos()
        const data = fetch(`http://localhost/web2-api/Routes/User/GetUsersbySchema.php?id=${ids}`)
        .then((res) => res.json())
        .then((data) => {
            setUsers(data)
            console.log(ids)
        })
        
    }, [ids]);

    return(
        <div className={styles.body}>

           <Title name={names} description={descriptions}/>
            <h1>{ids}</h1>
            <div className={styles.list}>

                {
                    users.length? (users.map((user) => {
                    return(
                        <List key={user.id} name={user.name}/>
                    )}))
                    
                    :<h2>Ninguém participa desse esquema ainda,  seja o primeiro!</h2>
                }
            </div>
            
        </div>
    )
}

/*EnterSchema.getInitialProps = async ({req, res}) => {
    const data = parseCookie(req)
  
    if (res) {
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        res.writeHead(301, { Location: "/" })
        res.end()
      }
    }
  
    return {
      data: data && data,
    }
  }*/

  /*export const getServerSideProps = ({ req, res }) => {
      const data = getCookie('test', { req, res });
      return {props:{data}}
  }*/