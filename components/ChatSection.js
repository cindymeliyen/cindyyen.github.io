import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function ChatSection() {
    const [messages, setMessages] = useState([
        { role: 'model', parts: [{ text: "Hi, I'm CindyBot. Ask me anything about her experience. \n\n Note that your responses will be recorded for bot improvements." }] }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const feedRef = useRef(null);
    const chatboxRef = useRef(null);
    // This ref tracks the first render so we can suppress scroll-to-bottom on page load
    const isInitialMount = useRef(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Smoothly center the top of the chatbox when the user first lands on the page
        const scrollTimer = setTimeout(() => {
            if (chatboxRef.current) {
                chatboxRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 400); // 400ms delay ensures DOM parsing has settled
        return () => clearTimeout(scrollTimer);
    }, []);

    // Scroll only the inner chat feed wrapper so the main browser window never bounces
    const scrollToBottom = () => {
        if (feedRef.current) {
            feedRef.current.scrollTo({
                top: feedRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        // Guard clause: skip execution on the very first mount to stop the scroll-down-then-up bug
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        scrollToBottom();
    }, [messages, isLoading]);

    const formatHistoryForGemini = () => {
        return messages.map(msg => ({
            role: msg.role,
            parts: [{ text: msg.parts[0].text }]
        }));
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setIsLoading(true);

        const updatedMessages = [
            ...messages,
            { role: 'user', parts: [{ text: userMessage }] }
        ];
        setMessages(updatedMessages);

        try {
            const response = await fetch('https://cindy-bot.cindymeliyen.workers.dev', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    history: formatHistoryForGemini().slice(1)
                }),
            });

            const data = await response.json();

            if (data.response) {
                setMessages((prev) => [
                    ...prev,
                    { role: 'model', parts: [{ text: data.response }] }
                ]);
            } else {
                throw new Error("Invalid response keys");
            }
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: 'model', parts: [{ text: "Sorry, I had trouble communicating with the API. Please try again!" }] }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: isMobile ? '100dvh' : '600px',
            maxHeight: isMobile ? '100dvh' : '800px',
            width: '100%',
            maxWidth: '100%',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            border: isMobile ? 'none' : '2px solid #ddd',
            borderRadius: isMobile ? '0px' : '8px',
            overflow: 'hidden',
            fontFamily: 'Arial, sans-serif',
            boxShadow: isMobile ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'left'
        },
        header: {
            padding: '16px 24px',
            backgroundColor: '#66cdaa',
            borderBottom: '2px solid #ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'between'
        },
        indicator: {
            height: '8px',
            width: '8px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            marginRight: '8px',
            display: 'inline-block'
        },
        feed: {
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            backgroundColor: '#f0f2f5'
        },
        msgBlock: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '80%'
        },
        label: {
            fontSize: '11px',
            fontWeight: 'bold',
            color: '#333333',
            marginBottom: '4px',
            padding: '0 4px'
        },
        bubbleUser: {
            padding: '12px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            lineHeight: '1.5',
            backgroundColor: '#f2e1d0',
            color: '#000000',
            border: '1px solid #e25555',
            whiteSpace: 'pre-wrap'
        },
        bubbleBot: {
            padding: '12px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            lineHeight: '1.6',
            backgroundColor: '#ffffff',
            color: '#333333',
            border: '1px solid #ddd'
        },
        inputArea: {
            padding: '16px',
            backgroundColor: '#ffffff',
            borderTop: '2px solid #ddd'
        },
        form: {
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            maxWidth: '100%'
        },
        inputField: {
            width: '100%',
            backgroundColor: '#fafafa',
            border: '2px solid #ddd',
            borderRadius: '5px',
            padding: '12px 90px 12px 14px',
            fontSize: '14px',
            color: '#333333',
            outline: 'none',
            fontFamily: 'Arial, sans-serif'
        },
        sendBtn: {
            position: 'absolute',
            right: '8px',
            padding: '6px 14px',
            backgroundColor: '#66cdaa',
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '11px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
        }
    };

    return (
        <div style={styles.container} ref={chatboxRef}>

            {/* Header Area */}
            <div style={styles.header}>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={styles.indicator}></span>
                        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#ffffff', letterSpacing: '0.05em' }}>CINDYBOT</span>
                    </div>
                    <span style={{ fontSize: '11px', color: '#ffffff', opacity: 0.8, fontFamily: 'monospace' }}>Active</span>
                </div>
            </div>

            {/* Chat Feed History Area */}
            <div style={styles.feed} ref={feedRef}>
                {messages.map((msg, index) => {
                    const isUser = msg.role === 'user';
                    return (
                        <div
                            key={index}
                            style={{
                                ...styles.msgBlock,
                                alignSelf: isUser ? 'flex-end' : 'flex-start',
                                alignItems: isUser ? 'flex-end' : 'flex-start'
                            }}
                        >
                            <span style={styles.label}>{isUser ? 'You' : 'CindyBot'}</span>
                            <div style={isUser ? styles.bubbleUser : styles.bubbleBot}>
                                {isUser ? (
                                    msg.parts[0].text
                                ) : (
                                    <ReactMarkdown>{msg.parts[0].text}</ReactMarkdown>
                                )}
                            </div>
                        </div>
                    );
                })}

                {/* Thinking State */}
                {isLoading && (
                    <div style={{ ...styles.msgBlock, alignSelf: 'flex-start', alignItems: 'flex-start' }}>
                        <span style={styles.label}>CindyBot</span>
                        <div style={{ ...styles.bubbleBot, color: '#ababab', fontStyle: 'italic' }}>
                            Thinking...
                        </div>
                    </div>
                )}
            </div>

            {/* Pinned Input Bar */}
            <div style={styles.inputArea}>
                <form onSubmit={handleSendMessage} style={styles.form}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask a question about Cindy!"
                        style={styles.inputField}
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        style={{ ...styles.sendBtn, opacity: (!input.trim() || isLoading) ? 0.4 : 1 }}
                        disabled={isLoading || !input.trim()}
                    >
                        Send
                    </button>
                </form>
            </div>

        </div>
    );
}