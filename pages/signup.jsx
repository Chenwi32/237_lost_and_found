import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "../components/authcontprov";
import Protectsignin from "../components/protectsignin";
import { auth } from "../firebase";

const Signup = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();
  const [confirmPassword, setConfirmPassWord] = useState();
  const [isVisible, setVisible] = useState(false);
  const [confirmMessage, setConfirmmessage] = useState("");

  const isMatched = confirmPassword === password;

  const methods = useForm({ mode: "onBlur" });

  const { signUp } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await signUp(data.email, data.password);
      router.push("/nationalIdCollection");
    } catch (error) {
      console.log(error.message);
    }
  };

  const provider = new GoogleAuthProvider();

  /* Google auth */

  const signInWthGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log({ credential, token, user });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  return (

    <Protectsignin>
      <Container
      maxW={"unset"}
      minH="80vh"
      h="fit-content"
      w="100%"
      bg={"brand.400"}
      mb={10}
      borderBottomLeftRadius={isLargerThan700 ? "10rem" : "5rem"}
      p={5}
    >
      <Flex
        m="auto"
        flexDirection={"column"}
        maxW={700}
        p={5}
        alignItems="center"
        textAlign={"left"}
      >
        <Heading
          textAlign={"left"}
          color={"brand.200"}
          fontSize={"1.5rem"}
          mb={5}
        >
          Sign Up
        </Heading>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex flexDirection={"column"} alignItems={"center"}>
              <Flex flexDirection={"column"} alignItems={"flex-start"} mb={5}>
                <Text color="brand.600">Email:</Text>
                <input
                  {...register("email", { required: "Email is required" })}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                  className={`main_input `}
                  type="email"
                  value={email}
                  required
                />

                {errors.email && (
                  <Text color={"brand.600"}>
                    {" "}
                    <small>{errors.email.message}</small>{" "}
                  </Text>
                )}
              </Flex>

              <Flex mb={5} flexDirection={"column"} alignItems={"flex-start"}>
                <Text color="brand.600">Password:</Text>

                <Flex gap={0} p={0} h="fit-content">
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
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
                      <FontAwesomeIcon icon={isVisible ? faEye : faEyeSlash} />
                    </Icon>
                  </Flex>
                </Flex>

                {errors.password && (
                  <Text color={"brand.600"}>
                    {" "}
                    <small>{errors.password.message}</small>{" "}
                  </Text>
                )}
              </Flex>

              <Flex flexDirection={"column"} mb={10} alignItems={"flex-start"}>
                <Text color="brand.600"> Re-type Password:</Text>

                <Flex gap={0} p={0} h="fit-content">
                  <input
                    {...register("confirmPassword", {
                      required: "Verify your password",
                    })}
                    type={isVisible ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassWord(e.target.value);
                      if (confirmPassword !== password) {
                        setConfirmmessage("Password does not match");
                      }
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
                      <FontAwesomeIcon icon={isVisible ? faEye : faEyeSlash} />
                    </Icon>
                  </Flex>
                </Flex>

                {errors.confirmPassword && (
                  <Text color={"brand.600"}>
                    <small>{errors.confirmPassword.message}</small>
                  </Text>
                )}

                {isMatched ? (
                  <></>
                ) : (
                  <Text color={"brand.200"}>
                    <small>{confirmMessage}</small>{" "}
                  </Text>
                )}
              </Flex>

              <Button
                bg="brand.100"
                color="brand.400"
                _hover={{
                  bg: "brand.200",
                }}
                p={5}
                type="submit"
                w={"100%"}
              >
                Create Account
              </Button>
              <Heading color={"brand.600"} mt={10} fontSize={"1rem"}>
                Or
              </Heading>

              <Flex
                w={"100%"}
                justifyContent={"center"}
                cursor="pointer"
                borderRadius="lg"
                bg={"brand.600"}
                onClick={signInWthGoogle}
                mt={10}
                gap={3}
                alignItems={"center"}
                p={"0.5rem"}
              >
                <Image w={7} h={7} alt="google" src="/images/google.png" />
                <Text>Google</Text>
              </Flex>
            </Flex>
          </form>
        </FormProvider>

        <Text mt={5} color={"brand.600"}>
          You already have an account?
          <Link href="/login">
            <Text cursor={"pointer"} color={"brand.100"}>
              Log In
            </Text>
          </Link>
        </Text>
      </Flex>
    </Container>
    </Protectsignin>

    
  );
};

export default Signup;
