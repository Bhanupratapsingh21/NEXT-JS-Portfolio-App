import { NextRequest, NextResponse } from 'next/server';
import { google } from '@ai-sdk/google';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';
import { GoogleGenerativeAI } from "@google/generative-ai";


export async function POST(req: NextRequest) {
    
    const { prompt } = await req.json();


    // Replace this with your actual Gemini API key
    const API_KEY = process.env.GIMINI_API_KEY;

    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt2 = `${prompt}`;

        const result = await model.generateContent(prompt2);
        // console.log(result.response.text());
        const text = result.response.text();
        return NextResponse.json({ text });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error calling Vertex AI API' }, { status: 500 });
    }
}
