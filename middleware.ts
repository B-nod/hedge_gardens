import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("admin_token")?.value;


  // Public paths that don't require authentication
  if (
    pathname.startsWith("/api/auth") ||
    pathname === "/admin/login" ||
    !pathname.startsWith("/admin")
  ) {
    return NextResponse.next();
  }

  // Handle login page specifically
  if (pathname === "/admin" || pathname === "/admin/login") {
    if (token) {
      try {
        // If user is already authenticated, redirect to admin dashboard
        jwt.verify(token, JWT_SECRET);
        const url = request.nextUrl.clone();
        url.pathname = "/admin";
        return NextResponse.redirect(url);
      } catch (error) {
        // Token is invalid, allow access to login page
        return NextResponse.next();
      }
    }
    return NextResponse.next();
  }

  // For all other /admin routes, verify JWT
  if (!token) {
    // No token, redirect to login with return URL
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    // Verify token
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (error) {
    // Invalid token, clear it and redirect to login
    const response = NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
    response.cookies.delete("admin_token");
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
