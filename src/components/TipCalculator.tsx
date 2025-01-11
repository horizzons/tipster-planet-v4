import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ServiceType, useTipCalculator } from '@/hooks/use-tip-calculator';
import { tippingRates } from '@/data/tipping-data';
import { cn } from '@/lib/utils';

const serviceTypes: { value: ServiceType; label: string }[] = [
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'porter', label: 'Porter' },
  { value: 'taxi', label: 'Taxi' },
];

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

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="glass-panel rounded-2xl p-6 space-y-6 animate-in">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Tip Calculator</h2>
          <p className="text-sm text-muted-foreground">
            Calculate the appropriate tip based on your location and service type.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="bill-amount">
              Bill Amount
            </label>
            <Input
              id="bill-amount"
              type="number"
              placeholder="Enter bill amount"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Country</label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
                >
                  {selectedCountry?.country ?? "Select country..."}
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput placeholder="Search country..." />
                  <CommandList>
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup>
                      {tippingRates.map((country) => (
                        <CommandItem
                          key={country.country}
                          onSelect={() => {
                            setSelectedCountry(country);
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectedCountry?.country === country.country
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {country.country}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Service Type</label>
            <div className="grid grid-cols-3 gap-2">
              {serviceTypes.map((type) => (
                <Button
                  key={type.value}
                  variant={serviceType === type.value ? "default" : "outline"}
                  onClick={() => setServiceType(type.value)}
                  className="w-full"
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>

          {selectedCountry && billAmount && (
            <div className="space-y-4 pt-4 animate-in">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Tip Percentage</span>
                  <span className="font-medium">
                    {(tipPercentage * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tip Amount</span>
                  <span className="font-medium">
                    {selectedCountry.currencySymbol}
                    {tipAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-medium">
                  <span>Total Amount</span>
                  <span>
                    {selectedCountry.currencySymbol}
                    {totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}