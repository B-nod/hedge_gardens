<<<<<<< HEAD
import fs from "node:fs/promises";
import path from "node:path";

import Image from "next/image";
import Link from "next/link";

export const runtime = "nodejs";

function isImageFile(fileName: string) {
  return /\.(jpe?g|png|webp|gif)$/i.test(fileName);
}

function sortByNumericName(a: string, b: string) {
  const aNum = Number.parseInt(a, 10);
  const bNum = Number.parseInt(b, 10);

  const aIsNum = Number.isFinite(aNum) && String(aNum) === a.split(".")[0];
  const bIsNum = Number.isFinite(bNum) && String(bNum) === b.split(".")[0];

  if (aIsNum && bIsNum) return aNum - bNum;
  if (aIsNum) return -1;
  if (bIsNum) return 1;
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

export default async function GalleryPage() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");

  let images: string[] = [];
  try {
    const files = await fs.readdir(galleryDir);
    images = files.filter(isImageFile).sort(sortByNumericName);
  } catch {
    images = [];
  }

  return (
    <main className="bg-white">
      {/* Banner */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-[url('/banner/banner-bg.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white z-10 p-[130px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Gallery</h1>
          <p className="text-gray-200">Home / Gallery</p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2 tracking-wider uppercase">
                Our Work
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Recent photos
              </h2>
            </div>
            <Link
              href="/"
              className="text-emerald-700 hover:text-emerald-800 font-medium"
            >
              ← Back to Home
            </Link>
          </div>

          {images.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-700">
              No images found in <code className="font-mono">public/gallery</code>
              . Add your <code className="font-mono">.jpg/.jpeg</code> files
              there and refresh.
            </div>
          ) : (
            <>
             

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
                {images.map((file) => {
                  const src = `/gallery/${encodeURIComponent(file)}`;
              

                  return (
                    <a
                      key={file}
                      href={src}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-black aspect-[3/4]"
                     
                    >
                      <Image
                        src={src}
                        alt={file}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        
                      </div>
                    </a>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

=======
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
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
