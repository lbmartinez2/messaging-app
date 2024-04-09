import React, { useEffect, useState } from "react";
import { BASE_URL } from "../helpers/constants";
import { getAuthHeaders } from "../helpers/functions";

function MessageRetrieve() {
  // async function handleReceive() {

  const [messages, setMessages] = useState([]);
  const activeUser = Number(localStorage.getItem("activeUser"));
  useEffect(() => {
    async function fetchMessages() {
      try {
        const headers = getAuthHeaders();
        const response = await fetch(
          `${BASE_URL}/messages?receiver_id=4927&receiver_class=User`,
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
        console.log(data.data);
        // console.log(activeUser);
      } catch (err) {
        console.error(err);
      }
    }

    fetchMessages();
  }, []);

  return (
    <div className="message-container">
      <div className="message-header">Receiver Name</div>
      <ul className="message-body">
          {messages.map((message, index) => (
            <li
              key={index}
              className={
                message.receiver.id === activeUser
                  ? "receiver-msg"
                  : "sender-msg"
              }
            >
              {message.body}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default MessageRetrieve;
