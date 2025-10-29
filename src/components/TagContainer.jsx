import { Box } from "@chakra-ui/react";

export default function TagContainer({children}){
    return (
        <Box
            w="full"
            h="auto"
            p={0}
            display="flex"
            flexDir="row"
            flexWrap="wrap"
            gap={2}
            mt={4}
        >
            {children}
        </Box>
    )
}