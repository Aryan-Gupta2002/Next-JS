"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface UserData {
  name: string;
  email: string;
}

export default function User() {
  const [data, setData] = useState<UserData | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<UserData>(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details",
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, []);
  if (loading || !data) {
    return <div>Loading......</div>;
  }
  return (
    <div>
      User Page
      {data.name}
      {data.email}
    </div>
  );
}
