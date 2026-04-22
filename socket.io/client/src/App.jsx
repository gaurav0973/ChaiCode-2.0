import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");

export default function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    
  }, []);

  const sendMessage = () => {
    if (message.trim() === "") 
      return;
      console.log("Message :", socket.id, message);
      socket.emit("send_message", message);
      setMessage("");
  };

  return (
    <div>
      <h2>Simple Chat Application</h2>

      {/* Messages */}
      <div>
        {chat.map((msg, i) => (
          <p key={i}>{msg}</p>
        ))}
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="Type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}