import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "./authcontprov";

const Protectsignin = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user.uid) {
      router.push("/");
      alert(`${user.email} is already logged in`)
    }
   
  }, [router, user]);
  return (
    <div>
    
      {user ? children : null}

    </div>
  );
};

export default Protectsignin;
