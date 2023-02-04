import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { useAuth } from "./authcontprov";

const Protectsignin = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
   const toast = useToast();

  useEffect(() => {
    if (user.uid) {
      router.push("/");
  
      toast({
        position: "top",
        title: "Success",
        description: "You have been successfully logged in, and you can't access the log In page again accept you log out!!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
   
  }, [ user]);
  return (
    <div>
    
      {user ? children : null}

    </div>
  );
};

export default Protectsignin;
