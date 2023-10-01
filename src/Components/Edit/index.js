import { useState } from 'react';
import styles from './Edit.module.css'

function Edit({felhar,text}){

    const [textLocal,setTextLocal] = useState(text)
    return(
        <div className={styles.edit}>
            <form>

                <input type="text"  onChange={(e)=> setTextLocal(e.target.value)}  value={textLocal}/>
                
                <button type="submit" onClick={(e)=>{
                    e.preventDefault();
                }}>Enter</button>

                <button type="submit" onClick={(e)=>{
                    e.preventDefault();
                    felhar()
                }}>X</button>

             

            </form>
          
        </div>
    )
}

export default Edit