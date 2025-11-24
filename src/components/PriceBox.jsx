import { Box, Text } from "@chakra-ui/react";
import "./PriceBox.css";
import PopupSection from "./Dialog";
import { AnimatePresence, motion } from "framer-motion";
import TabSection from "./TabSection";
import { useActivePriceTab } from "@/store";
const PriceBox = ({
  theme,
  currency,
  monthlyFullPayment,
  monthlyActualPayment,
  dailyPayment,
  economyPercentage,
  economyTotalSum,
  ...otherProps
}) => {
  const { currentTab } = useActivePriceTab();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={monthlyActualPayment}
        // initial={{ opacity: 0}}
        // animate={{ opacity: 1}}
        // exit={{ opacity: 0}}
        // transition={{duration: "0.4"}}
      >

        {/* Tab Section */}
        
          <TabSection theme={theme}/>
        

        {/* ===== ==== */}
        <Box
          zIndex={3}
          pos="relative"
          w="auto"
          h="auto"
          roundedBottom="2xl"
          boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
          p={2}
          display="flex"
          flexDirection="column"
          gap={2}
          bgColor={theme.priceBoxColor}
          {...otherProps}
          ml={0.5}
          mr={0.5}
        >
          
          <Box // The price space needs to be optimized. It has to calculate data
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            flexWrap="nowrap"
            ml={0.5}
          >
            <Box>
              {monthlyFullPayment && (
                <div className="sale-mark" style={{ width: "fit-content" }}>
                  {monthlyFullPayment} {currency}
                  <div className="angled-line"></div>
                </div>
              )}
              {monthlyActualPayment && (
                <Box display="flex" gap={2} whiteSpace="nowrap" minW="10px">
                  <Text
                  whiteSpace="nowrap"
                    fontSize="1.5rem"
                    color={theme.textColor}
                    fontWeight={700}
                  >
                    {monthlyActualPayment} {currency}
                  </Text>
                  <Text fontSize="1.5rem" color={theme.subtleText}>
                    /мес.
                  </Text>
                </Box>
              )}

              
            </Box>

            
              <PopupSection
                theme={theme}
                currency={currency}
                economyPercentage={economyPercentage}
                economyTotalSum={economyTotalSum}
              />
            
          </Box>

          {dailyPayment && (
            <Box // The section that offers a daily payment method
              p={3}
              display="flex"
              bgColor={theme.priceBoxSubtle}
              justifyContent="center"
              alignItems="center"
              rounded="lg"
              gap={2}
              whiteSpace="nowrap"
              flexWrap="wrap"
            >
              <Text fontWeight={700} color={theme.textColor}>
                Ежедевной оплатой
              </Text>

              <Box
                rounded="lg"
                bgColor={theme.priceBoxAccent}
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                p={2}
              >
                <span
                  style={{
                    fontWeight: "700",
                  }}
                >
                  {dailyPayment} {currency}
                </span>
              </Box>
            </Box>
          )}
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default PriceBox;
