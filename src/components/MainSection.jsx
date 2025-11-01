import { Box } from "@chakra-ui/react";
import InteractiveSection from "./InteractiveSection";
import PriceBox from "./PriceBox";
import CourseDescription from "./CourseDescription";
import images from "../courses";
import { useCountryStore, useActiveImageIndex, useCurrentPage } from "@/store";
import { useEffect } from "react";

const LanguageSection = ({ ...otherProps }) => {
  const { activeImg, setActiveImg } = useActiveImageIndex();
  const { currentCountry } = useCountryStore();
  const { currentPage,setCurrentPage } = useCurrentPage();

  useEffect(() => {
    setCurrentPage("main")
  }, [currentPage])

  return (
    <Box id="main" w="auto" h="auto" bgColor="white" {...otherProps}>
      <InteractiveSection
        title={images[activeImg].name}
        images={images}
        marginBottom={4}
        onSlideChange={(e) => setActiveImg(e)}
      />
      <PriceBox
        monthlyFullPayment={
          currentCountry == 1
            ? images[activeImg].uzMonthPrice
            : images[activeImg].KorMonthPrice
        }
        monthlyActualPayment={
          currentCountry == 1
            ? images[activeImg].uzMonthSalePrice
            : images[activeImg].KorMonthSalePrice
        }
        dailyPayment={
          currentCountry == 1
            ? images[activeImg].uzDailyPayment
            : images[activeImg].KorDailyPayment
        }
        currency={currentCountry == 1 ? "so'm" : "KRW"}
        marginBottom={4}
        economyPercentage="23"
        economyTotalSum={
          currentCountry == 1
            ? images[activeImg].uzEconomyTotalSum
            : images[activeImg].KorEconomyTotalSum
        }
        title={activeImg === 2 && "Договорная цена"}
<<<<<<< HEAD
        info={activeImg == 2 ? false: true}
=======
        info={activeImg == 2 ? false : true}
>>>>>>> 6acaa8ce4218c77e73fade1708b1952debc6ec45
        dailyTitle={activeImg === 2 && "Почасовая оплата"}
      />

      {images[activeImg].description1 && (
        <CourseDescription
          title={images[activeImg].title1}
          description={images[activeImg].description1}
          marginLeft={1}
          mt={2}
        />
      )}

      {images[activeImg].description2 && (
        <CourseDescription
          title={images[activeImg].title2}
          description={images[activeImg].description2}
          marginLeft={1}
          mt={2}
        />
      )}
    </Box>
  );
};

export default LanguageSection;
