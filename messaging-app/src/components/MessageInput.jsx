import React from 'react'
import { BASE_URL } from '../helpers/constants';
import { getAuthHeaders } from '../helpers/functions';

function MessageInput() {
    const headers = getAuthHeaders();
   


    async function handleSendMessage(e) {
        e.preventDefault();

        const message = new FormData(e.target);


        try {
          const data = await fetch(`${BASE_URL}/messages`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...headers
            },
            body: JSON.stringify({
              "receiver_id": 4903,
              "receiver_class": "User",
              body: message.get("message"),
            }),
          });

          const response = await data.json();
          console.log(response);
        }
        catch (err) {
            console.error(err);
        }

        e.target.reset();
    }
    


  return (
    <>
    <form className='message-input-container' onSubmit={handleSendMessage}>
    <input type="text" className='message-input' name="message" placeholder="Enter message"/>
        <button type="submit" className='message-btn'>Send</button>
    </form>
       
    </>
  )
}

export default MessageInput