import React from "react";

const UserModal = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="h-[50%] w-[30%] max-md:w-[70%] max-lg:w-[50%] bg-white-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-300">
        <div className="bg-gray-800 px-4 py-1 rounded-t-2xl flex justify-between items-center"> 
            <p className="text-lg font-semibold">{user.name}</p>
            <p className=" font-mono text-2xl cursor-pointer hover:bg-black hover:bg-opacity-15 px-4 py-2 rounded-full flex items-center justify-center" onClick={()=>onClose()}>x</p>
        </div>

        <div className="px-8 py-6 flex flex-col gap-2.5 max-sm:p-4">
            <p><span className="font-semibold">Username: </span> {user.username}</p>
            <p><span className="font-semibold">Email: </span> {user.email}</p>
            <p><span className="font-semibold">Phone: </span> {user.phone}</p>
            <p><span className="font-semibold">Website: </span> {user.website}</p>
            <p><span className="font-semibold">Company: </span> {user.company.name}</p>
            <p><span className="font-semibold">Address: </span> {user.address.suite}, {user.address.city}</p>

        </div>
      </div>
    </div>
  );
};

export default UserModal;
