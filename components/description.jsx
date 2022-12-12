import { Box, Button, Container, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const Description = () => {
    return (
      <Container maxW={900} mb={10} p={0}>
        <Heading fontSize={"1.5rem"} mt={10} mb={5}>
          How the platform works
        </Heading>

        <Text>
          On 237L&F there are just two things; either you found a lost ID card
          or you are searching for a lost ID card, that's it. <br />
          If you found a lost ID card, you should go to the{" "}
          <Link href={`/nationalIdCollection`}>Found an ID card</Link> section
          and fill out the form to submit the details required to help the owner
          of the ID card recover it.
        </Text>

            <Stack
                margin={'auto'}
                mt={10} mb={10} boxShadow="lg" p={5} align={"center"}
                borderRadius='lg'
                maxW={550}
          gap={5}
          direction='column'
            >
                <Text>
                  See available Documents   
                </Text>
          
          <Link href="/feeds">
            <Button
              bg="brand.100"
              color="brand.400"
              _hover={{
                color: 'brand.400',
                bg: "brand.200"
              }}
              p={5}
            >
              Available Documents
            </Button>
          </Link>
        </Stack>

        <Text>
          If you lost an ID card, then you should go to the{" "}
          <Link href={`/nationalId`}>Lost an ID card</Link> section. <br />
          Since this platform is still very new, we haven't gotten too many lost
          ID card with us yet, so chances are that you might not be able to find
          your document here; nevertheless, just come back from time to time to
          check, and then spread the word to get more people to know about the
          platform, because the more people know about it, the higher the chance
          that someone who finds your ID card might bring it here. <br />
          To direct someone to the platform, just copy and share this link: "
          <span className="share_link">
            https://lost-and-found-8ef8a.web.app/
          </span>
          " with them for now, we are still working to make the sharing process
          easy. Thank you very much!!
        </Text>
        <Text>
          Let's work together to address this lost ID cards problem!! <br />
          Send us your thought on the project through any of the following
          platforms convenient for you{" "}
          <Link href={`/contact`}>
            <a>here &#8594;</a>
          </Link>
        </Text>

        <Text>
          We will extend our scope to include other documents such as driving
          licences, passports, certficates etc in future.
        </Text>

        <Heading fontSize={"1.5rem"} mt={10} mb={5}>
          A disclaimer
        </Heading>

        <Text>
          This platform is developed to help people recover their lost document,
          not to track down theives who stole their belongings, someone who
          stole your belonging would not cary your documents to come give back
          to you –only a fool will do that– so bare in mind that people who
          bring documents to this platform are kind hearted people who want to
          help. <br />
          <strong>NB:</strong> If you come here and find your document and then
          instead of appreciating, you start causing triouble, you will scare
          away people who genuinely want to help and mind you there will be
          consequences that will follow your actions because we have a strong
          legal backing, so be ready to assume them. Nevertheless, if ever you
          notice something fishy, don't hesitate to{" "}
          <Link href={"/contact"}>contact us</Link> and we'll sort it out the
          right way.
        </Text>
      </Container>
    );
}

export default Description;