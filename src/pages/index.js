import styles from '../styles/home/Home.module.scss'
import Logo from '../components/main/logo'
import {parseCookie} from "../helpers/"

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <h1>{data.user}</h1>
      <Logo></Logo>
    </div>
  )
}

Home.getInitialProps = async ({req, res}) => {
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