import React from 'react'
import { BASE_URL } from '../helpers/constants';
import { getAuthHeaders, getCurrentId } from '../helpers/functions';

function MessageInput(props) {
    const headers = getAuthHeaders();
   


    async function handleSendMessage(e) {
        e.preventDefault();
        const currentID = getCurrentId();

        const message = new FormData(e.target);


        try {
          const data = await fetch(`${BASE_URL}/messages`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...headers
            },
            body: JSON.stringify({
              "receiver_id": currentID,
              "receiver_class": props.class,
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