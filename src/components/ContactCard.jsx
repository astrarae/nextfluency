import { Box, Avatar, Text, Button } from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";

const ContactCard = ({ title, avatar, link }) => {
  return (
    <Box
      w="full"
      h="60px"
      p={3}
      display="flex"
      boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
      alignItems="center"
      justifyContent="space-between"
      rounded="lg"
      gap={2}
      as="a"
      href={link}
    >
      <Box display="flex" flexDirection="row" alignItems="center" gap={4}>
        <Avatar.Root borderless>
          <Avatar.Fallback name="avatar" />
          <Avatar.Image src={avatar} />
        </Avatar.Root>

        <Text fontSize="1.2rem" color="black" fontWeight={500}>
          {title}
        </Text>
      </Box>

      <Button>
        <ChevronRight size={18} strokeWidth={2} />
      </Button>
    </Box>
  );
};

export default ContactCard;
