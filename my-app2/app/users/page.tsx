import axios from "axios";

interface UserData {
  name: string;
  email: string;
}

export default async function User() {
  const response = await axios.get<UserData>(
    "http://localhost:3000/api/v1/user/details",
  );
  const data = response.data;
  return (
    <div>
      User Page
      {data.name}
      {data.email}
    </div>
  );
}
