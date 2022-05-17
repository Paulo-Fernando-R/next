import Image from 'next/image'
export default function Card(){
    return(
        <div className="card">
             <Image height='50' width='50' src='/images/Gull_portrait_ca_usa.jpg'/>
        </div>
    )
}