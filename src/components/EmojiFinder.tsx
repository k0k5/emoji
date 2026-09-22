import React, {useState, useEffect, use} from "react";
import { getEmojis, type IEmojiItem } from "../api/emojiApi";


const App: React.FC = ()=>{
    const [emojis, setEmojis] = useState<IEmojiItem[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        fetchData();
    }, [searchTerm]);

    const fetchData = async () =>{
        setLoading(true);
        setError(null);
        try {
            const data = await getEmojis(searchTerm);
            setEmojis(data);
        }catch (err) {
            setError('Не удалось загрузить данные. Проверьте, запущен ли сервер (start.bat).');
        }finally {
            setLoading(false);
        }
    };

    if(error){
        return (
            <div style={{padding:'20x', color: 'red', fontWeight: 'bold', textAlign: 'center'}}>
                {error}
            </div>
        );
    }

    return(
        <div style={}>
            <h1>Поиск эмодзи</h1>
            {}
            <div style={}>
                <input 
                type="text" 
                placeholder="Введите название или ключевое слово..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={}
                />
                {searchTerm && (
                    <button
                        onClick={() => setSearchTerm('')}
                        style={}
                    >
                        Очистить поиск
                    </button>
                )}
            </div>
            {loading ? <div style={}>Загрузка эмодзи</div> : null}
            {}
            <div style={}>
                {emojis.length === 0 ? (
                    }

            </div>
        </div>
    )

}