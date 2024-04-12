import React, { useEffect } from "react";
import { BASE_URL } from "../helpers/constants";
import { getAuthHeaders } from "../helpers/functions";

function CreateChannels() {
  const headers = getAuthHeaders();
  

  async function handleCreateChannel(e) {
    e.preventDefault();

    const channel_data = new FormData(e.target);

    try {
      const data = await fetch(`${BASE_URL}/channels`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify({
          name: channel_data.get("channelName"),
          user_ids: channel_data.get("channelMembers")
        }),
      });
    const response = await data.json();
    console.log(response);

    } catch (err) {
      console.error(err);
    }

 console.log("name: ", channel_data.get("channelName"));
 console.log("userIDs: ", channel_data.get("channelMembers"));
    e.target.reset();
  }

//   useEffect(() => {
//     handleCreateChannel();
//   }, []);

  return (
    <form className="create-channel-form" onSubmit={handleCreateChannel}>
      <input
        type="text"
        className="channel-name-input"
        name="channelName"
        placeholder="Name the channel"
      />
      <input 
        type="text" 
        className="channel-user-input" 
        name="channelMembers" 
        placeholder="Add users" />
        <button type="submit" className="channel-create-btn btn">Create</button>
    </form>
  );
}

export default CreateChannels;
