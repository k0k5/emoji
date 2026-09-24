import axios from "axios";
// import { query } from "express";

export interface IEmojiItem {
    id: number;
    emoji: string;
    title: string;
    keywords: string;
}

const API_URL = 'http://localhost:3000/api/emojis';


// @param query

export const getEmojis = async (query?: string): Promise<IEmojiItem[]> =>{
    try{
        const params = query ? { q: query} : undefined;
        const response = await axios.get<IEmojiItem[]>(API_URL, { params});

        return response.data;
        
    }catch (error) {
        console.error('Ошибка при запросе к API:', error);
        throw error;
    }
}

