import { Button, Container, Flex, Icon, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Cta = () => {

    const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
    return (
      <Container mb={10} maxW={900}>
        <Flex justifyContent={"space-between"} flexDirection={isLargerThan700? 'row' : 'column'}>
          <Image src="/images/cta.png" w={400} h={300} />

                <Flex justifyContent={'center'} flexDirection={'column'} boxShadow={"2xl"} minW={400} ninH={300} borderRadius="xl" p={10}>

                    <Text>
                        Help someone recover his/her document
                    </Text>
                    
              <Link href={"/signup"}>      
            <Flex
              w={"100%"}
              justifyContent={"space-between"}
              cursor="pointer"
                        borderRadius="lg"
                        border={'1px'}
              bg={"brand.600"}
              mt={10}
              gap={3}
              alignItems={"center"}
                            p={"0.5rem"}
                            transition='0.2s ease-in-out'
              _hover={{
                boxShadow: "lg"
              }}
               boxShadow= "md"
            >
              <Text>Sign Up</Text>

              
                <Button
                  bg="brand.100"
                  color="brand.400"
                  _hover={{
                    bg: "brand.200",
                  }}
                >
                  <Icon>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Icon>
                </Button>
              
                        </Flex>
                    </Link>
          </Flex>
        </Flex>
      </Container>
    );
}

export default Cta;