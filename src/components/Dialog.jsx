import {
  Button,
  Text,
  Dialog,
  Portal,
  Box,
  FormatNumber,
} from "@chakra-ui/react";
import { Info } from "lucide-react";

const PopupSection = ({ theme, currency, economyPercentage, economyTotalSum }) => {
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
          <Dialog.Content ml={4} mr={4} bgColor="#FAFAFA" color="black">
            <Dialog.Header>
              <Dialog.Title>
                <Text>Подробнее</Text>
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
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
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button w="full" variant="surface" rounded="lg">
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
