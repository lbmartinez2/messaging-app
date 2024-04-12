import React from "react";
import { setCurrentId, setName } from "../helpers/functions";

function ChannelItem(props) {


  return (
    <li
      className="channel-list-item"
      key={props.index}
      onClick={() => {
        setCurrentId(props.channelId);
        setName(props.channelName);
      }}
    >
      {props.channelName}
    </li>
  );
}

export default ChannelItem;
