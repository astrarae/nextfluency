import { Box } from "@chakra-ui/react";
import InteractiveSection from "./InteractiveSection";
import { useState } from "react";
import PriceBox from "./PriceBox";
import CourseDescription from "./CourseDescription";
import cards from "../it-courses-info";

const ItSection = ({ currentCountry }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <Box id="main" w="auto" h="auto" bgColor="white">
      <InteractiveSection
        title={cards[activeImg].title}
        firstSlideImageSrc={cards[0].imgSrc}
        secondSlideImageSrc={cards[1].imgSrc}
        marginBottom={4}
        onSlideChange={(e) => setActiveImg(e)}
      />
      <PriceBox
        monthlyFullPayment={currentCountry == 1 ? "1 800 000" : "400 000"}
        monthlyActualPayment={currentCountry == 1 ? "1 400 000" : "350 000"}
        dailyPayment={currentCountry == 1 ? "150 000" : "35 000"}
        currency={currentCountry == 1 ? "so'm" : "KRW"}
        marginBottom={4}
        economyPercentage={currentCountry == 1 ? "22" : "12.5"}
        economyTotalSum={currentCountry == 1 ? "400 000" : "50 000"}
      />
      <CourseDescription
        title={cards[activeImg].title1}
        description={cards[activeImg].description1}
        marginLeft={1}
        mt={2}
      />

      <CourseDescription
        title={cards[activeImg].title2}
        description={cards[activeImg].description2}
        marginLeft={1}
        mt={2}
      />
    </Box>
  );
};

export default ItSection;
