import styles from './tasks.module.css';

function tasks({task,remove}){
    return(
        <div  className={styles.tasks} key={task}>
            <p>{task}</p>

            <div>
                <button>E</button>
                <button onClick={(e)=> remove(e)}>X</button>
                
            </div>

       
          
        </div> 
    )

}

export default tasks;