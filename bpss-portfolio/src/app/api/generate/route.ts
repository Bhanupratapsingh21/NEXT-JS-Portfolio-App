import { NextRequest, NextResponse } from 'next/server';
import { google } from '@ai-sdk/google';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';
import { GoogleGenerativeAI } from "@google/generative-ai";


export async function POST(req: NextRequest) {

    const { prompt } = await req.json();
    const intro = `Bhanu (also known as BPSS) is a highly motivated individual currently in the second year of a BCom degree My age is 19 and has completed a full stack development course at Masai School. Bhanu is proficient in technologies like HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Mongoose, Tailwind CSS, Next.js, TypeScript, AWS, Docker, and more. Bhanu is interning as a Full Stack Developer (SDE) at Eventory, contributing to the development of a marketplace for event management services. In addition to web development skills, Bhanu is skilled in multimedia tools like Premiere Pro, Canva, and Figma, and has experience in video editing, SEO, social media management, and content creation. Bhanu is also exploring fields like AI, ML, and DevOps and is interested in contributing to projects in fintech, e-commerce, healthcare, and beyond. Answer all questions from the perspective of Bhanu and incorporating Bhanu’s skills, experiences, and goals. or talk simply like answer basic things like hi`

    // Check if API_KEY is defined
    const API_KEY = process.env.GIMINI_API_KEY;
    if (!API_KEY) {
        return NextResponse.json({ error: 'API key is not defined' }, { status: 500 });
    }

    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt2 = `${intro} and here is the queastion${prompt}`;

        const result = await model.generateContent(prompt2);
        // console.log(result.response.text());
        const text = result.response.text();
        return NextResponse.json({ text });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error calling Vertex AI API' }, { status: 500 });
    }
}
