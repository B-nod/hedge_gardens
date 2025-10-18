import Image from "next/image";
import Link from "next/link";
import InstagramFeed from "../components/InstagramFeed";
import Section from "../components/Section";
import WhoWeAreSection from "../components/WhoAreWe";
import { Testimonial } from "../lib/entities/Testimonial";
import ServicesSection from "../section/service";
import TestimonialSection from "../section/Testimonial";
import WhyChooseUsSection from "../section/WhyChooseUs";
import WorksPortfolioSection from "../section/WorkPortfolio";

export default async function Home() {
  const testimonials = await getTestimonials();

  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-[url('/banner/banner-bg.webp')] bg-cover bg-center relative ">
        <div className="bg-black/30 p-6 rounded-xl w-full h-full absolute  inset-0" />
        <div className="text-center py-52  relative">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Outdoor Space
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Professional landscaping services to create and maintain beautiful
            outdoor environments
          </p>
          <div className="space-x-4 flex  justify-center items-center flex-wrap gap-2">
            <Link
              href="/testimonials"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Review Us
            </Link>
            <Link
              href="/#services"
              className="border-2 border-green-600 text-white hover:bg-green-50 hover:text-green-600 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-6">
          <Image
            src="/banner/banner-pattern.webp"
            alt="Banner"
            fill
            className="object-cover"
          />
        </div>
      </Section>

      {/* Featured Services */}
      <WhoWeAreSection />
      <ServicesSection />
      <WhyChooseUsSection />
      {/* <Section
        title="Our Services"
        description="Professional landscaping services tailored to your needs"
        className="bg-gray-600"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Garden Design",
              description:
                "Custom landscape designs that transform your outdoor space into a beautiful retreat.",
              icon: "🌿",
            },
            {
              title: "Lawn Care",
              description:
                "Comprehensive lawn maintenance to keep your yard healthy and vibrant all year round.",
              icon: "🌱",
            },
            {
              title: "Hardscaping",
              description:
                "Patios, walkways, and retaining walls to enhance your outdoor living space.",
              icon: "🧱",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </Section> */}

      <WorksPortfolioSection />

      {/* <Section className="bg-green-600 text-white padding-responsive my-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and lets bring your vision
            to life.
          </p>
          <Link
            href="/contact"
            className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-medium transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </Section> */}

      <div className="text-center">
        {/* Header */}

        <p className="text-xs sm:text-sm font-medium text-gray-600 mb-3 sm:mb-4 tracking-wider">
          Testimonials
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto px-4">
          What our clients say about our landscaping services
        </h2>
        <TestimonialSection testimonials={testimonials} />
      </div>
      {/* <Section
        title="Testimonials"
        description="What our clients say about our landscaping services"
        className="bg-white"
      >
        <TestimonialsPage />
      </Section> */}

      {/* Call to Action */}

      {/* <InstagramFeed /> */}
    </main>
  );
}

async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/testimonials/all?approved=true`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch testimonials");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}
