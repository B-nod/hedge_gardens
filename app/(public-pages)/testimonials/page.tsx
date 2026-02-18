import { Testimonial } from "../../../lib/entities/Testimonial";
import TestimonialsPage from "./pages";

<<<<<<< HEAD
// dynamic fetch
export const dynamic = "force-dynamic";

async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const hostname =
      process.env.HOSTNAME && process.env.HOSTNAME !== "0.0.0.0"
        ? process.env.HOSTNAME
        : "localhost";
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL ||
      `http://${hostname}:${process.env.PORT || 3001}`;

    const response = await fetch(
      `${baseUrl}/api/testimonials/all?approved=true`
      // {
      //   next: { revalidate: 3600 }, // Revalidate every hour
      // }
=======
async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/testimonials`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
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
<<<<<<< HEAD
  const fetchedTestimonials = await getTestimonials();
  const testimonials =
    fetchedTestimonials.length > 0
      ? fetchedTestimonials
      : [
    {
      id: 8,
      name: "Tester",
      message:
        '"We are new customers of this company and have been very favorably impressed with the quality of the work performed by your"',
      approved: true,
      createdAt: new Date("2025-10-18T18:45:39.578Z"),
    },
    {
      id: 7,
      name: "Jared Blackburn",
      message:
        "We are new customers of this company and have been very favorably impressed with the quality of the work performed by your employees.",
      approved: true,
      createdAt: new Date("2025-10-15T19:44:18.520Z"),
    },
    {
      id: 6,
      name: "Jarrod Villarreal",
      message:
        "Professional, reliable, and affordable. They've been maintaining our commercial property for over 3 years now. Never disappointed!",
      approved: true,
      createdAt: new Date("2025-10-15T14:32:51.960Z"),
    },
    {
      id: 5,
      name: "Justine Olsen",
      message:
        '"Best lawn service I have ever used. I use them for everything from mowing, fertilization and irrigation. I even had them pressure wash my house and it looks like new',
      approved: true,
      createdAt: new Date("2025-10-15T14:32:37.505Z"),
    },
  ];

=======
  const testimonials = await getTestimonials();
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
  return (
    <div>
      <TestimonialsPage testimonials={testimonials} />
    </div>
  );
};

export default Index;
