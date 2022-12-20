import { Box, Text } from "@chakra-ui/react";

const Announcement = ({ message, borderColor }) => {
  return (
    <Box
      boxShadow={"lg"}
      maxW={900}
      margin={"auto"}
      mb={10}
      p={5}
      border={borderColor}
      borderRadius={"lg"}
    >
      <Text color={'brand.500'}>{message}</Text>
    </Box>
  );
};

export default Announcement;
