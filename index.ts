import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';
import 'langchain/tools';

import { config } from 'dotenv';

export const initializeChat = async () => {
  config();
  const model = new OpenAI({
    openAIApiKey: process.env.OPEN_AI_API_KEY,
    temperature: 0.9,
  });
  const response = await model.call('what is the tallest building in the world?')
  console.log(response);
}

export const learnHowToUseChatTemplate = async (programmingLanguage: string) => {
  const template = 'How to build a merge sort algorithm with {programmingLanguage}?';
  const prompt = new PromptTemplate({
    template,
    inputVariables: ['programmingLanguage'],
  });

  const response = await prompt.format({
    programmingLanguage,
  })
  return response;
}

export const combinePromptWithTemplate = async () => {
  config();
  const template = 'How to build a merge sort algorithm with {programmingLanguage}?';
  const prompt = new PromptTemplate({
    template,
    inputVariables: ['programmingLanguage'],
  })

  const model = new OpenAI({ 
    openAIApiKey: process.env.OPEN_AI_API_KEY,
    temperature: 0.9, 
  });
  const chain = new LLMChain({ llm: model, prompt });
  const response = await chain.call({
    programmingLanguage: 'python',
  });
  console.log(response);
}

export const searchWithSerApi = () => {
  const model = new OpenAI({

  });
}
