import styles from './header.module.css'
import { Link } from 'react-router-dom';

function header(){

    return(
        <>
            <header className={styles.header}>
              
              <ul>
                <li>
                    <Link to='/Nao_feitas' className={styles.link} >Não feitas</Link>
                </li>

                <li>
                    <Link to='/Fazendo' className={styles.link} >Fazendo</Link>
                </li>

                <li>
                    <Link to='concluidas' className={styles.link}>concluídas</Link>
                </li>

              </ul>
        
            </header>
        </>
           
    )
}

export default header;