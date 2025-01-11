export interface TippingRate {
  country: string;
  rates: {
    restaurant: number;
    porter: number;  // This maps to your "Hotel" category
    taxi: number;    // This maps to your "Driver" category
  };
  currency: string;
  currencySymbol: string;
}

// This is just an example. Replace this array with your actual data of 146 countries
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
  // ... You would add all your countries here in the same format
];

// Helper function to import your CSV/JSON data
export const importTippingData = (data: any[]): TippingRate[] => {
  return data.map(item => ({
    country: item.country,
    rates: {
      restaurant: parseFloat(item.restaurantTip) / 100, // Convert percentage to decimal
      porter: parseFloat(item.hotelTip) / 100,
      taxi: parseFloat(item.driverTip) / 100
    },
    currency: item.currency || "USD", // Default to USD if not specified
    currencySymbol: item.currencySymbol || "$" // Default to $ if not specified
  }));
};