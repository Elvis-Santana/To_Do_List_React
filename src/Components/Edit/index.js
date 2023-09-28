import styles from './Edit.module.css'

function Edit({felhar}){
    return(
        <div className={styles.edit}>
            <form>

                <input type="text"/>
                

                <button type="submit" onClick={(e)=>{
                    e.preventDefault();
                    felhar()
                }}>Enter</button>

            </form>
          
        </div>
    )
}

export default Edit