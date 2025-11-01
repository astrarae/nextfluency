import { Box } from "@chakra-ui/react";
import InteractiveSection from "./InteractiveSection";
import { useState, useRef, useEffect } from "react";
import PriceBox from "./PriceBox";
import CourseDescription from "./CourseDescription";
import cards from "../courses";
import { useCountryStore, useActiveImageIndex } from "@/store";

const LanguageSection = ({ ...otherProps }) => {
  const { activeImg, setActiveImg } = useActiveImageIndex();
  const { currentCountry } = useCountryStore();

  useEffect(() => {
    console.log(activeImg);
  }, [activeImg]);

  return (
    <Box id="main" w="auto" h="auto" bgColor="white" {...otherProps}>
      <InteractiveSection
        title={cards[activeImg].name}
        images={cards}
        marginBottom={4}
        onSlideChange={(e) => setActiveImg(e)}
      />
      <PriceBox
        monthlyFullPayment={
          currentCountry == 1
            ? cards[activeImg].uzMonthPrice
            : cards[activeImg].KorMonthPrice
        }
        monthlyActualPayment={
          currentCountry == 1
            ? cards[activeImg].uzMonthSalePrice
            : cards[activeImg].KorMonthSalePrice
        }
        dailyPayment={
          currentCountry == 1
            ? cards[activeImg].uzDailyPayment
            : cards[activeImg].KorDailyPayment
        }
        currency={currentCountry == 1 ? "so'm" : "KRW"}
        marginBottom={4}
        economyPercentage="23"
        economyTotalSum={
          currentCountry == 1
            ? cards[activeImg].uzEconomyTotalSum
            : cards[activeImg].KorEconomyTotalSum
        }
        title={activeImg === 2 && "Договорная цена"}
        info={activeImg === 2 && false}
        dailyTitle={activeImg === 2 && "Почасовая оплата"}
      />
      
      {cards[activeImg].description1 && (
        <CourseDescription
          title={cards[activeImg].title1}
          description={cards[activeImg].description1}
          marginLeft={1}
          mt={2}
        />
      )}

      {cards[activeImg].description2 && (
        <CourseDescription
          title={cards[activeImg].title2}
          description={cards[activeImg].description2}
          marginLeft={1}
          mt={2}
        />
      )}
    </Box>
  );
};

export default LanguageSection;
