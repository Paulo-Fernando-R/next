import Link from "next/dist/client/link"
import { useEffect, useState } from "react";
import styles from '../../../styles/extra/Extra.module.scss';

export default function Product(){

    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [products, setProducts] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault()

        var noComma;
        if(event.target.value.value.includes(',')){
            noComma = event.target.value.value.replace(/,/i, '.');
        }
        else{
            noComma=event.target.value.value;
        }
    
        const data = {
            name: event.target.name.value,
            value: noComma,
            id: id
        }
    
        const JSONdata = JSON.stringify(data)
    
        const endpoint = 'http://localhost/web2-api/Routes/Product/AddAlterProduct.php'
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
            alert(`Não foi possível aterar o produto para ${name}`)
            return;
        }
        else if(result.status == 'exception')
        {
            alert(`Algo deu errado no processo. Tente novamente!`)
            return;
        }
        else if(result.status == 'errorAdd')
        {
            alert(`Não foi possível adicionar o produto ${name}`)
            return;
        }
        else if(result.status == 'okUpdate')
        {
            alert(`O produto ${name} foi alterado com sucesso.`)
            setId(null);
            setName('');
            setValue('');
            return;
        }
        else if(result.status == 'ok')
        {
            alert(`O produto ${name} foi adicionado com sucesso.`)
            setId(null);
            setName('');
            setValue('');
            return;
        }
      }

      useEffect(()=>{
        const data = fetch(`http://localhost/web2-api/Routes/Product/GetProducts.php`)
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
        })
      }, [products])


      return(
        <div className={styles.supBack}>

            <div>
                <h1>Entre com os dados </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        name='name' 
                        id='name' 
                        required 
                        placeholder='Nome do produto'
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    ></input>
                    <input
                        name='value' 
                        id='value' 
                        required 
                        placeholder='Preço'
                        value={value}
                        onChange={(e)=>{setValue(e.target.value)}}
                    ></input>
                    <button type="submit">Enviar</button>
                </form>

            </div>

            <div className={styles.list}>

                <h1>Lista de Produtos</h1>

                <div className={styles.listTitle}>
                    <h2>Código</h2>
                    <h2>Nome</h2>
                    <h2>Preço</h2>
                </div>

                { products != null?

                    products.map((item) => {
                        return(
                            <div 
                                key={item.id}

                                onClick={(e)=>{
                                    setId(item.id)
                                    setName(item.name)
                                    setValue(item.value)
                                }}

                                className={styles.listItem}
                            >
                                <h2 id="id">{item.id}</h2>
                                <h2 id="name">{item.name}</h2>
                                <h2 id="value">{item.value}</h2>

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