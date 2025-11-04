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

const CountryChoice = ({ theme, currentCountry, onClickHandle, ...otherProps }) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button 
          {...otherProps} 
          p={0} 
          color="transparent"
          variant="plain" 
          size="sm"
        >
          <Text color={theme.textColor} fontWeight={600} fontSize="15px">
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
            bgColor={theme.countryChoiceContent}
          >
            <Menu.Item
              as="button"
              color={theme.textColor}
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
              color={theme.textColor}
              as="button"
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
