import { Button, Text, Dialog, Portal, Box } from "@chakra-ui/react";
import { Info } from "lucide-react";

const PopupSection = ({
  theme,
  currency,
  economyPercentage,
  economyTotalSum,
}) => {
  return (
    <Dialog.Root placement="center" size="xs">
      <Dialog.Trigger asChild>
        <Button variant="plain" size="md">
          <Box position="relative" bottom="7px" left="13px">
            <Info size={32} color={theme.priceIcon} strokeWidth={1.7} />
          </Box>
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            minW="270pt"
            ml={4}
            mr={4}
            bgColor={theme.dialogBg}
            backdropFilter="blur(7px)"
            rounded="2xl"
            color="black"
          >
            <Dialog.Header
              display="flex"
              pt={0}
              justifyContent="center"
              alignItems="flex-end"
            >
              <Dialog.Title color={theme.textColor}>
                <Text pos="relative" fontWeight={500} top={5}>
                  Подробнее
                </Text>
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body color={theme.textColor}>
              <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
                <li>
                  Общее количество занятий в месяц составляет{" "}
                  <span style={{ fontWeight: 700 }}>12 уроков</span>.
                </li>
                <li>
                  График дней и часов уроков обсуждается индивидуально с каждым
                  учеником.
                </li>
                <li>
                  Все цены выставлены в расчёте на индивидуальные занятия.
                </li>
                <li>
                  При оплате за весь месяц, вы экономите{" "}
                  <span style={{ fontWeight: 700 }}>{economyPercentage}%</span>,
                  что приравнивается к{" "}
                  <span style={{ fontWeight: 700 }}>
                    {economyTotalSum} {currency}
                  </span>
                  .
                </li>
              </ul>
            </Dialog.Body>
            <Dialog.Footer p={0} pb={1}>
              <Dialog.ActionTrigger asChild>
                <Button
                  w="full"
                  roundedStartStart="none"
                  roundedStartEnd="none"
                  roundedEndStart="2xl"
                  borderTop="1px solid gray"
                  roundedEndEnd="2xl"
                  variant="plain"
                  color={theme.dailyColor}
                  fontWeight={500}
                  
                >
                  Ясно
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default PopupSection;
