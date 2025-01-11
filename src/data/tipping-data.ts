import countriesData from './countries-that-tip-2024.json';

export interface TippingRate {
  country: string;
  rates: {
    restaurant: number;
    porter: number;  // Maps to Hotel category
    taxi: number;    // Maps to Driver category
  };
  currency: string;
  currencySymbol: string;
}

const parsePercentage = (value: string | number | null): number => {
  if (value === null || value === "No tip" || value === "Included") return 0;
  if (typeof value === "number") return value / 100;
  if (value === "Round up") return 0.1; // Default 10% for "Round up"
  
  // Handle range values (e.g., "10-15" or "1-2")
  if (value.includes("-")) {
    const [min, max] = value.split("-").map(Number);
    return (max || min) / 100; // Use max if available, otherwise min
  }
  
  return Number(value) / 100;
};

export const tippingRates: TippingRate[] = countriesData.map(country => ({
  country: country.country,
  rates: {
    restaurant: parsePercentage(country.CountriesThatTipRestaurantTip),
    porter: parsePercentage(country.CountriesThatTipHotelTip),
    taxi: parsePercentage(country.CountriesThatTipDriverTip)
  },
  currency: "USD", // Default to USD since currency info isn't in the source data
  currencySymbol: "$" // Default to $ since symbol info isn't in the source data
}));

// Helper function to import additional data if needed
export const importTippingData = (data: any[]): TippingRate[] => {
  return data.map(item => ({
    country: item.country,
    rates: {
      restaurant: parseFloat(item.restaurantTip) / 100,
      porter: parseFloat(item.hotelTip) / 100,
      taxi: parseFloat(item.driverTip) / 100
    },
    currency: item.currency || "USD",
    currencySymbol: item.currencySymbol || "$"
  }));
};