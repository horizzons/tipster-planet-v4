interface TipDisplayProps {
  tipPercentage: number;
  tipAmount: number;
  totalAmount: number;
  currencySymbol: string;
}

export function TipDisplay({ 
  tipPercentage, 
  tipAmount, 
  totalAmount, 
  currencySymbol 
}: TipDisplayProps) {
  return (
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
            {currencySymbol}
            {tipAmount.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-base font-medium">
          <span>Total Amount</span>
          <span>
            {currencySymbol}
            {totalAmount.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}