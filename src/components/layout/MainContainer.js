import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from '../../styles/layout/Content.module.scss'
import {parseCookie} from "../../helpers/"

export default function MainContainer({children}, {data}){
    return(
        <>
       <h1>{data}</h1>
            <NavBar/>
            <div className={styles.content}>{children}</div>
            <Footer/>
        </>
    )
}

MainContainer.getServersideProps = async ({req, res}) => {
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