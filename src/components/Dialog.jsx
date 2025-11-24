import { Button, Text, Dialog, Portal, Box } from "@chakra-ui/react";
import { Info } from "lucide-react";
import { useActivePriceTab } from "@/store";

const PopupSection = ({
  theme,
  currency,
  economyPercentage,
  economyTotalSum,
}) => {
  const { currentTab } = useActivePriceTab();
  const Description = (type = 1) => {
    if (type === 1) {
      return (
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
            При оплате за весь месяц, вы экономите{" "}
            <span style={{ fontWeight: 700 }}>{economyPercentage}%</span>, что
            приравнивается к{" "}
            <span style={{ fontWeight: 700 }}>
              {economyTotalSum} {currency}
            </span>
            .
          </li>
          <li>
            Длительность одного урока составляет <strong>1 час</strong>.
          </li>
        </ul>
      );
    } else if (type === 2) {
      return (
        <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
          <li>
            Общее количество занятий в месяц составляет{" "}
            <span style={{ fontWeight: 700 }}>12 уроков</span>.
          </li>
          <li>График дней и часов уроков обсуждается с каждой группой.</li>

          <li>
            При оплате за весь месяц, вы экономите{" "}
            <span style={{ fontWeight: 700 }}>{economyPercentage}%</span>, что
            приравнивается к{" "}
            <span style={{ fontWeight: 700 }}>
              {economyTotalSum} {currency}
            </span>
            .
          </li>
          <li>
            Длительность одного урока составляет <strong>1 час</strong>.
          </li>
          <li>
            Если учебная группа не сформирована, студент{" "}
            <strong>ожидает до 7 дней </strong>. Если по истечении указанного
            срока группа всё ещё не сформирована, студенту предлагается месячный
            курс индивидуальных занятий.
          </li>
          <li>
            Если по завершении месячного курса группа всё ещё не сформирована,
            студент принимает решение — продолжить ожидание формирования группы
            либо прекратить участие.
          </li>
        </ul>
      );
    }

    return 1;
  };
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
              {Description(Number(currentTab))}
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
                  p={2}
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
