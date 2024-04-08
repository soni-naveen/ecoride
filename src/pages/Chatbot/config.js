import { createChatBotMessage } from 'react-chatbot-kit';
const botName = 'Bot Buddy';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I am ${botName}, How can I help you ?`)],
  botName : botName,
};

export default config;