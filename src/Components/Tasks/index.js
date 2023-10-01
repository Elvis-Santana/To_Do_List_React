import styles from './tasks.module.css';

function tasks({task,remove, statusTask,status,id,edit}){
    return(
     <>
        {
            statusTask===status? 
                <div  
                    className={styles.tasks} key={task}>
                    <p>{task}</p>

                    <input className='_id' type='hidden' value={id}/>

                    <div>
                        <button onClick={(e)=> edit(e)}>E</button>
                        <button onClick={(e)=> remove(e)}>X</button>
                        
                    </div>  
                </div> 
            :null
       }
     
     </>
    );

}

export default tasks;