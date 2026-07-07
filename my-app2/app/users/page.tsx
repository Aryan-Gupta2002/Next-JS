import axios from "axios";

interface UserData {
  name: string;
  email: string;
}

export default async function User() {
  const response = await axios.get<UserData>(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details",
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
