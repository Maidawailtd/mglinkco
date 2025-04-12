import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
})

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/" ||
    path === "/login" ||
    path === "/register" ||
    path.startsWith("/find-work") ||
    path.startsWith("/find-talent") ||
    path.startsWith("/categories") ||
    path.startsWith("/how-it-works") ||
    path.startsWith("/jobs/") ||
    path.startsWith("/freelancers/") ||
    path.startsWith("/search")

  // Get the token from cookies
  const token = request.cookies.get("mglink_auth_token")?.value

  // If the path requires authentication and there's no token, redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // If the user is logged in and trying to access login/register, redirect to dashboard
  if ((path === "/login" || path === "/register") && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Apply rate limiting
  return limiter(request, NextResponse)
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
}

