import { Box, Text, Button } from "@chakra-ui/react";
import { Search } from "lucide-react";

const CertificateCard = ({ title, link }) => {
  return (
    <Box
      w="full"
      p={2}
      display="flex"
      alignItems="center"
      borderBottom="1px solid black"
      justifyContent="space-between"
      as="a"
      href={link}
    >
      <Text color="black" fontSize="17px">
        {title}
      </Text>
      <Button variant="plain" color="black" boxShadow="1px 1px 3px gray" p={2}>
        <Search />
      </Button>
    </Box>
  );
};

export default CertificateCard;
