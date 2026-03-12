const checkItems = ["Topluluğunu bul", "Aktif kal", "Bağlan"];

export default function CTASection() {
  return (
    <section className="bg-[#F5F8FF] px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Gerçek Hayata Katılmaya Hazır mısın?
            </h2>

            {/* Checklist */}
            <ul className="mb-8 space-y-3">
              {checkItems.map((item) => (
                <li key={item} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#1570EF]">
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
                  <span className="text-base font-medium text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* App store buttons */}
            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
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

          {/* Phone mockup */}
          <div className="flex flex-1 justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-[#1570EF]/10 blur-3xl" />
              <div className="relative w-[240px] overflow-hidden rounded-[36px] border-4 border-gray-800 bg-gray-900 shadow-2xl md:w-[280px]">
                {/* Notch */}
                <div className="absolute left-1/2 top-0 z-10 h-7 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-900" />

                {/* Screen */}
                <div className="flex h-[500px] flex-col bg-white md:h-[560px]">
                  {/* Status bar */}
                  <div className="flex h-9 items-center justify-between px-6 pt-1">
                    <span className="text-xs font-bold text-gray-800">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-3.5 rounded-sm bg-gray-800" />
                      <div className="h-2 w-2 rounded-sm bg-gray-800" />
                      <div className="h-3 w-2 rounded-sm bg-gray-800" />
                    </div>
                  </div>

                  {/* Welcome header */}
                  <div className="px-5 pb-3 pt-2">
                    <div className="text-lg font-bold text-gray-900">
                      Merhaba, Ahmet
                    </div>
                    <div className="text-xs text-gray-400">
                      Bugün ne yapmak istersin?
                    </div>
                  </div>

                  {/* Search */}
                  <div className="px-5 pb-3">
                    <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="6" cy="6" r="4" stroke="#9CA3AF" strokeWidth="1.5" />
                        <path d="M10.5 10.5L13 13" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span className="text-xs text-gray-400">
                        Aktivite ara...
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mx-5 mb-3 grid grid-cols-3 gap-2">
                    {[
                      { label: "Etkinlik", value: "12" },
                      { label: "Arkadaş", value: "48" },
                      { label: "Puan", value: "320" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl bg-[#EFF8FF] p-2 text-center"
                      >
                        <div className="text-base font-bold text-[#1570EF]">
                          {stat.value}
                        </div>
                        <div className="text-[10px] text-gray-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Upcoming activities */}
                  <div className="flex flex-1 flex-col gap-2 overflow-hidden px-5">
                    <div className="text-xs font-semibold text-gray-700">
                      Yakındaki Etkinlikler
                    </div>
                    {[
                      {
                        name: "Sabah Koşusu",
                        sub: "Bugün, 06:30 • Kadıköy",
                        gradient: "from-orange-400 to-amber-400",
                      },
                      {
                        name: "Basketbol",
                        sub: "Bugün, 18:00 • Beşiktaş",
                        gradient: "from-[#1570EF] to-[#0BA5EC]",
                      },
                    ].map((activity) => (
                      <div
                        key={activity.name}
                        className={`flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-r ${activity.gradient} p-3 text-white`}
                      >
                        <div className="text-xs font-bold">{activity.name}</div>
                        <div className="text-[10px] opacity-80">
                          {activity.sub}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom nav */}
                  <div className="flex items-center justify-around border-t border-gray-100 px-5 py-3">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-5 w-5 rounded-md ${i === 0 ? "bg-[#1570EF]" : "bg-gray-200"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
