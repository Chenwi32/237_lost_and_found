import { Box, Text } from "@chakra-ui/react";

const Announcement = ({ message }) => {
    return (
      <Box mb={10} className={"announcement"} boxShadow={'lg'}>
        <Text >{message}</Text>
      </Box>
    );
}

export default Announcement;