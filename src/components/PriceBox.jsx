import { Box } from "@chakra-ui/react";
import "./PriceBox.css";
import PopupSection from "./Dialog";

const PriceBox = ({
  currency,
  monthlyFullPayment,
  monthlyActualPayment,
  dailyPayment,
  economyPercentage,
  economyTotalSum,
  ...otherProps
}) => {
  return (
    <Box
      w="auto"
      h="auto"
      rounded="lg"
      boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
      p={2}
      display="flex"
      flexDirection="column"
      gap={2}
      {...otherProps}
      m={0.5}
    >
      <Box // The price space
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box>
          <div className="sale-mark" style={{ width: "fit-content" }}>
            {monthlyFullPayment} {currency}
            <div className="angled-line"></div>
          </div>
          <h1>
            <span
              style={{ fontSize: "1.5rem", color: "black", fontWeight: 700 }}
            >
              {monthlyActualPayment} {currency}
            </span>
            <span style={{ fontSize: "1.5rem", color: "#726D6D" }}> /мес.</span>
          </h1>
        </Box>

        <PopupSection
          currency={currency}
          economyPercentage={economyPercentage}
          economyTotalSum={economyTotalSum}
        />
      </Box>

      <Box // The section that offers a daily payment method
        p={3}
        display="flex"
        bgColor="gray.300"
        justifyContent="center"
        alignItems="center"
        rounded="lg"
        gap={2}
      >
        <span
          style={{
            fontWeight: "700",
            color: "black",
          }}
        >
          Ежедевной оплатой
        </span>
        <Box
          rounded="lg"
          bgColor="#1f90ff"
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
    </Box>
  );
};

export default PriceBox;
