import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

const Signup = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();
  const [confirmPassword, setConfirmPassWord] = useState();
  const [isVisible, setVisible] = useState(false);

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
      minH={"80vh"}
      w="100%"
      bg={"brand.400"}
      mb={10}
      borderBottomLeftRadius={"10rem"}
      borderTopRightRadius={isLargerThan700 ? "10rem" : 0}
    >
      <Container m="auto" maxW={700} p={5} alignItems>
        <Heading color={"brand.200"} fontSize={"1.5rem"} mb={5}>
          Sign Up
        </Heading>
        <VStack w={"100%"} alignItems={"flex-start"}>
          <VStack alignItems={"flex-start"}>
            <Text color="brand.600">Email:</Text>
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
            <Text color="brand.600">Password:</Text>

            <Flex gap={0} p={0} h="fit-content">
              <input
                type={isVisible ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassWord(e.target.value);
                }}
                placeholder="Password"
                className={`main_input `}
                required
              />

              <Flex
                color="brand.400"
                p={"0.2rem 0.5rem"}
                alignItems={"center"}
                ml={"-2rem"}
                borderTopRightRadius={5}
                borderBottomRightRadius={5}
              >
                <Icon
                  fontSize={"1rem"}
                  onClick={() => {
                    if (isVisible) {
                      setVisible(false);
                    } else {
                      setVisible(true);
                    }
                  }}
                >
                  <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
                </Icon>
              </Flex>
            </Flex>
          </VStack>

          <VStack alignItems={"flex-start"}>
            <Text color="brand.600"> Re-type Password:</Text>

            <Flex gap={0} p={0} h="fit-content">
              <input
                type={isVisible ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassWord(e.target.value);
                }}
                placeholder="Password"
                className={`main_input `}
                required
              />

              <Flex
                color="brand.400"
                p={"0.2rem 0.5rem"}
                alignItems={"center"}
                ml={"-2rem"}
                borderTopRightRadius={5}
                borderBottomRightRadius={5}
              >
                <Icon
                  fontSize={"1rem"}
                  onClick={() => {
                    if (isVisible) {
                      setVisible(false);
                    } else {
                      setVisible(true);
                    }
                  }}
                >
                  <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
                </Icon>
              </Flex>
            </Flex>
          </VStack>
        </VStack>
      </Container>
    </Container>
  );
};

export default Signup;
