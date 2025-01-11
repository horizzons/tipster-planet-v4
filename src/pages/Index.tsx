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
      <section id="calculator" className="py-4 px-4">
        <div className="relative w-full max-w-md mx-auto">
          <TipCalculator />
        </div>
      </section>

      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center px-4 py-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            CalcTips – Your Global Tipping Companion
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Calculate the Perfect Tip, Anywhere in the World
          </p>
          
          {/* Content from content.md */}
          <div className="max-w-md mx-auto mt-12 text-left space-y-8">
            {[
              {
                country: "United States",
                content: "In the United States, tipping is a significant part of the service industry. For restaurant service, a standard tip ranges from 15% to 20% of the total bill. Hotel staff, such as bellhops and housekeepers, generally expect $1 to $5 per service. For taxi drivers, a 10% to 15% tip is customary."
              },
              {
                country: "Canada",
                content: "Similar to the U.S., tipping in Canada is an essential practice. In restaurants, a tip of 15% to 20% is standard. Hotel staff typically receive $1 to $5 per service, and taxi drivers appreciate a tip of 10% to 15% of the fare."
              },
              {
                country: "United Kingdom",
                content: "Tipping in the UK is more relaxed compared to North America. In restaurants, a tip of 10% to 15% is common, but it's always good to check if a service charge has been included in the bill. Hotel staff generally receive £1 to £2 per service, and for taxi drivers, rounding up to the nearest pound is a common practice."
              },
              {
                country: "France",
                content: "In France, tipping is not as obligatory as in other countries since a service charge is typically included in the bill. However, leaving a small tip of around 5% to 10% for exceptional service is appreciated. Hotel staff may receive €1 to €2 per service, and taxi drivers appreciate rounding up to the nearest euro."
              },
              {
                country: "Japan",
                content: "Japan has a no-tipping culture, and offering a tip can sometimes be seen as rude. Exceptional service is expected as part of the job. In hotels and taxis, it is not customary to tip, but a small gift or note of appreciation can be given in exceptional circumstances."
              },
              {
                country: "Australia",
                content: "Tipping in Australia is not mandatory, but it is appreciated for excellent service. In restaurants, a tip of 10% is a nice gesture for exceptional service. Hotel staff and taxi drivers do not generally expect tips, but rounding up the fare is appreciated."
              },
              {
                country: "Brazil",
                content: "In Brazil, a 10% service charge is often included in the bill at restaurants, so additional tipping is not necessary but appreciated for exceptional service. Hotel staff and taxi drivers do not generally expect tips, but rounding up the fare or giving a small amount is a kind gesture."
              },
              {
                country: "South Africa",
                content: "In South Africa, tipping is customary. In restaurants, a tip of 10% to 15% is standard. Hotel staff usually receive 10 to 20 ZAR per service, and taxi drivers appreciate a 10% tip."
              }
            ].map((item, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">How Much to Tip in {item.country}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "1 - Enter Bill Amount",
                description: "Input the total amount of your bill"
              },
              {
                title: "2 - Select Country",
                description: "Choose your current location or travel destination"
              },
              {
                title: "3 - Choose Service",
                description: "Specify whether you're dining out, staying at a hotel, or using a driver service"
              },
              {
                title: "4 - Get Suggestion",
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