import Image from "next/image";
import Section from "../../../components/Section";

const images = Array.from({ length: 8 }, (_, i) => ({
  src: `https://picsum.photos/seed/${i + 200}/800/600`,
  title: `Gallery Image ${i + 1}`,
  description: `Description of gallery image ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <Section  
      title="Our Gallery"
      description="Explore our landscaping projects and get inspired for your outdoor space"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="aspect-w-4 aspect-h-3 w-full">
              <Image
                src={item.src}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
