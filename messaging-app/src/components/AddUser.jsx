import React from 'react'
import { BASE_URL } from '../helpers/constants'

function AddUser() {

    async function addUser() {
        const data = fetch(`${BASE_URL}/channel/add_member`, {
            method: 'POST',
            header: {
                "Content-Type": "application/json",
                ...headers,
            },
            body: {
                id: "",
                member_id: "",
            }
        })
    }


  return (
    <>
        <form className=''>test</form>
    </>
  )
}

export default AddUser