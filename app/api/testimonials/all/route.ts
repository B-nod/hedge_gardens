import { NextResponse } from "next/server";
import AppDataSource from "../../../../lib/db";
import { Testimonial } from "../../../../lib/entities/Testimonial";

// Initialize the database connection
const initializeDb = async () => {
  if (!AppDataSource.isInitialized) {
<<<<<<< HEAD
    console.log("Initializing database connection...");
    await AppDataSource.initialize();
    console.log("Database connection initialized.");
  }
  return AppDataSource.getRepository(Testimonial);
  
=======
    await AppDataSource.initialize();
  }
  return AppDataSource.getRepository(Testimonial);
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
};

// GET: /api/testimonials/all - Get all testimonials (including unapproved)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const approvedParam = searchParams.get("approved");
  try {
    const testimonialRepository = await initializeDb();
    const where = approvedParam === "true" ? { approved: true } : undefined;
    const testimonials = await testimonialRepository.find({
      where,
      order: { createdAt: "DESC" },
    });
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching all testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
