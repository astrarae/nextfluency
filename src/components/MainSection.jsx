import { Box } from "@chakra-ui/react";
import InteractiveSection from "./InteractiveSection";
import PriceBox from "./PriceBox";
import CourseDescription from "./CourseDescription";
import images from "../courses";
import {
  useCountryStore,
  useActiveImageIndex,
  useCurrentPage,
  useActivePriceTab,
} from "@/store";
import { useEffect } from "react";
import Locale from "./Locale";

const MainSection = ({ theme, ...otherProps }) => {
  const { activeImg, setActiveImg } = useActiveImageIndex();
  const { currentCountry } = useCountryStore();
  const { currentPage, setCurrentPage } = useCurrentPage();
  const { currentTab } = useActivePriceTab();

  useEffect(() => {
    setCurrentPage("main");
  }, [currentPage]);

  return (
    <Box id="main" w="auto" h="auto" {...otherProps}>
      <InteractiveSection
        title={images[activeImg].name}
        images={images}
        marginBottom={4}
        onSlideChange={(e) => setActiveImg(e)}
        theme={theme}
        description={images[activeImg].descr}
      />
      <PriceBox
        theme={theme}
        monthlyFullPayment={
          currentCountry == 1
            ? currentTab == 1
              ? images[activeImg].uzMonthPrice
              : images[activeImg].uzGroupPrice
            : currentTab == 1
            ? images[activeImg].KorMonthPrice
            : images[activeImg].KorGroupPrice
        }
        monthlyActualPayment={
          currentCountry == 1
            ? currentTab == 1
              ? images[activeImg].uzMonthSalePrice
              : images[activeImg].uzGroupSalePrice
            : currentTab == 1
            ? images[activeImg].KorMonthSalePrice
            : images[activeImg].KorGroupSalePrice
        }
        dailyPayment={
          currentCountry == 1
            ? currentTab == 1
              ? images[activeImg].uzDailyPayment
              : images[activeImg].uzGroupDailyPayment
            : currentTab == 1
            ? images[activeImg].KorDailyPayment
            : images[activeImg].KorDailyPayment
        }
        currency={currentCountry == 1 ? "so'm" : "KRW"}
        marginBottom={4}
        economyPercentage={
          currentCountry == 1
            ? currentTab == 1
              ? images[activeImg].uzMonthlyEconomy
              : images[activeImg].uzGroupEconomy
            : currentTab == 1
            ? images[activeImg].KorMonthlyEconomy
            : images[activeImg].KorGroupEconomy
        }
        economyTotalSum={
          currentCountry == 1
            ? currentTab == 1
              ? images[activeImg].uzEconomyTotalSum
              : images[activeImg].uzEconomyGroupTotalSum
            : currentTab == 1
            ? images[activeImg].KorEconomyTotalSum
            : images[activeImg].KorEconomyGroupTotalSum
        }
        
        
        
      />

      {images[activeImg].description1 && (
        <CourseDescription
          theme={theme}
          title={images[activeImg].title1}
          description={images[activeImg].description1}
          marginLeft={1}
          mt={2}
        />
      )}

      {images[activeImg].description2 && (
        <CourseDescription
          theme={theme}
          title={images[activeImg].title2}
          description={images[activeImg].description2}
          marginLeft={1}
          mt={2}
        />
      )}
    </Box>
  );
};

export default MainSection;
