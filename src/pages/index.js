import styles from '../styles/home/Home.module.scss'
import Logo from '../components/main/logo'
import {parseCookie} from "../helpers/"
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';

export default function Home({data}) {
  setCookies('test', 'null');
  return (
    <div className={styles.container}>
     
      <Logo></Logo>
    </div>
  )
}

/*Home.getInitialProps = async ({req, res}) => {
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

/*export const getServerSideProps = ( { req, res } ) => {
  setCookies('test', 'null', { req, res, path:'/' });
  return { props: {} };
}*/