import Link from "next/dist/client/link"
import { useEffect, useState } from "react";
import styles from '../../../styles/extra/Extra.module.scss';

export default function Suplier(){

    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [suppliers, setSuppliers] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault()
    
        const data = {
            name: event.target.name.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
            id: id
        }
    
        const JSONdata = JSON.stringify(data)
    
        const endpoint = 'http://localhost/web2-api/Routes/Supplier/AddAlterSupplier.php'
        const options = {

          method: 'POST',
          headers: {
            'Content-Type': 'application/json',

          },
          body: JSONdata,
        }
        const response = await fetch(endpoint, options)

        const result = await response.json()

        if(result.status == 'errorInput')
        {
            alert(`Algo de errado não está certo com o que foi digitado. Tente novamente!`)
            return;
        }
        else if(result.status == 'errorUpdate')
        {
            alert(`Não foi possível aterar o fornecedor para ${name}`)
            return;
        }
        else if(result.status == 'exception')
        {
            alert(`Algo deu errado no processo. Tente novamente!`)
            return;
        }
        else if(result.status == 'errorAdd')
        {
            alert(`Não foi possível adicionar o fornecedor ${name}`)
            return;
        }
        else if(result.status == 'okUpdate')
        {
            alert(`O fornecedor ${name} foi alterado com sucesso.`)
            setId(null);
            setName('');
            setAddress('');
            setPhone('');
            return;
        }
        else if(result.status == 'ok')
        {
            alert(`O fornecedor ${name} foi adicionado com sucesso.`)
            setId(null);
            setName('');
            setAddress('');
            setPhone('');
            return;
        }
      }

      useEffect(()=>{
        const data = fetch(`http://localhost/web2-api/Routes/Supplier/getSuppliers.php`)
        .then((res) => res.json())
        .then((data) => {
            setSuppliers(data);
        })
      }, [suppliers])

    return(
        <div className={styles.supBack}>

            <div>
                <h1>Entre com os dados </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        name='name' 
                        id='name' 
                        required 
                        placeholder='Nome do fornecedor'
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    ></input>
                    <input
                        name='address' 
                        id='address' 
                        required 
                        placeholder='Endereço'
                        value={address}
                        onChange={(e)=>{setAddress(e.target.value)}}
                    ></input>
                    <input
                        type={"number"}
                        name='phone' 
                        id='phone' 
                        required 
                        placeholder='Telefone'
                        value={phone}
                        onChange={(e)=>{setPhone(e.target.value)}}
                    ></input>
                    <button type="submit">Enviar</button>
                </form>

            </div>

            <div className={styles.list}>

                <h1>Lista de Fornecedores</h1>

                <div className={styles.listTitle}>
                    <h2>Nome</h2>
                    <h2>Endereço</h2>
                    <h2>Telefone</h2>
                </div>

                { suppliers != null?

                    suppliers.map((item) => {
                        return(
                            <div 
                                key={item}

                                onClick={(e)=>{
                                    setId(item.id)
                                    setName(item.name)
                                    setAddress(item.address)
                                    setPhone(item.phone)
                                }}

                                className={styles.listItem}
                            >
                                
                                <h2 id="name">{item.name}</h2>
                                <h2 id="id">{item.address}</h2>
                                <h2 id="name">{item.phone}</h2>

                            </div>
                        )
                    })
                    :
                    <></>
                }
            </div>
        </div>
    )
}