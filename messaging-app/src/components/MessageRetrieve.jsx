import React, { useEffect, useState } from "react";
import { BASE_URL } from "../helpers/constants";
import { getAuthHeaders, getChannelMembers, getCurrentId, getName, getRecentDMs, getUserChannels } from "../helpers/functions";

function MessageRetrieve(props) {


  const [messages, setMessages] = useState([]);
  const [currentName, setCurrentName] = useState('');
  const activeUser = Number(localStorage.getItem("activeUser"));

  
  
  useEffect(() => {
    async function fetchMessages() {
      const currentID =  await getCurrentId(); 
      // console.log(currentID);
   

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
        // console.log(currentID);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMessages();
    getRecentDMs();
    setCurrentName(getName());
  });

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
                {message.body}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default MessageRetrieve;
