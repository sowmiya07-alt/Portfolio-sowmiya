import React, { useState, useRef, useEffect } from 'react';
import './chatbot.css';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';

const Chatbot = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { text: "Hi there! I'm Sowmiya's AI assistant. How can I help you today?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const generateResponse = (input) => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
            return "Hello! Feel free to ask me about my projects, skills, or how to contact me.";
        } else if (lowerInput.includes('project') || lowerInput.includes('work')) {
            return "I have worked on several exciting projects including Skill Connect, Fashionista, and a Food Delivery platform. You can check them out in the Portfolio section!";
        } else if (lowerInput.includes('skill') || lowerInput.includes('tech')) {
            return "I am proficient in HTML, CSS, JavaScript, React, and have experience with Flutter and Firebase.";
        } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach')) {
            return "You can reach me via the Contact section at the bottom of the page, or email me directly at sowmiyasuresh71@gmail.com.";
        } else if (lowerInput.includes('about') || lowerInput.includes('who')) {
            return "I'm Sowmiya, a Computer Science student passionate about web development and data analytics.";
        } else {
            return "That's interesting! Tell me more, or ask about my projects and skills.";
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        const newMessages = [...messages, { text: inputValue, sender: 'user' }];
        setMessages(newMessages);
        setInputValue('');

        // Simulate bot typing delay
        setTimeout(() => {
            const botResponse = generateResponse(inputValue);
            setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
        }, 1000);
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <span>Sowmiya's AI Assistant</span>
                <button className="close-btn" onClick={onClose}><FaTimes /></button>
            </div>
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender === 'bot' ? 'bot-message' : 'user-message'}`}>
                        {msg.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <form className="chatbot-input-area" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="submit"><FaPaperPlane /></button>
            </form>
        </div>
    );
};

export default Chatbot;
