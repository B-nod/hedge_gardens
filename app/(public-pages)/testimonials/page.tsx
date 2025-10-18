import { Testimonial } from "../../../lib/entities/Testimonial";
import TestimonialsPage from "./pages";

async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/testimonials`,
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

const Index = async () => {
  const testimonials = await getTestimonials();
  return (
    <div>
      <TestimonialsPage testimonials={testimonials} />
    </div>
  );
};

export default Index;
