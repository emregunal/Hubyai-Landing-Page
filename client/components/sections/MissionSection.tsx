export default function MissionSection() {
  return (
    <section className="bg-[#1570EF] px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[720px] text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 28s-12-7.272-12-15A8 8 0 0116 6.432 8 8 0 0128 13c0 7.728-12 15-12 15z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
          Daha sağlıklı ve bağlantılı bir dünya
        </h2>

        {/* Body */}
        <p className="text-base leading-relaxed text-blue-100 md:text-lg">
          İnsanları ekranlardan uzaklaştırıp gerçek hayatta bir araya gelmeyi
          sürdürülebilir topluluklar kuruyoruz. Fiziksel ve zihinsel olarak daha
          güçlü bir yaşam için.
        </p>
      </div>
    </section>
  );
}
