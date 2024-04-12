import React from 'react'
import CreateChannels from '../components/CreateChannels'
import ChannelsGet from '../components/ChannelsGet'
import MessageInput from '../components/MessageInput'
import MessageRetrieve from '../components/MessageRetrieve'

function Channels() {
  return (
    <>
        <MessageRetrieve class="Channel"/>
        <MessageInput />
    </>
  )
}

export default Channels