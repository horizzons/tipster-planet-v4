import { useTipCalculator } from '@/hooks/use-tip-calculator';
import { BillInput } from './calculator/BillInput';
import { CountrySelector } from './calculator/CountrySelector';
import { ServiceTypeSelector } from './calculator/ServiceTypeSelector';
import { TipDisplay } from './calculator/TipDisplay';
import { ShareButton } from './ShareButton';

export function TipCalculator() {
  const {
    billAmount,
    setBillAmount,
    selectedCountry,
    setSelectedCountry,
    serviceType,
    setServiceType,
    tipAmount,
    totalAmount,
    tipPercentage,
  } = useTipCalculator();

  return (
    <div className="w-full max-w-md mx-auto p-6 mt-0 sm:mt-6">
      <div className="glass-panel rounded-2xl p-6 space-y-6 animate-in">
        <div className="space-y-2 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Tip Calculator</h2>
            <p className="text-sm text-muted-foreground">
              Calculate the appropriate tip based on your location and service type.
            </p>
          </div>
          <ShareButton />
        </div>

        <div className="space-y-4">
          <BillInput 
            billAmount={billAmount} 
            setBillAmount={setBillAmount} 
          />
          
          <CountrySelector 
            selectedCountry={selectedCountry} 
            setSelectedCountry={setSelectedCountry} 
          />
          
          <ServiceTypeSelector 
            serviceType={serviceType} 
            setServiceType={setServiceType} 
          />

          {selectedCountry && billAmount && (
            <TipDisplay
              tipPercentage={tipPercentage}
              tipAmount={tipAmount}
              totalAmount={totalAmount}
              currencySymbol={selectedCountry.currencySymbol}
            />
          )}
        </div>
      </div>
    </div>
  );
}