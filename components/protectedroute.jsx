import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "./authcontprov";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user.uid) {
      router.push("/login");
    }
    
  }, [router, user]);
  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
