/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import styles from './container.module.css';
import Tasks from '../Tasks';


function container(){

    const [mgs,setMgs] =useState("") ;


    const [tasks,setTasks] = useState([ {
        id:0,
        task:"Comprar pão"
    }]);
  
    const valication= (value)=>{
        value? setTasks([...tasks,{id:tasks.length ,task:mgs}])
        :alert("invalido");
    }

   const remove=(e)=>{
        const parent=e.target;
        const getTask = parent.parentNode.parentNode
        .querySelector("p").textContent;

       const getTaskByID =  tasks.findIndex(x => x.task ===getTask)

        tasks.splice(getTaskByID,1);
        setTasks([...tasks])
            
    }


    return(
        <>
        

           <section className={styles.card}>
                <form >
                        <input 
                            type="text"
                            required
                            onChange={(e)=>{
                                setMgs(e.target.value)
                            }}
                          
                        />
                        <div>
                            <button type="submit" onClick={(e)=>{
                                e.preventDefault();
                                valication(mgs)

                            }}>Enter</button>
                            <button type="reset">X</button>
                        </div>
                </form>

            <article>      
               {

                tasks.map(e =>
                    <Tasks
                        key={e.id}
                        t={e.task}
                        s={remove}
                    />
                )  
               }
            </article>


           </section>
        </>
    )
}

export default container;