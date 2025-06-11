// app/users/[id]/page.tsx
'use client';
import { useParams } from 'next/navigation';

export default function UserProfile() {
  const { id } = useParams();

  return <h1>User Profile: {id}</h1>;
}
