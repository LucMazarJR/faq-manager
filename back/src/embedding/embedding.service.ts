import { GoogleGenAI } from '@google/genai';
import { Injectable } from '@nestjs/common';

interface questionData {
  content: string;
  title?: string;
}

@Injectable()
export class EmbeddingService {
  async embeddingToQuery(questionData: questionData) {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY ?? '' });

    const response = await ai.models.embedContent({
      model: 'gemini-embedding-2',
      contents: `task: question answering | query: ${questionData.content}`,
    });

    console.log(response.embeddings);
  }

  async embeddingToSave(questionData: questionData) {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY ?? '' });

    const response = await ai.models.embedContent({
      model: 'gemini-embedding-2',
      contents: `title: ${questionData.title ?? 'none'} | text: ${questionData.content}`,
    });

    console.log(response.embeddings);
  }
}
