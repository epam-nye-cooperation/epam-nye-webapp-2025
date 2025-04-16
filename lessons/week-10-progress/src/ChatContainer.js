import { Fragment } from 'react';
import './ChatContainer.css';

export function ChatContainer({ messages, onUserMessage, isLoading }) {

    const onFeedback = (index, feedback) => {
        console.log(`Feedback for message "${index}": ${feedback}`);
    }

    if (!Array.isArray(messages)) {
        return null;
    }

    return (
        <div className="chat-container">
            <h1>Chat Container</h1>
            <div className="messages">
                {messages.map(({ role, message }, key) => {
                    return (
                        <Fragment key={key}>
                            <div className={`message ${role}`}>
                                <p>{message}</p>
                            </div>
                            {role === 'assistant'
                                && <div className="assistant-feedback">
                                    <button onClick={() => onFeedback(key, 'like')}>Like</button>
                                    <button onClick={() => onFeedback(key, 'dislike')}>Dislike</button>
                            </div>}
                        </Fragment>
                    );
                })}
                {isLoading && (
                    <div className="message assistant">
                        <p>...</p>
                    </div>
                )}
            </div>
            <form>
                <input
                    type="text"
                    disabled={isLoading}
                    placeholder="Type your message..."
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            onUserMessage(e.target.value);
                            e.target.value = '';
                        }
                    }}
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    onClick={(e) => {
                        e.preventDefault();
                        const input = e.target.previousElementSibling;
                        onUserMessage(input.value);
                        input.value = '';
                    }}>GO</button>
            </form>
        </div>
    );
}
