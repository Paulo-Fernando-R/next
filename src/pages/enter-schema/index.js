import { NextPage } from 'next';
import styles from '../../styles/enter-schema/EnterSchema.module.scss'
import Title from '../../components/enter-schema/title'
import List from '../../components/enter-schema/list'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useState } from 'react';
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';

export default function EnterSchema(){

    const router = useRouter()
    const {
        query: {name, description, id},
    } = router

    const [users, setUsers] = useState([])
    const [ids, setIds] = useState()
    const [names, setnames] = useState()
    const [descriptions, setDescriptions] = useState()
    const user = getCookie('idUser');


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
        })
        
    }, [ids]);

    return(
        <div className={styles.body}>

           <Title 
                name={names} 
                description={descriptions}
                idSchema={ids}
                idUser={user}

            />
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