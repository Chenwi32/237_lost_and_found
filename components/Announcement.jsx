import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton, Text, useDisclosure } from "@chakra-ui/react";

const Announcement = ({ message, type }) => {

   const {
     isOpen: isVisible,
     onClose: onClose,
     onOpen: onOpen,
   } = useDisclosure({ defaultIsOpen: true });


  return (
    
    <>
      {isVisible ? (
        <Alert status={type} mb={10} w={'fit-content'}>
          <AlertIcon />

          <Box>
           
          <AlertDescription>
            {message}
          </AlertDescription>
          </Box>
          
          
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Alert>
      ) : (
        <></>
      )}
    </>
  )
  
  
};

export default Announcement;
