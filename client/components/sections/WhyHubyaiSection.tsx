const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3C8.477 3 4 7.477 4 13s4.477 10 10 10 10-4.477 10-10S19.523 3 14 3z"
          stroke="#1570EF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 8v5l3 3"
          stroke="#1570EF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Süreklilik",
    description:
      "Aynı grupta sürekli etkinliklere katıl, kısa vadeli bağlantılar yerine gerçek bağlar kur.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 5C9.582 5 6 8.582 6 13c0 2.387.988 4.545 2.574 6.09L14 24l5.426-4.91A8.966 8.966 0 0022 13c0-4.418-3.582-8-8-8z"
          stroke="#1570EF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="13" r="3" stroke="#1570EF" strokeWidth="1.8" />
      </svg>
    ),
    title: "Gerçek aidiyet",
    description:
      "Gerçek konumlara dayalı, senin ilgi alanını paylaşan bir topluluğun parçası ol.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4L5 9v6c0 5.523 3.864 10.691 9 12 5.136-1.309 9-6.477 9-12V9L14 4z"
          stroke="#1570EF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 14l2.5 2.5L18 11"
          stroke="#1570EF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Güvenli Topluluk",
    description:
      "Profil doğrulama ve puanlama sistemiyle güvenli bir ortamda aktivitelere katıl.",
  },
];

export default function WhyHubyaiSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Neden Hubyai?
          </h2>
          <p className="text-base text-gray-500 md:text-lg">
            Çünkü biz tek seferlik buluşmalarla yetinmiyoruz.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-100 bg-[#F5F8FF] p-8 transition-shadow hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
