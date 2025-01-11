import { TipCalculator } from "@/components/TipCalculator";
import { ShareButton } from "@/components/ShareButton";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="relative w-full max-w-md">
        <ShareButton />
        <TipCalculator />
      </div>
    </div>
  );
};

export default Index;