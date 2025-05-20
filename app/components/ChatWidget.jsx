import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { InputTextarea } from 'primereact/inputtextarea';
import { useTimeout } from 'primereact/hooks';
        

const ChatWidget = () => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const chatRef = useRef(null);

    const handleSend = () => {
        if (message.trim()) {
            setMessages((prevMessages) => [...prevMessages, { text: message, fromUser: true }]);
            setMessage('');

            window.setTimeout(
            () => setMessages((prevMessages) => [...prevMessages, { text: 'This is an Ai response!', fromUser: false }]),
            2000
        );
        }
        
    };

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div>
            {/* Floating Chat Icon */}
            <Button
                icon="pi pi-comments"
                className="p-button-rounded p-button-lg p-button-info"
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 1000,
                }}
                onClick={() => setVisible((prev) => !prev)}
            />

            {/* Chat Panel */}
            {visible && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '80px',
                        right: '20px',
                        width: '320px',
                        zIndex: 999,
                    }}
                >
                    <Panel header="Chat">
                        <div
                            ref={chatRef}
                            style={{
                                maxHeight: '200px',
                                overflowY: 'auto',
                                padding: '5px',
                                borderBottom: '1px solid #ccc',
                                marginBottom: '10px',
                            }}
                        >
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        justifyContent: msg.fromUser ? 'flex-end' : 'flex-start',
                                        marginBottom: '6px',
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: msg.fromUser ? '#2196F3' : '#E0E0E0',
                                            color: msg.fromUser ? '#fff' : '#000',
                                            padding: '8px 12px',
                                            borderRadius: '15px',
                                            maxWidth: '80%',
                                        }}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-inputgroup">
                            <InputTextarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                autoResize
                                rows={1}
                                placeholder="Type a message"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSend();
                                    }
                                }}
                            />
                            <Button icon="pi pi-send" onClick={handleSend} />
                        </div>
                    </Panel>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
