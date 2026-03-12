import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WhyHubyaiSection from "@/components/sections/WhyHubyaiSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import MissionSection from "@/components/sections/MissionSection";
import ValuesSection from "@/components/sections/ValuesSection";
import CTASection from "@/components/sections/CTASection";

export default function Index() {
  return (
    <div className="min-h-screen font-['Inter',sans-serif]">
      <Navbar />
      <main>
        <HeroSection />
        <WhyHubyaiSection />
        <HowItWorksSection />
        <MissionSection />
        <ValuesSection />
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-[#FDFDFD] px-6 py-8 md:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 sm:flex-row">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/6d7c26eb3b937b891de9acf50dff8a4079296847?width=278"
            alt="Hubyai"
            className="h-7 w-auto"
          />
          <p className="text-sm text-gray-400">
            © 2024 Hubyai. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-5 text-sm text-gray-500">
            <a href="#" className="hover:text-[#1570EF] transition-colors">
              Gizlilik
            </a>
            <a href="#" className="hover:text-[#1570EF] transition-colors">
              Kullanım Şartları
            </a>
            <a href="#" className="hover:text-[#1570EF] transition-colors">
              İletişim
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
