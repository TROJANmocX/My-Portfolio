import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot } from 'lucide-react';
import { chatbotQuestions } from '../data/chatbotData';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'Hi there! I\'m Arish\'s virtual assistant. Ask me anything about him!' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() === '') return;

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    
    // Reset input and simulate bot typing
    setInput('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const response = getBotResponse(input);
      setMessages(prev => [...prev, { sender: 'bot', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    // Check predefined questions
    const lowerInput = userInput.toLowerCase();
    
    for (const qaItem of chatbotQuestions) {
      if (lowerInput.includes(qaItem.question.toLowerCase())) {
        return qaItem.answer;
      }
    }

    // Check for keywords
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return 'Hello! How can I help you today?';
    }
    
    if (lowerInput.includes('thank')) {
      return 'You\'re welcome! Anything else you\'d like to know?';
    }
    
    if (lowerInput.includes('bye')) {
      return 'Goodbye! Feel free to chat again anytime.';
    }

    return "I don't have specific information about that. Try asking about Arish's education, projects, skills, or interests!";
  };

  const getQuickResponseButtons = () => {
    // Return a subset of questions as quick response buttons
    return chatbotQuestions.slice(0, 4).map(item => (
      <button
        key={item.id}
        onClick={() => {
          setMessages(prev => [...prev, { sender: 'user', text: item.question }]);
          setIsTyping(true);
          
          setTimeout(() => {
            setMessages(prev => [...prev, { sender: 'bot', text: item.answer }]);
            setIsTyping(false);
          }, 800);
        }}
        className="text-sm bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-dark-700 dark:text-dark-200 py-1 px-3 rounded-full transition-colors whitespace-nowrap"
      >
        {item.question}
      </button>
    ));
  };

  return (
    <section id="chatbot" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-dark-900 dark:text-white">Chat with ArishBot</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-dark-200 max-w-3xl mx-auto">
            Have questions about me? My AI assistant can answer them for you!
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-white dark:bg-dark-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-dark-700">
          <div className="bg-primary-600 dark:bg-primary-700 text-white p-4 flex items-center">
            <Bot size={24} className="mr-2" />
            <div>
              <h3 className="font-medium">ArishBot</h3>
              <div className="text-xs text-primary-100">Ask me anything about Arish</div>
            </div>
          </div>

          <div className="h-96 p-4 overflow-y-auto bg-gray-50 dark:bg-dark-900">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mx-2 ${
                      message.sender === 'user' 
                        ? 'bg-primary-500 text-white' 
                        : 'bg-gray-200 dark:bg-dark-700 text-dark-700 dark:text-dark-200'
                    }`}
                  >
                    {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div 
                    className={`py-2 px-4 rounded-2xl ${
                      message.sender === 'user' 
                        ? 'bg-primary-500 text-white rounded-tr-none' 
                        : 'bg-white dark:bg-dark-700 text-dark-700 dark:text-dark-200 rounded-tl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex mb-4 justify-start">
                <div className="flex max-w-[80%]">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mx-2 bg-gray-200 dark:bg-dark-700 text-dark-700 dark:text-dark-200">
                    <Bot size={16} />
                  </div>
                  <div className="py-2 px-4 rounded-2xl bg-white dark:bg-dark-700 text-dark-700 dark:text-dark-200 rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-dark-400 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-dark-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-dark-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-gray-200 dark:border-dark-700">
            <div className="overflow-x-auto pb-2 mb-2 flex items-center space-x-2">
              {getQuickResponseButtons()}
            </div>
            
            <form onSubmit={handleSendMessage} className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Ask a question..."
                className="flex-1 p-2 border border-gray-300 dark:border-dark-600 rounded-l-full focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-700 text-dark-900 dark:text-white"
              />
              <button
                type="submit"
                className="bg-primary-500 text-white p-2 rounded-r-full hover:bg-primary-600 transition-colors"
                disabled={input.trim() === ''}
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;