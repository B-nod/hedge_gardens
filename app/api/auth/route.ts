import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
<<<<<<< HEAD
// Support both env naming conventions (README vs codebase)
const ADMIN_USER =
  process.env.ADMIN_USER || process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASS =
  process.env.ADMIN_PASS || process.env.ADMIN_PASSWORD || "admin123";
=======
const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "admin123";
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae

// Login endpoint
export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (username !== ADMIN_USER || password !== ADMIN_PASS) {
      return NextResponse.json(
        { authenticated: false, error: "Invalid credentials" },
<<<<<<< HEAD
        { status: 401 },
=======
        { status: 401 }
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
      );
    }

    // Create JWT token
    const token = jwt.sign({ username, role: "admin" }, JWT_SECRET, {
      expiresIn: "1d",
    });

    // Set HTTP-only cookie
    const response = NextResponse.json(
      { authenticated: true },
<<<<<<< HEAD
      { status: 200 },
=======
      { status: 200 }
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
    );

    response.cookies.set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
<<<<<<< HEAD
      sameSite: "lax", // Relax SameSite policy
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });
=======
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { authenticated: false, error: "Internal server error" },
<<<<<<< HEAD
      { status: 500 },
=======
      { status: 500 }
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
    );
  }
}

<<<<<<< HEAD
// logout endpoint

=======
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
// Check auth status
export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = (await cookieStore).get("admin_token")?.value;
<<<<<<< HEAD
=======

>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
    if (!token) {
      return NextResponse.json({ authenticated: false }, { status: 200 });
    }

    // Verify token
    jwt.verify(token, JWT_SECRET);
    return NextResponse.json({ authenticated: true }, { status: 200 });
<<<<<<< HEAD
  } catch {
=======
  } catch (error) {
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
    return NextResponse.json({ authenticated: false }, { status: 200 });
  }
}

// Logout endpoint
export async function DELETE() {
  const response = NextResponse.json(
    { authenticated: false, message: "Logged out successfully" },
<<<<<<< HEAD
    { status: 200 },
=======
    { status: 200 }
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
  );

  // Clear the cookie
  response.cookies.set({
    name: "admin_token",
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: new Date(0), // Expire immediately
  });

  return response;
}
