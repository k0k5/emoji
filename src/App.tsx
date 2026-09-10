import styles from './App.module.css'

function App(){
  return(
    <>
    <div className={styles.header}>  
      <div className={styles.textsInH}>
        <div className={styles.bigText}> Emoji Finder</div>
        <div className={styles.smallText}>Find emoji by keywords</div>
      </div>
      
    </div>
    </>
  )
}

export default App


// header 295
// текст заголовок - 72пх
// маленький текст 21пх
// плейсхолдер 64 820