import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import Countries from "../countries";
import { KR, UZ } from "country-flag-icons/react/3x2";

const countryIcon = (countryIndex) => {
  if (countryIndex === 1) {
    return (
      <UZ
        title="Uzbekistan"
        style={{ width: 32, height: 24, borderRadius: "5px" }}
      />
    );
  } else if (countryIndex === 2) {
    return (
      <KR
        title="South Korea"
        style={{ width: 32, height: 24, borderRadius: "5px" }}
      />
    );
  }
};

const CountryChoice = ({ currentCountry, onClickHandle, ...otherProps }) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button 
          {...otherProps} 
          p={0} 
          color="black" 
          variant="plain" 
          size="sm"
        >
          <Text color="black" fontWeight={600} fontSize="15px">
            {Countries[currentCountry]}
          </Text>
          {countryIcon(currentCountry)}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            p={0}
            boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
            borderBottom="2px solid #0081FB"
            rounded="md"
            bgColor="white"
          >
            <Menu.Item
              as="button"
              color="black"
              onClick={() => onClickHandle(1)}
              display="flex"
              justifyContent="space-between"
            >
              Узбекистан
              <UZ
                title="Uzbekistan"
                style={{ width: 32, height: 24, borderRadius: "5px" }}
              />
            </Menu.Item>
            <Menu.Item
              as="button"
              color="black"
              onClick={() => onClickHandle(2)}
              display="flex"
              justifyContent="space-between"
            >
              Южная Корея
              <KR
                title="South Korea"
                style={{ width: 32, height: 24, borderRadius: "5px" }}
              />
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default CountryChoice;
