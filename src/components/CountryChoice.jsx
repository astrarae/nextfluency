import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import Countries from "../countries";

const CountryChoice = ({ currentCountry, onClickHandle, ...otherProps }) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button {...otherProps} p={0} color="black" variant="plain" size="sm">
          <Text color="black" fontWeight={600} fontSize="15px">
            {Countries[currentCountry]}
          </Text>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            p={0}
            boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
            borderBottom="1px solid black"
            rounded="md"
            bgColor="white"
          >
            <Menu.Item
              as="button"
              color="black"
              onClick={() => onClickHandle(1)}
            >
              Узбекистан
            </Menu.Item>
            <Menu.Item
              as="button"
              color="black"
              onClick={() => onClickHandle(2)}
            >
              Южная Корея
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default CountryChoice;
