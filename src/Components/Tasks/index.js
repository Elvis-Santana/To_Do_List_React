import styles from './tasks.module.css';

function tasks({t,s}){
    return(
        <div  className={styles.tasks} key={t}>
            <p>{t}</p>

            <div>
                <button>E</button>
                <button onClick={(e)=> s(e)}>X</button>
                
            </div>

       
          
        </div> 
    )

}

export default tasks;