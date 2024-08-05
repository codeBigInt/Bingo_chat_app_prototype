'use client'
import { useState } from "react";
import CustomerChat from "../components/CustomerChat";
import { roomMessages } from "../data";

export default function Home() {
  const [roomId, setRoomId] = useState('1');
  return (
    <main className=" flex items-center w-screen min-h-screen">
      <div className="w-[30%] bg-gray-200 h-screen p-4 border-r border-gray-300">
        <h2 className="text-lg font-semibold mb-4">Chat Rooms</h2>
        <ul>
          {roomMessages.map((room) => (
            <li
              onClick={() => setRoomId(room.id)}
              key={room.id}
              className="p-2 cursor-pointer hover:bg-gray-300 rounded"
            >
              {room.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <CustomerChat roomId={roomId} />
      </div>
    </main>
  );
}
