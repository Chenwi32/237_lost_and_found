import { Box, Text } from "@chakra-ui/react";

const Announcement = ({ message }) => {
  return (
    <Box
      boxShadow={"lg"}
      maxW={900}
      margin={"auto"}
      mb={10}
      p={5}
      border={"1px solid #ff5470"}
      borderRadius={"lg"}
    >
      <Text color={'brand.600'}>{message}</Text>
    </Box>
  );
};

export default Announcement;
