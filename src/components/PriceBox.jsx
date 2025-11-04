import { Box, Text } from "@chakra-ui/react";
import "./PriceBox.css";
import PopupSection from "./Dialog";
import { AnimatePresence, motion } from "framer-motion";
const PriceBox = ({
  theme,
  title,
  dailyTitle,
  currency,
  monthlyFullPayment,
  monthlyActualPayment,
  dailyPayment,
  economyPercentage,
  economyTotalSum,
  info = true,
  ...otherProps
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={monthlyActualPayment}
        // initial={{ opacity: 0}}
        // animate={{ opacity: 1}}
        // exit={{ opacity: 0}}
        // transition={{duration: "0.4"}}
      >
        <Box
          w="auto"
          h="auto"
          rounded="lg"
          boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
          p={2}
          display="flex"
          flexDirection="column"
          gap={2}
          bgColor={theme.priceBoxColor}
          {...otherProps}
          m={0.5}
        >
          <Box // The price space
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
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
                <Box display="flex" gap={2}>
                  <Text
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

              {title && (
                <h1>
                  <Text
                    fontSize="1.5rem"
                    color={theme.textColor}
                    fontWeight={700}
                  >
                    {title}
                  </Text>
                </h1>
              )}
            </Box>

            {info && (
              <PopupSection
                theme={theme}
                currency={currency}
                economyPercentage={economyPercentage}
                economyTotalSum={economyTotalSum}
              />
            )}
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
            >
              <Text fontWeight={700} color={theme.textColor}>
                {dailyTitle ? dailyTitle : "Ежедевной оплатой"}
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
