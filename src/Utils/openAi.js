import OpenAI from 'openai';

const openAiKey = process.env.REACT_APP_openAiKey;
console.log(openAiKey)


const openai = new OpenAI({
  apiKey: openAiKey, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default openai;