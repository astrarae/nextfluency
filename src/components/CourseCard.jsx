/* eslint-disable jsx-a11y/alt-text */
import { Box, Text, Image, Button } from "@chakra-ui/react"
export default function CourseCard(
    {courseImage, userCourseName, userKnowledgeLevel}
){
    return (
        <Box
            w="full"
            h="60px"
            rounded="md"
            boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
            p={4}
            display="flex"
            alignItems="center"
            gap={3}
            pos="relative"
        >
            <Image rounded="md" w="45px" h="40px" src={courseImage}/>
            <Box
                display="flex"
                flexDir="column"
            >
                <Text color="black" fontSize={14} fontWeight={700}>
                  {userCourseName}
                </Text>
                <Text mb={2} color="gray" fontSize={12} fontWeight={500}>
                  {userKnowledgeLevel}
                </Text>
            </Box>
            <Button variant="plain" right={0} bottom={0} pos="absolute" >
                <Text fontSize={10} fontWeight={700} color="#006DFD">
                    Редактировать
                </Text>
            </Button>
        </Box>
    )
}