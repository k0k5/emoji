import { useState, useEffect } from 'react';
import styles from './App.module.css';
import { getEmojis, type IEmojiItem } from './api/emojiApi';


function App() {
  const [emojis, setEmojis] = useState<IEmojiItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setEmojis([]);
      return;
    }

    const timerId = setTimeout(() => {
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const data = await getEmojis(searchTerm);
          setEmojis(data);
        } catch (err) {
          setError('Не удалось загрузить данные. Проверьте, запущен ли сервер (start.bat).');
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.textsInH}>
          <div className={styles.bigText}> Emoji Finder</div>
          <div className={styles.smallText}>Find emoji by keywords</div>
        </div>
      </div>

      <div className={styles.inpText}>
        <input
          type="text"
          placeholder="Placeholder"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && (
        <div style={{ textAlign: 'center', padding: '20px', fontSize: '18px', color: '#666' }}>
          Загрузка эмодзи...
        </div>
      )}

      {error && (
        <div style={{ textAlign: 'center', padding: '20px', color: 'red', fontWeight: 'bold' }}>
          {error}
        </div>
      )}

      <div className={styles.emojis}>
        {!loading && !error && emojis.length === 0 && searchTerm && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '18px', color: '#666' }}>
            Эмодзи не найдены
          </div>
        )}

        {!loading && !error && emojis.map((emoji) => (
          <div key={emoji.id} className={styles.card}>
            <div className={styles.inCard}>
              <div className={styles.icon}>{emoji.emoji}</div>
              <div className={styles.emName}>{emoji.title}</div>
              <div className={styles.emDiscr}>{emoji.keywords}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;