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
    <div className={styles.inpText}>
      <input type="text" placeholder='Placeholder'/>
    </div>
    <div className={styles.emojis}>

      <div className={styles.card}>
        <div className={styles.icon}>💯</div>
        <div className={styles.emName}>100</div>
        <div className={styles.emDiscr}>Hundred, points, symbol, wow, win, perfect, parties</div>  
      </div>

      <div className={styles.card}>
        <div className={styles.inCard}>
            <div className={styles.icon}>🔢</div>
            <div className={styles.emName}>1234</div>
            <div className={styles.emDiscr}>input symbol for numbers symbol</div>
        </div>

      </div>  

      <div className={styles.card}>
        <div className={styles.icon}>🔢</div>
        <div className={styles.emName}>1234</div>
        <div className={styles.emDiscr}>input symbol for numbers symbol</div>  
      </div>

    </div>
    </>
  )
}

export default App