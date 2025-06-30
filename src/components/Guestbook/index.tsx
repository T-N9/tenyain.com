"use client";

import { useAuth } from "@/hooks/useAuth";
import { db } from "@/lib/firebase";
import {
    addDoc,
    collection,
    serverTimestamp,
    query,
    orderBy,
    onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, Textarea } from "flowbite-react";
import Image from "next/image";
import SectionWrapper from "../common/wrappers/SectionWrapper";
import Heading from "../common/headings/Heading";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Timestamp } from 'firebase/firestore';

interface Message {
    id: string;
    message: string;
    createdAt: Timestamp | null;
    name: string;
    photoURL: string;
}

export default function Guestbook() {
    const { user, loginWithGoogle, loginWithGitHub, logout } = useAuth();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
        return onSnapshot(q, (snapshot) => {
            setMessages(
                snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Message))
            );
        });
    }, []);

    const handleSubmit = async () => {
        if (!message.trim()) return;
        await addDoc(collection(db, "guestbook"), {
            message,
            createdAt: serverTimestamp(),
            name: user?.displayName || "Anonymous",
            photoURL: user?.photoURL || "",
        });
        setMessage("");
    };

    return (
        <SectionWrapper>
            <div className=" ">
                <Heading title="Guestbook" align="center" />

                <div className="mx-auto max-w-screen-sm">
                    {user ? (
                        <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm text-gray-600">
                                    Commenting as <span className="text-primary-600 dark:text-accent-600 font-bold">{user.displayName}</span>
                                </p>
                                <Button className='secondary-btn' size="xs" color="red" onClick={logout}>
                                    Log out
                                </Button>
                            </div>
                            <Textarea
                                className={`bg-gray-50 border text-slate-600 text-lg lg:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-secondary placeholder-gray-300 dark:placeholder-gray-500 dark:text-white dark:focus:ring-accent-500 dark:focus:border-accent-500`}
                                placeholder="Leave a message..."
                                rows={3}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <Button className="mt-2 primary-btn !w-32 ml-auto" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <p className="text-center">Sign in to leave a message:</p>

                            <div className="flex justify-center items-center gap-2 mt-2 flex-col lg:flex-row">
                                <Button
                                    onClick={loginWithGoogle}
                                    className="bg-primary-600 hover:!bg-primary-500 dark:bg-accent-600 hover:dark:!bg-accent-500"
                                >
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            />
                                        </svg>
                                        <span>Continue with Google</span>{" "}
                                    </span>{" "}
                                </Button>

                                <Button
                                    color="dark"
                                    onClick={loginWithGitHub}
                                    className="  gap-2 "
                                >
                                    <div>
                                        <span className=" flex items-center gap-2">
                                            <SiGithub size={20} /> <span>Continue with GitHub</span>
                                        </span>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="max-w-screen-sm mx-auto grid grid-cols-1 gap-4 mt-6  ">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className="p-3 flex gap-4 bg-primary-50 dark:bg-gray-800 rounded-lg border dark:border-gray-700"
                        >
                            <Image
                                src={msg.photoURL || "/default-avatar.png"}
                                alt={msg.name}
                                width={40}
                                height={40}
                                className="w-10 h-10 border-primary-600 border dark:border-accent-600 rounded-full"
                            />
                            <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                    {msg.name}
                                </div>
                                <p className="text-xs text-gray-400">
                                    {msg.createdAt?.toDate()?.toLocaleString()}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-3">
                                    {msg.message}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
