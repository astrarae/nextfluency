const LanguageModel = [
  {
    uzMonthPrice: "1 560 000",
    uzMonthSalePrice: "1 200 000",
    uzMonthlyEconomy: "23",
    uzDailyPayment: "130 000",
    uzEconomyTotalSum: "360 000",
  },

  {
    uzGroupPrice: "1 000 000",
    uzGroupSalePrice: "800 000",
    uzGroupDailyPayment: "90 000",
    uzGroupEconomy: "20",
    uzEconomyTotalSum: "200 000",
  },

  {
    KorMonthPrice: "300 000",
    KorMonthSalePrice: "230 000",
    KorMonthlyEconomy: "23",
    KorDailyPayment: "25 000",
    KorEconomyTotalSum: "70 000",
  },

  {
    KorGroupPrice: "1 000 000",
    KorGroupSalePrice: "800 000",
    KorGroupDailyPayment: "90 000",
    KorGroupEconomy: "20",
    KorEconomyTotalSum: "200 000",
  },
];

const ProgrammingModel = [
  {
    uzMonthPrice: "1 800 000",
    uzMonthSalePrice: "1 400 000",
    uzDailyPayment: "150 000",
    uzEconomyTotalSum: "400 000",
  },

  {
    uzGroupPrice: "1 600 000",
    uzGroupSalePrice: "1 200 000",
    uzGroupDailyPayment: "130 000",
    uzGroupEconomy: "25",
    uzEconomyTotalSum: "400 000",
  },

  {
    KorMonthPrice: "420 000",
    KorMonthSalePrice: "350 000",
    KorDailyPayment: "35 000",
    KorEconomyTotalSum: "70 000",
  },
  {
    KorGroupPrice: "350 000",
    KorGroupSalePrice: "300 000",
    KorGroupDailyPayment: "30 000",
    KorGroupEconomy: "15",
    KorEconomyTotalSum: "50 000",
  },
];
export default function Locale(courseType ,country, type ) {
  if (courseType === "lang"){
    if (country === "uz") {
    if (type === "individ") {
      return LanguageModel[0];
    } else if (type === "group") {
      return LanguageModel[1];
    }
  } else if (country === "kor") {
    if (type === "individ") {
      return LanguageModel[2];
    } else if (type === "group") {
      return LanguageModel[3];
    }
  }
  }else if (courseType === "coding"){
    if (country === "uz") {
    if (type === "individ") {
      return ProgrammingModel[0];
    } else if (type === "group") {
      return ProgrammingModel[1];
    }
  } else if (country === "kor") {
    if (type === "individ") {
      return ProgrammingModel[2];
    } else if (type === "group") {
      return ProgrammingModel[3];
    }
  }
  }

  return 1;
}
