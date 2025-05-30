import Image from 'next/image';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="py-12 px-4 md:px-20 bg-white/60">
    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">{title}</h2>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const images = [
  {
    src: "/aiimage.png",
    alt: "Government Certified",
    className: "md:grayscale md:hover:grayscale-0 transition",
    width: 100,
    height: 100,
  },
  {
    src: "/leaf.png",
    alt: "Eco-Friendly Practices",
    className: "md:grayscale md:hover:grayscale-0 transition",
    width: 100,
    height: 100,
  },
  {
    src: "/bg-image.jpg",
    alt: "International Quality",
    className: "md:grayscale md:hover:grayscale-0 transition",
    width: 100,
    height: 100,
  },
  {
    src: "/farming1.jpg",
    alt: "Trusted by Farmers",
    className: "md:grayscale md:hover:grayscale-0 transition",
    width: 100,
    height: 100,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <main className="bg-gradient-to-br from-lime-100 via-orange-100 to-white text-green-900 overflow-hidden">
        {/* Hero Section */}
        <div className="relative w-full h-[50vh] flex items-center justify-center bg-[url('/farming1.jpg')] bg-cover bg-center text-center">
          <div className="backdrop-blur-md bg-white/80 p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-green-900">
              About <span className="text-lime-700">Adil Agro</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-green-800 font-medium">
              Cultivating Excellence in Agriculture with Trust, Technology, and Tradition.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <Section title="Our Mission & Vision">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-green-50 p-6 rounded-lg shadow-xl border-l-4 border-green-600">
              <h3 className="text-2xl font-semibold mb-2">🌱 Our Mission</h3>
              <p>
                To empower farmers with premium agricultural inputs, technical support, and sustainable solutions.
                We strive to improve crop yields, minimize costs, and promote eco-conscious farming.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-xl border-l-4 border-green-600">
              <h3 className="text-2xl font-semibold mb-2">🌍 Our Vision</h3>
              <p>
                To be a leader in modern farming by blending traditional wisdom with innovation. We envision a
                prosperous rural economy where farmers thrive with dignity and sustainability.
              </p>
            </div>
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section title="Why Choose Adil Agro?">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <Image src="/leaf.png" alt="Eco Farming" width={60} height={60} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Eco-Friendly Inputs</h4>
              <p>We promote sustainable farming by providing organic and environmentally safe products.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <Image src="/aiimage.png" alt="Expert Support" width={60} height={60} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Expert Guidance</h4>
              <p>Our team of agro-scientists & advisors assist farmers throughout the crop cycle.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <Image src="/farming1.jpg" alt="Farmer First" width={60} height={60} className="mx-auto mb-4 rounded-full" />
              <h4 className="text-xl font-semibold mb-2">Farmer-Centric Values</h4>
              <p>We build long-term relationships with farmers based on trust and transparency.</p>
            </div>
          </div>
        </Section>

        {/* Certifications */}
        <Section title="Certifications & Trust">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
            {images.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                alt={item.alt}
                className={item.className}
                width={item.width}
                height={item.height}
              />
            ))}
          </div>
          <p className="mt-6 text-center text-green-700 font-medium">
            Our certifications from national and global agricultural bodies ensure quality, safety, and trust in
            every product we offer.
          </p>
        </Section>
      </main>
    </div>
  );
}
