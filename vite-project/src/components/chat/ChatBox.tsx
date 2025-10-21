import axios from "axios";

import { useRef, useState } from "react";

import ChatInput, { ChatFormData } from "./chatInput";

import type { Message } from "./ChatMessages";

import ChatMessages from "./ChatMessages";
import TypingIndicator from "./TypingIndicator";
import popSound from "@/assests/sounds/pop.mp3";

import notificationSound from "@/assests/sounds/notificationSound.mp3";


const popAudio = new Audio(popSound);
popAudio.volume = 0.1;

const notificationAudio = new Audio(notificationSound);
notificationAudio.volume = 0.2;

type ChatResponse = {
    message: string;

};

const ChatBot = ()  => {
    messages: String;

};


const ChatBot = () => {

       const [messages, setMessages] = useState<Message[]>([]);
   const [isBotTyping, setIsBotTyping] = useState(false);
   const [error, setError] = useState('');
   const conversationId = useRef(crypto.randomUUID());



   const onSubmit = async  ({ prompt }: ChatFormData) => {
    try {
        setMessages((prev) =>)
    }
   }


    

}
