import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  return (
    <Container
      maxW={"unset"}
      minH={"70vh"}
      w="100%"
      bg={"brand.400"}
      color="brand.600"
      mb={10}
      borderBottomLeftRadius={"10rem"}
      borderTopRightRadius={"10rem"}
    >
      <Container m="auto" maxW={700} p={5} alignItems>
        <Heading color={"brand.200"} fontSize={"1.5rem"} mb={5}>
          Sign Up
        </Heading>
        <VStack w={'100%'} alignItems={"flex-start"}  >
          <VStack alignItems={"flex-start"}>
            <Text>Email:</Text>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              className={`main_input `}
              type="email"
              value={email}
              required
            />
          </VStack>

          <VStack alignItems={"flex-start"}>
            <Text>Password:</Text>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassWord(e.target.value);
              }}
              placeholder="Password"
              className={`main_input `}
              
              required
            />
          </VStack>
        </VStack>
      </Container>
    </Container>
  );
};

export default Signup;
