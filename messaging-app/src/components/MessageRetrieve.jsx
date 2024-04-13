import React, { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../helpers/constants";
import { getAuthHeaders, getCurrentId, getName } from "../helpers/functions";

function MessageRetrieve(props) {
  const [messages, setMessages] = useState([]);
  const [currentName, setCurrentName] = useState("");
  const activeUser = Number(localStorage.getItem("activeUser"));
  const messagesListRef = useRef(null);

  useEffect(() => {
    async function fetchMessages() {
      const currentID = await getCurrentId();

      try {
        const headers = getAuthHeaders();
        const response = await fetch(
          `${BASE_URL}/messages?receiver_id=${currentID}&receiver_class=${
            props.class || "Channel"
          }`,
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
    // console.log(messages)

    if (messagesListRef.current) {
      messagesListRef.current.scrollTop = messagesListRef.current.scrollHeight;
    }
  }, [messages]);


  return (
    <div className="message-container">
      <div className="message-header">{currentName}</div>
      <ul className="message-body" ref={messagesListRef}>
        {messages
          ? messages.map((message, index) => (
              <div className="message-bubble" key={index}>
                <span
                  className={`${
                    message.sender.id === activeUser
                      ? "sender-uid"
                      : "receiver-uid"
                  }`}
                >
                  {message.sender.uid}
                </span>
                <li
                  className={
                    message.sender.id === activeUser
                      ? "sender-msg"
                      : "receiver-msg"
                  }
                >
                  {message.body}
                </li>
                <span
                  className={`${
                    message.sender.id === activeUser
                      ? "sender-date"
                      : "receiver-date"
                  }`}
                >
                  {new Date(message.created_at).toUTCString()}
                </span>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}

export default MessageRetrieve;
