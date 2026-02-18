import Image from "next/image";
import Section from "../../../components/Section";

export default function Services() {
  const services = [
    {
      title: "Landscape Design",
      description:
        "Custom landscape designs tailored to your space and preferences, combining aesthetics with functionality.",
      image: "/images/services/design.jpg",
      features: [
        "Custom design concepts",
        "3D renderings",
        "Plant selection",
        "Hardscape planning",
      ],
    },
    {
      title: "Lawn Care",
      description:
        "Complete lawn maintenance services to keep your yard healthy and beautiful throughout the seasons.",
      image: "/images/services/lawn-care.jpg",
      features: [
        "Mowing & edging",
        "Fertilization",
        "Weed control",
        "Aeration",
      ],
    },
    {
      title: "Hardscaping",
      description:
        "Beautiful and durable hardscape features that enhance your outdoor living experience.",
      image: "/images/services/hardscaping.jpg",
      features: [
        "Patios & walkways",
        "Retaining walls",
        "Outdoor kitchens",
        "Water features",
      ],
    },
    {
      title: "Garden Maintenance",
      description:
        "Professional garden care to keep your plants healthy and your landscape looking its best.",
      image: "/images/services/garden-maintenance.jpg",
      features: [
        "Pruning & trimming",
        "Mulching",
        "Seasonal cleanups",
        "Irrigation maintenance",
      ],
    },
    {
      title: "Irrigation Systems",
      description:
        "Efficient watering solutions to keep your landscape healthy while conserving water.",
      image: "/images/services/irrigation.jpg",
      features: [
        "System design & installation",
        "Smart controllers",
        "Drip irrigation",
        "System maintenance",
      ],
    },
    {
      title: "Seasonal Services",
      description:
        "Specialized care for every season to protect and enhance your outdoor space year-round.",
      image: "/images/services/seasonal.jpg",
      features: [
        "Spring cleanups",
        "Fall preparation",
        "Snow removal",
        "Holiday lighting",
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-green-50">
        <div className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive landscaping services designed to transform and
            maintain your outdoor space
          </p>
        </div>
      </Section>

      {/* All Services */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-green-600 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and receive a free,
            no-obligation quote.
          </p>
          <a
            href="/contact"
            className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-medium transition-colors inline-block"
          >
            Get a Free Quote
          </a>
        </div>
      </Section>
    </main>
  );
}
    

