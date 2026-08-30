import "server-only";
import { GoogleGenAI, Type } from "@google/genai";

export const generateStructured = async <T>(prompt: string, schema: object): Promise<T> => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("AI review is not configured");
  const ai = new GoogleGenAI({ apiKey });
  const response = await ai.models.generateContent({
    model: process.env.GEMINI_MODEL || "gemini-3.5-flash",
    contents: prompt,
    config: { responseMimeType: "application/json", responseSchema: schema as never },
  });
  if (!response.text) throw new Error("AI review returned no content");
  return JSON.parse(response.text) as T;
};

export const reviewSchema = {
  type: Type.OBJECT,
  properties: {
    overallAssessment: { type: Type.STRING }, gameSummary: { type: Type.STRING }, mainLesson: { type: Type.STRING },
    strengths: { type: Type.ARRAY, items: { type: Type.STRING } }, weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
    trainingRecommendations: { type: Type.ARRAY, items: { type: Type.STRING } },
    tacticalAnalysis: { type: Type.STRING }, positionalAnalysis: { type: Type.STRING }, strategicAnalysis: { type: Type.STRING },
    turningPoints: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { ply: { type: Type.INTEGER }, explanation: { type: Type.STRING }, lesson: { type: Type.STRING }, whatYouMissed: { type: Type.STRING }, opponentThreat: { type: Type.STRING }, tacticalMotif: { type: Type.STRING }, category: { type: Type.STRING } }, required: ["ply", "explanation", "lesson"] } },
  },
  required: ["overallAssessment", "gameSummary", "mainLesson", "strengths", "weaknesses", "trainingRecommendations", "tacticalAnalysis", "positionalAnalysis", "strategicAnalysis", "turningPoints"],
};
