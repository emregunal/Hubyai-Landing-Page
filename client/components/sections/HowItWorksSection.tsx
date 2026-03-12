const steps = [
  {
    number: "01",
    title: "Keşfet",
    description:
      "Çevrenizdeki aktiviteleri göz at, ilgi alanlarına ve konumuna en uygun etkinliği seç.",
    color: "bg-[#1570EF]",
    textColor: "text-[#1570EF]",
  },
  {
    number: "02",
    title: "Katıl",
    description:
      "Tek tıkla aktivitiye dahil ol. Kimlerle çalışacağını gör ve topluluğun bir parçası ol.",
    color: "bg-[#0BA5EC]",
    textColor: "text-[#0BA5EC]",
  },
  {
    number: "03",
    title: "Bağını Koru",
    description:
      "Tek tıkla aktivitiye dahil ol. Topluluğunda sana yakın arkadaşlar edin ve bir sonraki maceraya planla.",
    color: "bg-[#175CD3]",
    textColor: "text-[#175CD3]",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#EFF8FF] px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Nasıl çalışır?
          </h2>
          <p className="text-base text-gray-500">3 adımda katıl</p>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Steps */}
          <div className="flex w-full flex-col gap-5 lg:max-w-[480px]">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex gap-5 rounded-2xl p-6 ${index === 0 ? "bg-[#1570EF] text-white" : "bg-white"}`}
              >
                {/* Number badge */}
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl font-bold text-sm ${
                    index === 0
                      ? "bg-white/20 text-white"
                      : `bg-[#EFF8FF] ${step.textColor}`
                  }`}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div>
                  <h3
                    className={`mb-2 text-base font-semibold ${index === 0 ? "text-white" : "text-gray-900"}`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${index === 0 ? "text-blue-100" : "text-gray-500"}`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Phone mockup */}
          <div className="flex flex-1 items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-[#1570EF]/10 blur-2xl" />
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

                  {/* App header */}
                  <div className="bg-gradient-to-r from-[#1570EF] to-[#0BA5EC] px-5 pb-5 pt-2 text-white">
                    <div className="mb-3 text-xs text-blue-100">
                      Yakınındaki Aktiviteler
                    </div>
                    <div className="flex gap-2">
                      {["Tümü", "Spor", "Sosyal"].map((tab, i) => (
                        <span
                          key={tab}
                          className={`rounded-full px-3 py-1 text-xs font-medium ${i === 0 ? "bg-white text-[#1570EF]" : "bg-white/20 text-white"}`}
                        >
                          {tab}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Activity list */}
                  <div className="flex flex-1 flex-col gap-3 overflow-hidden p-4">
                    {[
                      {
                        name: "Sabah Koşusu",
                        time: "Bugün, 06:30",
                        loc: "Kadıköy",
                        count: 8,
                        gradient: "from-orange-400 to-amber-400",
                      },
                      {
                        name: "Basketbol",
                        time: "Bugün, 18:00",
                        loc: "Beşiktaş",
                        count: 12,
                        gradient: "from-[#1570EF] to-[#0BA5EC]",
                      },
                      {
                        name: "Yoga",
                        time: "Yarın, 09:00",
                        loc: "Bağcılar",
                        count: 6,
                        gradient: "from-purple-400 to-violet-500",
                      },
                    ].map((activity) => (
                      <div
                        key={activity.name}
                        className={`flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-r ${activity.gradient}`}
                      >
                        <div className="p-3 text-white">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="text-xs font-bold">
                                {activity.name}
                              </div>
                              <div className="mt-0.5 text-[10px] opacity-80">
                                {activity.time} • {activity.loc}
                              </div>
                            </div>
                            <div className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">
                              {activity.count} kişi
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom nav */}
                  <div className="flex items-center justify-around border-t border-gray-100 px-4 py-3">
                    {[
                      <HomeIcon key="home" />,
                      <SearchIcon key="search" />,
                      <PlusIcon key="plus" />,
                      <BellIcon key="bell" />,
                      <PersonIcon key="person" />,
                    ].map((icon, i) => (
                      <div
                        key={i}
                        className={`${i === 0 ? "text-[#1570EF]" : "text-gray-300"}`}
                      >
                        {icon}
                      </div>
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

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M2.25 7.5L9 2.25L15.75 7.5V15.75H11.25V11.25H6.75V15.75H2.25V7.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13 13L16 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 6V12M6 9H12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 2.25C6.51 2.25 4.5 4.26 4.5 6.75v1.5L3 11.25h12l-1.5-3v-1.5C13.5 4.26 11.49 2.25 9 2.25zM7.5 12.75a1.5 1.5 0 003 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M3 15c0-3.314 2.686-5 6-5s6 1.686 6 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
