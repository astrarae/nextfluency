import { Box, Button } from "@chakra-ui/react";
import { useTabStore } from "@/store";

const TabsSection = ({ ...otherProps }) => {
  const { activeTab, setActiveTab } = useTabStore();
  return (
    <Box display="flex" w="full" {...otherProps}>
      <Button
        flex={1}
        variant="plain"
        color={activeTab == 1 ? "white" : "black"}
        bgColor={activeTab == 1 ? "black" : "transparent"}
        borderBottom="1px solid grey"
        onClick={() => setActiveTab(1)}
      >
        Языковые курсы
      </Button>

      <Button
        flex={1}
        variant="plain"
        color={activeTab == 2 ? "white" : "black"}
        bgColor={activeTab == 2 ? "black" : "transparent"}
        borderBottom="1px solid grey"
        onClick={() => setActiveTab(2)}
      >
        IT курсы
      </Button>
    </Box>
  );
};

export default TabsSection;
