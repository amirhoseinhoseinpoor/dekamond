"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/features/Auth/types/user";

function withPageAuthRequired<P extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithPageAuthRequired: React.FC<P> = (props: P) => {
    const [auth, setAuth] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
      const stored = localStorage.getItem("user");
      if (stored) {
        const parsed = JSON.parse(stored);
        setAuth(parsed);
        if (!parsed.token) {
          router.push("/Auth");
        }
      } else {
        router.push("/Auth");
      }
    }, [router]);

    if (!auth?.token) return null;

    return <WrappedComponent {...props} />;
  };

  return WithPageAuthRequired;
}

export default withPageAuthRequired;
