'use client'
import { useState, useEffect } from 'react'

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function UserClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function featchUser() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Failed to fetch user")
        }
        const data = await res.json()
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch user")
        if (err instanceof Error) {
          setError(`Failed to fetch user${err.message}`)
        }
      } finally {
        setLoading(false)
      }
    }
    featchUser()
  })
  if (loading) return <div>loading...</div>
  if (error) return <div>erro happend</div>
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}({user.email})
        </li>
      ))
      }
    </ul>
  )
}
