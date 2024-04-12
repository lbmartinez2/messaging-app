import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../helpers/constants'
import { getChannelMembers, getUserChannels } from '../helpers/functions'
import { getAllUsers } from '../App';
import { useDebouncedCallback } from 'use-debounce';

function MessageUser() {
  const debouncedChange = useDebouncedCallback(handleChange, 500);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [friendList, setfilteredFriends] = useState([]);

   async function filterDMSearch() {
       
        const allUserChannels = await getUserChannels();
        const allChannelMembers = await Promise.all(
          allUserChannels.map(channel => getChannelMembers(channel.id))
        )
        const allMembers = allChannelMembers.flatMap(channel => channel.channel_members);
        // console.log('members: ', allMembers)
        const allUsers = await getAllUsers();
        // console.log('allUsers: ', allUsers)
        const filteredUsers = await allUsers.data.filter(user => allMembers.some(member => member.user_id === user.id));
        setFilteredUsers(await filteredUsers);
        console.log(filteredUsers)
        localStorage.setItem('filteredUsers', await JSON.stringify(filteredUsers))
   }

   useEffect(() => {
      filterDMSearch();
   }, [])


   function handleChange(e) {
    const searchTerm = e.target.value;
    if (searchTerm.trim() !== '') {
      setfilteredFriends(() => {
        return filteredUsers.filter(user => user.email.includes(searchTerm));
      });
    } else {
      setfilteredFriends([]);
    }
  }

   return (
    <>
      <input type="text" className="search-input" onChange={(e) => debouncedChange(e)}/>
      <div>
        <ul>
        {friendList.length > 0 && friendList.map((user, index) => (
            <li className="search-user" key={index}>{user.email}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MessageUser