import { Utensils, Hotel, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceType } from '@/hooks/use-tip-calculator';

const serviceTypes: { value: ServiceType; label: string; icon: React.ComponentType }[] = [
  { value: 'restaurant', label: 'Restaurant', icon: Utensils },
  { value: 'porter', label: 'Porter', icon: Hotel },
  { value: 'taxi', label: 'Taxi', icon: Car },
];

interface ServiceTypeSelectorProps {
  serviceType: ServiceType;
  setServiceType: (type: ServiceType) => void;
}

export function ServiceTypeSelector({ serviceType, setServiceType }: ServiceTypeSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Service Type</label>
      <div className="grid grid-cols-3 gap-2">
        {serviceTypes.map((type) => {
          const Icon = type.icon;
          return (
            <Button
              key={type.value}
              variant={serviceType === type.value ? "default" : "outline"}
              onClick={() => setServiceType(type.value)}
              className="w-full"
            >
              <div className="block sm:hidden">
                <Icon />
              </div>
              <span className="hidden sm:block">{type.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}