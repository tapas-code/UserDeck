import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [userData, setUserData] = useState([]);
  const base_url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    // Fetch the data when the component is mounted
    const fetchData = async () => {
      try {
        const response = await axios.get(base_url);
        setUserData(response.data); // Axios stores data in the 'data' property of the response
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
    console.log(userData);
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className='flex-1 p-4 overflow-auto'>
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      {userData.length > 0 ? (
        <ul className="space-y-4">
          {userData.map((user) => (
            <li key={user.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Users;
