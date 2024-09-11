'use client'
import { useState } from 'react';
import axios from 'axios';
import React from "react";
import { useRouter } from 'next/navigation';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    ShootingStars
} from "@/components/ui/shooting-stars";
import {
    StarsBackground
} from "@/components/ui/stars-background";
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

interface FormData {
    access_key: string;
    name: string;
    contactinfo: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const router = useRouter(); // For redirection

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            name: { value: string };
            contactinfo: { value: string };
            subject: { value: string };
            message: { value: string };
        };

        const formData: FormData = {
            access_key: process.env.NEXT_PUBLIC_WEB_FORM_API_KEY || '',
            name: target.name.value,
            contactinfo: target.contactinfo.value,
            subject: target.subject.value,
            message: target.message.value,
        };

        if (!formData.access_key) {
            setError('Access key missing');
            setOpenDialog(true);
            return;
        }

        try {
            const response = await axios.post("https://api.web3forms.com/submit", formData, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });

            if (response.data.success) {
                setIsSubmitted(true);
                setError('');
                setOpenDialog(true);
            } else {
                setError('Something went wrong. Please try again later.');
                setOpenDialog(true);
            }
        } catch (err) {
            setError('Error submitting the form.');
            setOpenDialog(true);
        }
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
        if (isSubmitted) {
            router.push('/');
        }
    };

    return (
        <>
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    Hi! Glad To See You Want To Message Me
                </h2>
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Fill This Form To Send Me a Message
                </p>
                <form className="my-8 relative z-10" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" name="name" placeholder="Name" type="text" required />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="contactinfo">Contact Info</Label>
                        <Input id="contactinfo" name="contactinfo" placeholder="Email/Mobile-No/IG-Id" type="text" required />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="subject">Subject For Message</Label>
                        <select
                            id="subject"
                            name="subject"
                            className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm"
                            required
                        >
                            <option value="Hire Me">Hire Me</option>    
                            <option value="Work With Me (Freelance)">Work With Me (Freelance)</option>
                            <option value="Some Info">Some Info</option>
                            <option value="Become A Friend">Become A Friend</option>
                            <option value="Want's To Go For A Date">Want's To Date Me</option>
                        </select>
                    </div>
                    <div className="mb-8">
                        <Label htmlFor="message">Your Message</Label>
                        <textarea
                            className="flex h-40 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm"
                            id="message"
                            name="message"
                            rows={9}
                            required
                        />
                    </div>

                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        Submit &rarr;
                    </button>
                </form>
                {isSubmitted && <p>Thank you! Your message has been sent.</p>}
                {error && <p>{error}</p>}
                <ShootingStars />
                <StarsBackground />
            </div>

            <AlertDialog open={openDialog} onOpenChange={(isOpen) => {
                if (!isOpen) {
                    handleCloseDialog();
                }
                setOpenDialog(isOpen);
            }}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{isSubmitted ? "Success" : "Error"}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {isSubmitted ? "Your message was successfully sent!" : error || 'An unknown error occurred.'}
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


const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
