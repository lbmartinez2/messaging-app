import React from 'react'
import { BASE_URL } from '../helpers/constants';

function MessageInput() {
    const headers = JSON.parse(localStorage.getItem('headers')) || null;
   


    async function handleSendMessage(e) {
        e.preventDefault();

        const message = new FormData(e.target);


        try {
          const data = await fetch(`${BASE_URL}/messages`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "access-token": headers["access-token"],
              client: headers.client,
              expiry: headers.expiry,
              uid: headers.uid
            },
            body: JSON.stringify({
              receiver_id: 1,
              receiver_class: "user",
              body: message.get("message"),
            }),
          });
          console.log(message.get("message"))
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