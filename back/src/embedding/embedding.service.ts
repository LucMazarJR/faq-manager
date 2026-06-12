import { GoogleGenAI } from '@google/genai';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmbeddingService {
  async embeddingOne(content: string) {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY ?? '' });

    const response = await ai.models.embedContent({
      model: 'gemini-embedding-2',
      contents: `task: sentence similarity | query: ${content}`,
    });

    return response.embeddings?.[0].values;
  }
}
