"use client";

import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border p-2 flex flex-col justify-between gap-4 ">
        <input
          className="border p-2"
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          className="border p-2"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            axios.post("http://localhost:3000/api/v1/signup", {
              username,
              password,
            });
          }}
        >
          Sign-up
        </button>
      </div>
    </div>
  );
}
