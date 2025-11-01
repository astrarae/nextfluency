import { Box, Button } from "@chakra-ui/react";
import { Plus } from "lucide-react";
export default function ProfileBottomBar() {
  return (
    <Box
      h="60px"
      w="100%"
      boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
      roundedStartStart={30}
      roundedStartEnd={30}
      pos="absolute"
      left={0}
      bottom={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={10}
      bg="rgba(255, 255, 255, 0.3)" // semi-transparent white
      backdropFilter="blur(7px)"
    >
      <Button 
        mb={10} 
        variant="plain" 
        w="50px" 
        h="50px" 
        rounded="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor="#003CD4"
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.67)"
      >
        <Plus color="white" strokeWidth={3}/>
      </Button>
    </Box>
  );
}
