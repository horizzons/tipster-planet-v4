import { Input } from '@/components/ui/input';

interface BillInputProps {
  billAmount: string;
  setBillAmount: (amount: string) => void;
}

export function BillInput({ billAmount, setBillAmount }: BillInputProps) {
  return (
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
  );
}