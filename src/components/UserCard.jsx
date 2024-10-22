import React from "react";

const UserCard = ({ user, onReadMore }) => {
  return (
    <>
      {/* User Card  */}

      <div class="flex relative items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl">
        <div class="rounded-xl overflow-hidden relative text-center p-4 py-6 group items-center flex flex-col w-64 hover:shadow-2xl transition-all duration-500 shadow-xl">
          <div class="text-gray-500 group-hover:scale-105 transition-all">
            <svg
              class="w-16 h-16"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          <div class="group-hover:pb-10 transition-all duration-500 delay-200">
            <h1 class="font-semibold text-gray-300">{user.name}</h1>
            <p class="text-gray-500 text-sm">{user.email}</p>
          </div>
          <div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-4 -bottom-full absolute gap-2 justify-evenly w-full">
            <div class="flex gap-3 text-2xl bg-gray-700 text-white p-2 hover:px-3 hover:py-2.5 transition-all duration-500 delay-200 rounded-full shadow-sm cursor-pointer" onClick={() => onReadMore(user)}>
              <button className="text-xs text-gray-300">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
