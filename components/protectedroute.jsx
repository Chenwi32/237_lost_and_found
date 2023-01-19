import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "./authcontprov";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  const toast = useToast();

  useEffect(() => {
    if (!user.uid) {
      toast({
        description:
          "Sorry you are not logged in. To be able to access this page, you need to be logged in",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      router.push("/login");
    }
    
  }, [router, user]);
  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
