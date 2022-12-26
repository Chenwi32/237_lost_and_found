import {
  Box,
  Button,
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
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "../components/authcontprov";

const LogIn = () => {


  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();
  const [isVisible, setVisible] = useState(false);

  const methods = useForm({ mode: "onBlur" });

const { logIn } = useAuth();
const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await logIn(data.email, data.password);
      router.push("/nationalIdCollection");
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
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
        <Heading color={"brand.200"} fontSize={"1.5rem"} mb={5}>
          Log In
        </Heading>

        <FormProvider {...methods}>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <VStack w={"100%"} alignItems={"center"}>
              <VStack alignItems={"flex-start"}>
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
              </VStack>

              <VStack alignItems={"flex-start"}>
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
              </VStack>

              

              <Button
                bg="brand.100"
                color="brand.400"
                _hover={{
                  bg: "brand.200",
                }}
                p={5}
                mb={10}
                type="submit"
                w={"100%"}
              >
                Log In
              </Button>
            </VStack>
          </form>
        </FormProvider>

        <Text mt={5}  color={'brand.600'}>
          You don't yet have an account?
          <Link href='/signup'><Text cursor={'pointer'} color={'brand.100'}>Create an account</Text></Link>
        </Text>
      </Flex>
    </Container>
  );
};

export default LogIn;
