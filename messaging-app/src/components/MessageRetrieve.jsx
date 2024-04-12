import React, { useEffect, useState } from "react";
import { BASE_URL } from "../helpers/constants";
import { getAuthHeaders, getCurrentId } from "../helpers/functions";

function MessageRetrieve(props) {
  // async function handleReceive() {

  const [messages, setMessages] = useState([]);
  const activeUser = Number(localStorage.getItem("activeUser"));
  const currentID = getCurrentId();
  useEffect(() => {
    async function fetchMessages() {
      try {
        const headers = getAuthHeaders();
        const response = await fetch(
          `${BASE_URL}/messages?receiver_id=${currentID}&receiver_class=${props.class}`,
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
        // console.log(data.data);
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
        {messages
          ? messages.map((message, index) => (
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
            ))
          : null}
      </ul>
    </div>
  );
}

export default MessageRetrieve;
