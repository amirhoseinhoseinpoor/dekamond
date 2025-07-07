"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/features/Auth/types/user";

type WithPageAuthRequiredProps = {
  userId?: string;
  permissions?: string[];
};

function withPageAuthRequired<P extends WithPageAuthRequiredProps = object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> {
  const WithPageAuthRequired: React.FC<P> = (props: P) => {
    const [auth, setAuth] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
      const stored = localStorage.getItem("user");
      if (stored) {
        const parsed = JSON.parse(stored) as User;
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
