import Section from "../../../components/Section";
import Image from "next/image";

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-green-50">
        <div className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About GreenScape Landscaping
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating beautiful, sustainable outdoor spaces since 2010
          </p>
        </div>
      </Section>

      {/* Our Story */}
      <Section title="Our Story" id="our-story">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative h-80 w-full rounded-xl overflow-hidden">
              <Image
                src="/images/about-1.jpg"
                alt="Our team working on a landscape project"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">
              From Humble Beginnings
            </h3>
            <p className="text-gray-600 mb-4">
              Founded in 2010 by John and Sarah Green, GreenScape started as a
              small family business with a passion for transforming ordinary
              yards into extraordinary outdoor living spaces. What began with a
              single truck and a dream has grown into one of the most trusted
              landscaping companies in the region.
            </p>
            <p className="text-gray-600">
              Today, we&apos;re proud to serve both residential and commercial
              clients, bringing over a decade of expertise to every project we
              undertake. Our commitment to quality, sustainability, and customer
              satisfaction remains the foundation of everything we do.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section title="Our Values" className="bg-gray-50">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Sustainability",
              description:
                "We prioritize eco-friendly practices and materials to create beautiful landscapes that respect the environment.",
              icon: "♻️",
            },
            {
              title: "Quality",
              description:
                "From design to installation and maintenance, we never compromise on the quality of our workmanship.",
              icon: "✨",
            },
            {
              title: "Customer Focus",
              description:
                "Your vision is our priority. We listen carefully and work closely with you to bring your outdoor dreams to life.",
              icon: "🤝",
            },
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Meet the Team */}
      <Section title="Meet the Team">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "John Green",
              role: "Founder & CEO",
              bio: "With over 20 years of experience in landscape design, John leads our team with vision and expertise.",
              image: "/images/team-john.jpg",
            },
            {
              name: "Sarah Green",
              role: "Head Designer",
              bio: "Sarah brings creativity and an eye for detail to every project, ensuring stunning results.",
              image: "/images/team-sarah.jpg",
            },
            {
              name: "Mike Johnson",
              role: "Operations Manager",
              bio: "Mike keeps our projects running smoothly with his exceptional organizational skills.",
              image: "/images/team-mike.jpg",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-green-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
