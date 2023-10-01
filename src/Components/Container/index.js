/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import styles from './container.module.css';
import Tasks from '../Tasks';
import { v4 as uuidv4 } from 'uuid';



function container({title,initStatus,edit}){
const ELEMENT_REMOVE_TASKS =1;


    const [mgs,setMgs] =useState("") ;


    const [tasks,setTasks] = useState([
        {
            id:uuidv4(),
            task:" pão",
            status:1,
        },
        {
            id:uuidv4(),
            task:"Comprar pão",
            status:2,
        },
        {
            id:uuidv4(),
            task:"Comprar ",
            status:3,
        }
    ]);
  
    const valication= (value)=>{
        value? setTasks([...tasks,{id:uuidv4() ,task:mgs,status:initStatus}])
        :alert("invalido");
    }

 
   const remove=(e)=>{
        const parent=e.target;
        const getTask = parent.parentNode.parentNode
        .querySelector("p").textContent;

        const getTaskByID =  tasks.findIndex(x => x.task ===getTask)

        tasks.splice(getTaskByID,ELEMENT_REMOVE_TASKS);
        setTasks([...tasks])
    
    }

    const Update = ()=>{
        
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
                            <button type="reset" >X</button>
                        </div>
                </form>

            <article>   
            <h2>{title}</h2>  
 
               {
                    tasks.map(e => 
                        <Tasks
                            statusTask={initStatus}
                            status={e.status}
                            key={e.id}
                            id={e.id}
                            task={e.task}
                            remove={remove}
                            edit={edit}
                        />

                    )  
               }
            </article>


           </section>
        </>
    )
}

export default container;