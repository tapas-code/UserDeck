import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import loaderWebM from "../assets/animationv1.webm";
import UserCard from "../components/UserCard";
import UserModal from "../components/UserModal";

const Users = ({ searchQuery }) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const videoRef = useRef(null);
  const base_url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(base_url);
        setUserData(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
    console.log(userData);

    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  const handleReadMore = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 p-4 md:p-8 md:py-10 max-md:py-10 max-md:px-8 flex items-center justify-center">
      {loading ? (
        <div className="flex flex-col gap-3">
          <video
            ref={videoRef}
            src={loaderWebM}
            autoPlay
            loop
            muted
            className="h-40"
          />
          <h3>Loading User Data....</h3>
        </div>
      ) : (
        <div className="flex flex-wrap gap-10 justify-center items-start">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => <UserCard key={user.id} user={user} onReadMore={handleReadMore} />)
          ) : (
            <p>No users found.</p>
          )}
        </div>
      )}
      {selectedUser && (
        <UserModal user={selectedUser} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Users;
