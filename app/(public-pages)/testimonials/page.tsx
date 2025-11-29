import { Testimonial } from "../../../lib/entities/Testimonial";
import TestimonialsPage from "./pages";

// dynamic fetch
export const dynamic = "force-dynamic";

async function getTestimonials(): Promise<Testimonial[]> {
  try {
    console.log(
      "object",
      `${process.env.NEXT_PUBLIC_APP_URL}/api/testimonials`
    );
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/testimonials`
      // {
      //   next: { revalidate: 3600 }, // Revalidate every hour
      // }
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
  const testimonials = await getTestimonials() || [
  {
    id: 8,
    name: 'Tester',
    message: '"We are new customers of this company and have been very favorably impressed with the quality of the work performed by your"',
    approved: true,
    createdAt: '2025-10-18T18:45:39.578Z'
  },
  {
    id: 7,
    name: 'Jared Blackburn',
    message: 'We are new customers of this company and have been very favorably impressed with the quality of the work performed by your employees.',
    approved: true,
    createdAt: '2025-10-15T19:44:18.520Z'
  },
  {
    id: 6,
    name: 'Jarrod Villarreal',
    message: "Professional, reliable, and affordable. They've been maintaining our commercial property for over 3 years now. Never disappointed!",
    approved: true,
    createdAt: '2025-10-15T14:32:51.960Z'
  },
  {
    id: 5,
    name: 'Justine Olsen',
    message: '"Best lawn service I have ever used. I use them for everything from mowing, fertilization and irrigation. I even had them pressure wash my house and it looks like new',
    approved: true,
    createdAt: '2025-10-15T14:32:37.505Z'
  }
]

  return (
    <div>
      <TestimonialsPage testimonials={testimonials} />
    </div>
  );
};

export default Index;
