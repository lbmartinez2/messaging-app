import React, { useEffect } from 'react'
import { getAuthHeaders } from '../helpers/functions'
import { BASE_URL } from '../helpers/constants';

function ChannelsGet() {
    const headers = getAuthHeaders;

    async function getChannels() {

        try {
            const data = fetch(`${BASE_URL}/channels`, {
                headers: {
                    "Content-Type": "application/json",
                    ...headers,
                }
            })
            const response = await data.json();
            console.log(response)
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getChannels();
    }, [])


  return (
    <div>ChannelsGet</div>
  )
}

export default ChannelsGet