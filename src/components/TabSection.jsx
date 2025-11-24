import { Box } from "@chakra-ui/react";
import { useActivePriceTab } from "@/store";
import { User, Users } from "lucide-react";
import TabTagButton from "./TabTagButton";
export default function TabSection({ theme }) {
  const { currentTab, setCurrentTab } = useActivePriceTab();

  const handleClick = (tabToSet) => {
    setCurrentTab(tabToSet);
  };

  return (
    <Box
      h="auto"
      w="auto"
      ml={0.5}
      mr={0.5}
      gap={0}
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
      roundedStartStart="2xl"
      roundedStartEnd="2xl"
      bgColor={theme.priceBoxColor}
    >
      <TabTagButton
        bgColor={currentTab == 1 ? theme.priceBoxAccent : ""}
        color={currentTab == 1 ? theme.tabTagTextHighlighted : theme.tabTagText}
        title="Индивидуально"
        icon={<User />}
        onClick={() => handleClick(1)}
        flex={1}
      />

      <TabTagButton
        bgColor={currentTab == 2 ? theme.priceBoxAccent : ""}
        color={currentTab == 2 ? theme.tabTagTextHighlighted : theme.tabTagText}
        title="Мини - группы"
        icon={<Users />}
        onClick={() => handleClick(2)}
        flexWrap="no-wrap"
        flex={1}
      />
    </Box>
  );
}
