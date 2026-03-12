export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1570EF] via-[#1488D8] to-[#0BA5EC] px-6 pb-0 pt-16 md:px-8 md:pt-20">
      {/* Background decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-white/5" />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        {/* Text content */}
        <div className="mx-auto mb-12 max-w-[720px] text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[52px] lg:leading-[1.15]">
            Gerçek bağlantılar kur. Aktif kal. Aidiyet hisset.
          </h1>
          <p className="mb-8 text-base leading-relaxed text-blue-100 md:text-lg">
            Hubyai, spor ve sosyal aktivitelerle sürdürülebilir topluluklar
            kurmanı sağlar.
          </p>

          {/* App store buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2.5 rounded-xl bg-black px-5 py-3 transition-transform hover:scale-105"
            >
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                <path
                  d="M18.077 13.713c-.03-3.3 2.694-4.9 2.817-4.974-1.534-2.244-3.918-2.551-4.762-2.578-2.022-.207-3.97 1.207-4.997 1.207-1.043 0-2.638-1.183-4.34-1.149-2.218.033-4.28 1.31-5.418 3.31C-.22 13.22.895 19.37 3.54 22.694c1.317 1.89 2.875 4.006 4.917 3.93 1.984-.08 2.726-1.27 5.117-1.27 2.373 0 3.062 1.27 5.138 1.231 2.134-.034 3.476-1.913 4.778-3.813 1.518-2.183 2.137-4.319 2.163-4.429-.047-.017-4.142-1.585-4.176-6.63z"
                  fill="white"
                />
                <path
                  d="M14.558 4.22C15.634 2.9 16.363 1.09 16.154 0c-1.578.065-3.527 1.06-4.644 2.354-1.002 1.146-1.888 3.02-1.653 4.788 1.764.134 3.574-.89 4.701-2.922z"
                  fill="white"
                />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-none text-gray-300">
                  Download on the
                </div>
                <div className="text-sm font-semibold leading-tight text-white">
                  App Store
                </div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-2.5 rounded-xl bg-black px-5 py-3 transition-transform hover:scale-105"
            >
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
                <path
                  d="M.543.54C.204.895 0 1.44 0 2.148v19.704c0 .708.204 1.253.543 1.608l.085.082 11.04-11.04v-.26L.628.459.543.54z"
                  fill="#4FC3F7"
                />
                <path
                  d="M15.345 15.175l-3.677-3.677v-.26l3.678-3.678.083.047 4.359 2.477c1.245.707 1.245 1.863 0 2.57l-4.36 2.477-.083.044z"
                  fill="#FFB300"
                />
                <path
                  d="M15.428 15.13L11.668 11.37.543 22.46c.41.435 1.088.488 1.852.055l13.033-7.385"
                  fill="#F44336"
                />
                <path
                  d="M15.428 8.612L2.395 1.226C1.631.793.953.846.543 1.281L11.668 12.37l3.76-3.759z"
                  fill="#4CAF50"
                />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-none text-gray-300">
                  Get it on
                </div>
                <div className="text-sm font-semibold leading-tight text-white">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Phone mockups */}
        <div className="relative flex items-end justify-center gap-4 md:gap-6">
          {/* Left phone (shorter) */}
          <div className="relative mb-4 hidden translate-y-4 sm:block">
            <PhoneMockup variant="left" />
          </div>

          {/* Center phone (tallest) */}
          <div className="relative z-10">
            <PhoneMockup variant="center" />
          </div>

          {/* Right phone (shorter) */}
          <div className="relative mb-4 hidden translate-y-4 sm:block">
            <PhoneMockup variant="right" />
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-white/20 py-5">
          <TrustBadge text="Güvenli topluluklar" />
          <TrustBadge text="Doğrulanmış profiller" />
          <TrustBadge text="Ücretsiz katılım" />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path
            d="M1 4L3.5 6.5L9 1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-sm font-medium text-white">{text}</span>
    </div>
  );
}

function PhoneMockup({ variant }: { variant: "left" | "center" | "right" }) {
  const isCenter = variant === "center";
  const width = isCenter ? "w-[200px] md:w-[240px]" : "w-[170px] md:w-[200px]";

  return (
    <div
      className={`${width} relative overflow-hidden rounded-[32px] border-4 border-white/20 bg-gray-900 shadow-2xl`}
      style={{ height: isCenter ? "420px" : "360px" }}
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-0 z-10 h-6 w-20 -translate-x-1/2 rounded-b-2xl bg-gray-900" />

      {/* Screen */}
      <div className="flex h-full flex-col bg-white">
        {/* Status bar */}
        <div className="flex h-8 items-center justify-between bg-white px-5 pt-1">
          <span className="text-[10px] font-semibold text-gray-800">9:41</span>
          <div className="flex items-center gap-1">
            <div className="h-2 w-3 rounded-sm bg-gray-800" />
            <div className="h-2 w-2 rounded-sm bg-gray-800" />
            <div className="h-2.5 w-1.5 rounded-sm bg-gray-800" />
          </div>
        </div>

        {/* App content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-white px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-[#1570EF]" />
              <div>
                <div className="text-[10px] text-gray-400">Merhaba,</div>
                <div className="text-xs font-semibold text-gray-800">Ahmet</div>
              </div>
            </div>
            <div className="h-6 w-6 rounded-full bg-gray-100" />
          </div>

          {/* Search */}
          <div className="px-4 pb-2">
            <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-1.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-gray-400"
              >
                <circle
                  cx="5"
                  cy="5"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M9 9L7.5 7.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[10px] text-gray-400">Aktivite ara...</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-3 px-4 pb-3">
            <span className="rounded-full bg-[#1570EF] px-3 py-1 text-[10px] font-medium text-white">
              Tümü
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-500">
              Spor
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-500">
              Sosyal
            </span>
          </div>

          {/* Activity cards */}
          <div className="flex flex-col gap-2 overflow-hidden px-4">
            <AppCard
              title="Sabah Koşusu"
              subtitle="6:30 • Kadıköy Sahili"
              color="from-orange-400 to-orange-500"
            />
            <AppCard
              title="Basketbol"
              subtitle="18:00 • Beşiktaş Spor Salonu"
              color="from-[#1570EF] to-[#0BA5EC]"
            />
            {isCenter && (
              <AppCard
                title="Yoga"
                subtitle="10:00 • Bağcılar Parkı"
                color="from-purple-400 to-purple-500"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AppCard({
  title,
  subtitle,
  color,
}: {
  title: string;
  subtitle: string;
  color: string;
}) {
  return (
    <div
      className={`flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-r ${color} p-3 text-white`}
    >
      <div className="text-xs font-semibold leading-tight">{title}</div>
      <div className="mt-0.5 text-[10px] opacity-80">{subtitle}</div>
      <div className="mt-2 flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-4 w-4 rounded-full border border-white/40 bg-white/30"
          />
        ))}
        <span className="text-[9px] opacity-80">+12 katılımcı</span>
      </div>
    </div>
  );
}
