import { useState } from 'react';
import { TippingRate, tippingRates } from '../data/tipping-data';

export type ServiceType = 'restaurant' | 'porter' | 'taxi';

interface UseTipCalculatorReturn {
  billAmount: string;
  setBillAmount: (amount: string) => void;
  selectedCountry: TippingRate | null;
  setSelectedCountry: (country: TippingRate) => void;
  serviceType: ServiceType;
  setServiceType: (type: ServiceType) => void;
  tipAmount: number;
  totalAmount: number;
  tipPercentage: number;
}

export function useTipCalculator(): UseTipCalculatorReturn {
  const [billAmount, setBillAmount] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<TippingRate | null>(null);
  const [serviceType, setServiceType] = useState<ServiceType>('restaurant');

  const tipPercentage = selectedCountry ? selectedCountry.rates[serviceType] : 0;
  const numericBillAmount = parseFloat(billAmount) || 0;
  const tipAmount = numericBillAmount * tipPercentage;
  const totalAmount = numericBillAmount + tipAmount;

  return {
    billAmount,
    setBillAmount,
    selectedCountry,
    setSelectedCountry,
    serviceType,
    setServiceType,
    tipAmount,
    totalAmount,
    tipPercentage,
  };
}