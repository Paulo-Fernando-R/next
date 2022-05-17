import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from '../../styles/layout/Content.module.scss'

export default function MainContainer({children}){
    return(
        <>
            <NavBar/>
            <div className={styles.content}>{children}</div>
            <Footer/>
        </>
    )
}