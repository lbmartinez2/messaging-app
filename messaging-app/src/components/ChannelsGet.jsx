import React, { useEffect, useState } from "react";
import { getAuthHeaders } from "../helpers/functions";
import { BASE_URL } from "../helpers/constants";

function ChannelsGet() {
  const headers = getAuthHeaders();
  const [channels, setChannels] = useState([]);

  async function getChannels() {
    try {
      const data = await fetch(`${BASE_URL}/channels`, {
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
      const response = await data.json();
      console.log(response.data);
      setChannels(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <>
      <ul className="channel-list">
        {channels.map((channel, index) => {
          return (
            <li className="channel-list-item" key={index}>
              {channel.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ChannelsGet;
