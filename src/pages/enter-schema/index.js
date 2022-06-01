import { NextPage } from 'next';
import styles from '../../styles/enter-schema/EnterSchema.module.scss'
import Title from '../../components/enter-schema/title'
import List from '../../components/enter-schema/list'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useState } from 'react';
import {parseCookie} from "../../helpers/index"

export default function EnterSchema({data}){

    const router = useRouter()
    const {
        query: {name, description, id},
    } = router

    const [users, setUsers] = useState([])
    const [ids, setIds] = useState(id)

    useEffect(() => {
        if(ids == null || ids == undefined)
        {
            setIds(0)
            return;
        }
        const data = fetch(`http://localhost/web2-api/Routes/User/GetUsersbySchema.php?id=${ids}`)
        .then((res) => res.json())
        .then((data) => {
            setUsers(data)
            setIds(id)
        })
        
    }, [ids]);

    return(
        <div className={styles.body}>
           <Title name={name} description={description}/>
            <h1>{data.user}</h1>
        <div className={styles.list}>
            {users.length? (users.map((user) => {
            return(
                <List key={user.id} name={user.name}/>
            )
    }))
    :<h2>Ninguém participa desse esquema ainda,  seja o primeiro!</h2>
    }
</div>
            
        </div>
    )
}

EnterSchema.getInitialProps = async ({req, res}) => {
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
  }