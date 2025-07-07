'use client'
import { useAppDispatch } from '@/store/hooks';
import { loginUser } from '../store';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export function useLogin() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const login = useCallback(async () => {
    const result = await dispatch(loginUser());
    if (loginUser.fulfilled.match(result)) {
      localStorage.setItem('user', JSON.stringify(result.payload));
      router.push('/Dashboard');
      return result.payload;
    }
    return null;
  }, [dispatch , router]);

  return { login };
}
