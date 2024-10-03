'use client';
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const Page = () => {
    const placeholders = [
        "What Are The Tech Stack's You Know?",
        "Are You Currently Working With ?",
        "Tell Me About Your Self?",
        "What is Your Nickname",
    ];
    const [isDialogOpen, setIsDialogOpen] = useState(true); // Initialize to true to open on l
    const [sortedMsgs, setSortedMsgs] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [openDialog, setOpenDialog] = useState(false);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const chatEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (triggerRef.current) {
            triggerRef.current.click();
        }
    }, []);
    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [sortedMsgs]);

    const formatTime = (date: Date): string => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 should be "12"
        const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
        return `${hours}:${minutesStr} ${ampm}`;
    };

    const handleGenerate = async (userMsg: string) => {
        setLoading(true);
        const userMsgObj = {
            time: formatTime(new Date()),
            sender: "user",
            msg: userMsg,
            status: "done",
        };
        setSortedMsgs((prevArray) => [...prevArray, userMsgObj]);

        try {
           
            const response = await axios.post('/api/generate', { prompt: userMsg });

         
            const aiMsgObj = {
                time: formatTime(new Date()), 
                sender: "ai",
                msg: response.data.text.toString(),
                status: "done",
            };
            setSortedMsgs((prevArray) => [...prevArray, aiMsgObj]);
        } catch (error: any) {
            const errorMsg = 'An error occurred while generating the response. It May Cause By Asking Out Of Context Things Stay In Your Limits';
            setError(errorMsg);
            const errorMsgObj = {
                time: formatTime(new Date()),
                sender: "system",
                msg: errorMsg,
                status: "done",
            };
            setSortedMsgs((prevArray) => [...prevArray, errorMsgObj]);
            setOpenDialog(true);
        } finally {
            setLoading(false); 
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (prompt.trim() !== "") {
            handleGenerate(prompt);
            setPrompt(''); 
        }
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };


    return (
        <>
            <div className="flex antialiased text-gray-800">
                <div className="flex flex-row w-full overflow-x-hidden">
                    <div className="flex flex-col flex-auto p-6">
                        <div className="cardofchat absolute flex pb-24 md:pb-20 flex-col overflow-y-scroll flex-auto flex-shrink-0 h-[99%] md:h-full p-4">
                            <div className="flex pt-28 md:pt-16 flex-col">
                                <div className="flex flex-col-reverse">
                                    <div className="grid grid-cols-12 gap-y-2">
                                        {sortedMsgs.map((msg, index) => (
                                            msg.sender === "user" ? (
                                                <div key={index} className="col-start-3 col-end-13 p-3 rounded-lg">
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
                                                <div key={index} className="col-start-1 col-end-12 p-3 rounded-lg">
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
                                        ))}
                                        {loading && (
                                            <div className="col-start-1 col-end-8 p-3 rounded-lg">
                                                <div className="flex flex-row items-center">
                                                    <div
                                                        className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                                    >
                                                        Ai
                                                    </div>
                                                    <div
                                                        className="relative gap-x-2 flex justify-between ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                    >
                                                        <div
                                                            className="w-2 bg-[#d991c2] animate-pulse h-2 rounded-full animate-bounce"
                                                        ></div>
                                                        <div
                                                            className="w-2 animate-pulse h-2 bg-[#9869b8] rounded-full animate-bounce"
                                                        ></div>
                                                        <div
                                                            className="w-2 h-2 animate-pulse bg-[#6756cc] rounded-full animate-bounce"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div ref={chatEndRef} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex bg-gray-700 justify-center px-4 mb-4">
                <PlaceholdersAndVanishInput
                    onChange={handleChange}
                    onSubmit={onSubmit}
                    placeholders={placeholders}
                />
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                                Hi! I'm Bhanu's Bot{" "}
                                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                                    Chat
                                </span>{" "}
                                now!
                            </h4>
                        </DialogTitle>
                        <DialogDescription>
                            <h3>You can ask me about my skills, experiences, projects, or anything related to my journey in tech and beyond. What would you like to know?</h3>
                            <div className="py-10 flex flex-wrap gap-x-4 gap-y-5 items-start justify-start mx-auto">
                                <div className="flex items-center justify-center">
                                    <span className="p-3 py-0.5 rounded-md bg-black dark:bg-black dark:border-neutral-700 border border-gray-200 text-sm">
                                        Ask About Tech Stack's
                                    </span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="p-3 py-0.5 rounded-md bg-black dark:bg-black dark:border-neutral-700 border border-gray-200 text-sm">
                                        Ask About Me
                                    </span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="p-3 py-0.5 rounded-md bg-black dark:bg-black dark:border-neutral-700 border border-gray-200 text-sm">
                                        My Education
                                    </span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="p-3 py-0.5 rounded-md bg-black dark:bg-black dark:border-neutral-700 border border-gray-200 text-sm">
                                        My Skill's
                                    </span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="p-3 py-0.5 rounded-md bg-black dark:bg-black dark:border-neutral-700 border border-gray-200 text-sm">
                                        Anything Related To Me
                                    </span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="p-3 py-0.5 rounded-md bg-black dark:bg-black dark:border-neutral-700 border border-gray-200 text-sm">
                                        My Work Status
                                    </span>
                                </div>
                            </div>
                            <button onClick={() => setIsDialogOpen(false)} className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                                Let's Chat
                            </button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <AlertDialog open={openDialog} onOpenChange={(isOpen) => {
                if (!isOpen) {
                    // Re-render the component when dialog is closed
                    setSortedMsgs([...sortedMsgs]);
                }
                setOpenDialog(isOpen);
            }}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Error</AlertDialogTitle>
                        <AlertDialogDescription>
                            {error || 'An unknown error occurred.'}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={handleCloseDialog}>Close</AlertDialogCancel>
                        <AlertDialogAction onClick={handleCloseDialog}>OK</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default Page;

/*

*/