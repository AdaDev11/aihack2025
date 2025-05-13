import React, { useState } from "react";
import "./ChatArea.css";
import axios from "axios";

function ChatArea() {
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Assalawma aleykum men sizdiń ósimlikler boyınsha sorawlarıńızǵa juwap beremen hám ósimlikler boyınsha maǵlumatlardı analiz etip berewshi AI járdemshińizben!",
            time: "13:20:33",
        },
    ]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSendMessage = async () => {
        alert("hbjbkh");
        if (inputText.trim()) {
            const newMessage = {
                sender: "user",
                text: inputText,
                time: getCurrentTime(),
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputText("");

            try {
                const response = await axios.post(
                    "http://localhost:5000/query",
                    {
                        query: inputText,
                    }
                );

                const botResponse = {
                    sender: "bot",
                    text:
                        response.data.answer || "Kechirasiz, men tushunmadim.",
                    time: getCurrentTime(),
                };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
            } catch (error: any) {
                console.error("So'rov yuborishda xatolik:", error.message);
                const errorResponse = {
                    sender: "bot",
                    text: "Kechirasiz, server bilan aloqa qilishda xatolik yuz berdi.",
                    time: getCurrentTime(),
                };
                setMessages((prevMessages) => [...prevMessages, errorResponse]);
            }
        }
    };

    const getCurrentTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="chat-area">
            <div className="message-container">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        <div className="avatar">
                            {msg.sender === "bot" ? "🤖" : "👤"}
                        </div>
                        <div className="text-container">
                            <div className="text">{msg.text}</div>
                            <div className="time">{msg.time}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    placeholder="Sorawlarıńızdı berseńız boladı"
                    value={inputText}
                    onChange={handleInputChange}
                />
                <button className="send-button" onClick={handleSendMessage}>
                    ➡️
                </button>
            </div>
        </div>
    );
}

export default ChatArea;
