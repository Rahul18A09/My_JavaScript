import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Users() {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data));
        
    }, []);


  return (
    <div>
     <h2>{users.length} users  loaded</h2> 
    </div>
  )
}

export default Users
