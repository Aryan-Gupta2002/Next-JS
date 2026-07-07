"use client";
export default function Signin() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border p-2 flex flex-col justify-between gap-4 ">
        <input
          className="border p-2"
          type="text"
          placeholder="Username"
        ></input>
        <input
          className="border p-2"
          type="password"
          placeholder="Password"
        ></input>
        <button onClick={() => {}}>Sign-in</button>
      </div>
    </div>
  );
}
