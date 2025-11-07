import fs from "fs";

import path from "path";

import { conversationRepository } from "../repositories/conversationRepository.repository";

import template from "../llm/prompts/chatbot.txt";

import { llmClient } from "../llm/client";

const parkInfo = fs.readFileSync(
    path.join(__dirname, "..", "llm", "prompts", "WonderWorld.md"),

    "utf-8"

);


const instructions = template.replace("{{parkInfo}}", parkInfo);


type ChatResponse = {
    
}