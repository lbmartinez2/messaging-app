import React, { useEffect, useState } from "react";
import { getAuthHeaders, setCurrentId, setName } from "../helpers/functions";
import { BASE_URL } from "../helpers/constants";
import { Link } from "react-router-dom";

function ChannelsGet(props) {
  const headers = getAuthHeaders();
  const [channels, setChannels] = useState([]);

//   const handleClick = (e, channelClass) => {
//     updateCurrentName
//   }

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
        {channels ? channels.map((channel, index) => {
          return (
            <li className="channel-list-item" key={index} onClick={() => {
                setCurrentId(channel.id);
                setName(channel.name)
            }}>
              <Link to={`channels/${channel.id}`}>{channel.name}</Link>
            </li>
          );
        }) : null}
      </ul>
    </>
  );
}

export default ChannelsGet;
