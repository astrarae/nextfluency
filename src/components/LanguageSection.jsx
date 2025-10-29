import { Box } from "@chakra-ui/react";
import InteractiveSection from "./InteractiveSection";
import { useState } from "react";
import PriceBox from "./PriceBox";
import CourseDescription from "./CourseDescription";
import cards from "../language-courses-info";

const LanguageSection = ({ currentCountry }) => {
  const [activeImg, setActiveImg] = useState(0);

  const handleClick = () => {
    const section = document.getElementById("info1");
    if (section) {
      section.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <Box id="main" w="auto" h="auto" bgColor="white">
      <InteractiveSection
        title={cards[activeImg].title}
        firstSlideImageSrc={cards[0].imgSrc}
        secondSlideImageSrc={cards[1].imgSrc}
        marginBottom={4}
        onSlideChange={(e) => setActiveImg(e)}
        handleClick={handleClick}
      />
      <PriceBox
        monthlyFullPayment={currentCountry == 1 ? "1 560 000" : "300 000"}
        monthlyActualPayment={currentCountry == 1 ? "1 200 000" : "230 000"}
        dailyPayment={currentCountry == 1 ? "130 000" : "25 000"}
        currency={currentCountry == 1 ? "so'm" : "KRW"}
        marginBottom={4}
        economyPercentage={"23"}
        economyTotalSum={currentCountry == 1 ? "360 000" : "70 000"}
      />
      <CourseDescription
        id="info1"
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

export default LanguageSection;
