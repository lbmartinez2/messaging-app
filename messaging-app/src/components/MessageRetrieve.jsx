import React, { useEffect, useState } from "react";
import { BASE_URL } from "../helpers/constants";
import { getAuthHeaders, getCurrentId, getName } from "../helpers/functions";

function MessageRetrieve(props) {
  const [messages, setMessages] = useState([]);
  const [currentName, setCurrentName] = useState('');
  const activeUser = Number(localStorage.getItem("activeUser"));

  useEffect(() => {
    async function fetchMessages() {
      const currentID = await getCurrentId(); 

      try {
        const headers = getAuthHeaders();
        const response = await fetch(
          `${BASE_URL}/messages?receiver_id=${currentID}&receiver_class=${props.class || "Channel"}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              ...headers,
            },
          }
        );
        const data = await response.json();
        setMessages(data.data);
      } catch (err) {
        console.error(err);
      }
    }

    const interval = setInterval(() => {
      fetchMessages();
    }, 2000);


    return () => clearInterval(interval);
  }, [props.class]);

  useEffect(() => {
    setCurrentName(getName());
  }, []);

  return (
    <div className="message-container">
        <div className="message-header">{currentName}</div>
      <ul className="message-body">
        {messages
          ? messages.map((message, index) => (
              
              <li
                key={index}
                className={
                  message.sender.id === activeUser
                    ? "sender-msg"
                    : "receiver-msg"
                }
              >
                <span className="sender-uid">From: {message.sender.uid}</span>
                {message.body}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default MessageRetrieve;
