export interface TippingRate {
  country: string;
  rates: {
    restaurant: number;
    porter: number;
    taxi: number;
  };
  currency: string;
  currencySymbol: string;
}

export const tippingRates: TippingRate[] = [
  {
    country: "United States",
    rates: {
      restaurant: 0.20,
      porter: 0.15,
      taxi: 0.15
    },
    currency: "USD",
    currencySymbol: "$"
  },
  {
    country: "Canada",
    rates: {
      restaurant: 0.18,
      porter: 0.15,
      taxi: 0.15
    },
    currency: "CAD",
    currencySymbol: "$"
  },
  {
    country: "United Kingdom",
    rates: {
      restaurant: 0.125,
      porter: 0.10,
      taxi: 0.10
    },
    currency: "GBP",
    currencySymbol: "£"
  },
  {
    country: "Japan",
    rates: {
      restaurant: 0,
      porter: 0,
      taxi: 0
    },
    currency: "JPY",
    currencySymbol: "¥"
  },
  {
    country: "Australia",
    rates: {
      restaurant: 0.10,
      porter: 0.10,
      taxi: 0.10
    },
    currency: "AUD",
    currencySymbol: "$"
  }
];