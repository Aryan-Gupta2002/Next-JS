import Link from "next/link";

export default function Home() {
  return (
    <div className="text-2xl w-screen h-screen flex items-center justify-center">
      <div>
        Todo Application
        <br />
        <Link href="/signup">Signup to Todo App</Link>
        <br />
        <Link href="/signin">Signin to Todo App</Link>
      </div>
    </div>
  );
}
