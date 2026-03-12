const values = [
  {
    title: "Süreklilik",
    image: "/images/sureklilik.jpg",
    alt: "Friends hugging with yoga mats symbolizing friendship",
  },
  {
    title: "Güven",
    image: "/images/guven.jpg",
    alt: "Volleyball player representing trust and sport",
  },
  {
    title: "Bağlılık",
    image: "/images/baglilik.jpg",
    alt: "Woman doing yoga by a reflective pool",
  },
  {
    title: "Sağlıklı yaşam",
    image: "/images/saglikli_yasam.jpg",
    alt: "Healthy lifestyle and fitness outdoors",
  },
  {
    title: "Topluluk",
    image: "/images/topluluk.jpg",
    alt: "Diverse community people gathering",
  },
  {
    title: "Erişebilirlik",
    image: "/images/erisebilirlik.jpg",
    alt: "Accessibility and inclusion",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Değerlerimiz
          </h2>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  value,
}: {
  value: { title: string; image: string; alt: string };
}) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-2xl">
      <img
        src={value.image}
        alt={value.alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Title */}
      <div className="absolute bottom-0 left-0 p-5">
        <h3 className="text-lg font-semibold text-white">{value.title}</h3>
      </div>
    </div>
  );
}
