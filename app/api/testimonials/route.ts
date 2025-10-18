import { NextResponse } from "next/server";
import AppDataSource from "../../../lib/db";
import { Testimonial } from "../../../lib/entities/Testimonial";

// Initialize the database connection
const initializeDb = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  return AppDataSource.getRepository(Testimonial);
};

// GET: /api/testimonials - Get all approved testimonials
export async function GET() {
  try {
    const testimonialRepository = await initializeDb();
    const testimonials = await testimonialRepository.find({
      // where: { approved: true },
      order: { createdAt: "DESC" },
    });
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

// POST: /api/testimonials - Create a new testimonial
export async function POST(request: Request) {
  try {
    const { name, message } = await request.json();

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    const testimonialRepository = await initializeDb();
    const testimonial = testimonialRepository.create({
      name,
      message,
      approved: false, // New testimonials are not approved by default
    });

    await testimonialRepository.save(testimonial);
    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json(
      { error: "Failed to create testimonial" },
      { status: 500 }
    );
  }
}

// PATCH: /api/testimonials - Approve a testimonial (admin only)
export async function PATCH(request: Request) {
  try {
    // TODO: Add admin authentication
    // const session = await getServerSession(authOptions);
    // if (!session?.user?.isAdmin) {
    //   return NextResponse.json(
    //     { error: 'Unauthorized' },
    //     { status: 401 }
    //   );
    // }

    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "Testimonial ID is required" },
        { status: 400 }
      );
    }

    const testimonialRepository = await initializeDb();
    const testimonial = await testimonialRepository.findOne({ where: { id } });

    if (!testimonial) {
      return NextResponse.json(
        { error: "Testimonial not found" },
        { status: 404 }
      );
    }

    testimonial.approved = true;
    await testimonialRepository.save(testimonial);

    return NextResponse.json({ message: "Testimonial approved successfully" });
  } catch (error) {
    console.error("Error approving testimonial:", error);
    return NextResponse.json(
      { error: "Failed to approve testimonial" },
      { status: 500 }
    );
  }
}
