'use client'

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from 'react-markdown';

const Page = () => {
    // Initialize messages array
    const initialMsgs = [
        { time: "12:40 PM", sender: "user", msg: "hello1", status: "done" },
        { time: "12:41 PM", sender: "ai", msg: "hello2", status: "done" },
        { time: "12:42 PM", sender: "user", msg: "hello3", status: "done" },
        { time: "12:43 PM", sender: "ai", msg: "hello4", status: "done" },
        { time: "12:44 PM", sender: "user", msg: "hello5", status: "done" },
        { time: "12:45 PM", sender: "ai", msg: "hello6", status: "done" },
    ];

    // Helper function to format the current time in "hh:mm AM/PM" format
    const formatTime = (date: Date): string => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 should be "12"
        const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
        return `${hours}:${minutesStr} ${ampm}`;
    };

    // Initialize sorted messages
    const [sortedMsgs, setSortedMsgs] = useState(initialMsgs);

    // State for loading and prompt
    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState('');

    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
    ];

    const chatEndRef = useRef<HTMLDivElement | null>(null);

    // Auto-scroll to the bottom of the chat
    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [sortedMsgs]);

    // Function to handle generating the AI response
    const handleGenerate = async (userMsg: string) => {
        setLoading(true); // Set loading state to true

        // Add user message to the array
        const userMsgObj = {
            time: formatTime(new Date()),
            sender: "user",
            msg: userMsg,
            status: "done",
        };
        setSortedMsgs((prevArray) => [...prevArray, userMsgObj]);

        // Call API to generate AI response
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: userMsg }), // Send user's message as the prompt
        });
        const data = await response.json();

        // Add AI response to the array
        const aiMsgObj = {
            time: formatTime(new Date()), // Time for AI response
            sender: "ai",
            msg: data.text.toString(),
            status: "done",
        };
        setSortedMsgs((prevArray) => [...prevArray, aiMsgObj]);

        setLoading(false); // Set loading state to false
    };

    // Handle user input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt(e.target.value);
    };

    // Handle form submission
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (prompt.trim() !== "") {
            handleGenerate(prompt);
            setPrompt(''); // Clear the input field after submitting
        }
    };

    return (
        <>
            <div className="flex -mb-32 h-screen antialiased text-gray-800">
                <div className="flex flex-row h-full w-full overflow-x-hidden">
                    <div className="flex flex-col flex-auto h-full p-6">
                        <div className="cardofchat absolute flex pb-12 flex-col overflow-y-scroll flex-auto flex-shrink-0 h-full p-4">
                            <div className="flex pt-16 flex-col mb-4">
                                <div className="flex flex-col-reverse">
                                    <div className="grid grid-cols-12 gap-y-2">
                                        {
                                            sortedMsgs.map((msg, index) => {
                                                return msg.sender === "user" ? (
                                                    <div key={index} className="col-start-6 col-end-13 p-3 rounded-lg">
                                                        <div className="flex items-center justify-start flex-row-reverse">
                                                            <div
                                                                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                                            >
                                                                U
                                                            </div>
                                                            <div
                                                                className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                                            >
                                                                <ReactMarkdown>{msg.msg}</ReactMarkdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div key={index} className="col-start-1 col-end-8 p-3 rounded-lg">
                                                        <div className="flex flex-row items-center">
                                                            <div
                                                                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                                            >
                                                                Ai
                                                            </div>
                                                            <div
                                                                className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                            >
                                                                <ReactMarkdown>{msg.msg}</ReactMarkdown>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                    <div ref={chatEndRef} />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex bg-gray-700 justify-center mb-4">
                <PlaceholdersAndVanishInput
                    onChange={handleChange}
                    onSubmit={onSubmit}
                    placeholders={placeholders}
                />
            </div>
        </>
    )
}

export default Page;