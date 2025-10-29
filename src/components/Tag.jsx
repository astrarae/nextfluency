import { Box, Text } from "@chakra-ui/react";

export default function Tag({title,bgColor}){

    if (title.length < 1){
        return
    }

    return(
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={3}
            // boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
            rounded="md"
            w="fit"
            h="28px"
            bgColor={bgColor}
        >
            <Text color="black" fontSize="16px">{title}</Text>
        </Box>

    )
}