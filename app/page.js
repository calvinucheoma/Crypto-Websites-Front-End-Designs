'use client';

import { useRouter } from 'next/navigation';
import useCurrentUser from './hooks/useCurrentUser';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  const { currentUser } = useCurrentUser();

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    } else {
      router.push('/dashboard');
    }
  }, [router, currentUser]);

  // return null;

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-slate-500">
      <span className="loader"></span>
    </div>
  );
}
