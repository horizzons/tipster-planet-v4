import { TipCalculator } from "@/components/TipCalculator";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator');
    calculator?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Calculator Section at the top */}
      <section id="calculator" className="py-16 px-4">
        <div className="relative w-full max-w-md mx-auto">
          <TipCalculator />
        </div>
      </section>

      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            CalcTips – Your Global Tipping Companion
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Calculate the Perfect Tip, Anywhere in the World
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Enter Bill Amount",
                description: "Input the total amount of your bill"
              },
              {
                title: "Select Country",
                description: "Choose your current location or travel destination"
              },
              {
                title: "Choose Service",
                description: "Specify whether you're dining out, staying at a hotel, or using a driver service"
              },
              {
                title: "Get Suggestion",
                description: "Instantly receive a tip amount tailored to local customs"
              }
            ].map((feature, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl text-center">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Use CalcTips?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Awareness",
                description: "Show respect by adhering to local tipping customs"
              },
              {
                title: "Confidence & Convenience",
                description: "Avoid awkward moments and ensure appropriate tipping"
              },
              {
                title: "Travel Smart",
                description: "Enhance your travel experience with one less worry"
              }
            ].map((benefit, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl text-center">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculate Now Button at the bottom */}
      <div className="flex justify-center pb-16">
        <Button 
          onClick={scrollToCalculator}
          className="text-lg"
        >
          Calculate Now
          <ArrowUp className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* SEO Optimization */}
      <div className="hidden">
        <h2>How much to tip in different countries</h2>
        <h2>Global tip calculator for travelers</h2>
        <p>Calculate tips for restaurants, hotels, and drivers worldwide</p>
      </div>
    </div>
  );
};

export default Index;