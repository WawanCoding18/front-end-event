import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { JWTExtended } from "./types/Auth";
import { getToken } from "next-auth/jwt";
import environment from "./config/environtment";

// //middleware requirement to enter dashboard page
// export async function middleware(request: NextRequest) {
//   const token: JWTExtended | null = await getToken({
//     req: request,
//     secret: environment.AUTH_SECRET,
//   });

//   const { pathname } = request.nextUrl;

//   if (pathname === "/auth/login" || pathname === "auth/register") {
//     if (token) {
//       return NextResponse.redirect(new URL("/", request.url));
//     }
//   }

//   if (pathname.startsWith("/admin")) {
//     if (!token) {
//       const url = new URL("/auth/login", request.url);
//       url.searchParams.set("callbackUrl", encodeURI(request.url));
//       return NextResponse.redirect(url);
//     }
//     console.log(token);
//     if (token?.user?.role !== "admin") {
//       return NextResponse.redirect(new URL("/", request.url));
//     }

//     if (pathname === "admin") {
//       return NextResponse.redirect(new URL("/admin/dashboard", request.url));
//     }
//   }

//   if (pathname.startsWith("/member")) {
//     if (!token) {
//       const url = new URL("/auth/login", request.url);
//       url.searchParams.set("callbackUrl", encodeURI(request.url));
//       return NextResponse.redirect(url);
//     }

//     if (pathname === "member") {
//       return NextResponse.redirect(new URL("/member/dashboard", request.url));
//     }
//   }
// }
// //especially when user is already logged in
// export const config = {
//   matcher: ["/auth/:path*", "/admin/:path*", "/member/:path*"],
// };

export async function middleware(request: NextRequest) {
  console.log("=== Middleware Triggered ===");
  console.log("Requested URL:", request.url);

  const token: JWTExtended | null = await getToken({
    req: request,
    secret: environment.AUTH_SECRET,
  });

  const { pathname } = request.nextUrl;
  console.log("Pathname:", pathname);
  console.log("Token:", token);

  // ===== AUTH PAGES =====
  if (pathname === "/auth/login" || pathname === "/auth/register") {
    console.log("Checking auth page...");
    if (token) {
      console.log("User already logged in, redirecting to home...");
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // ===== ADMIN AREA =====
  if (pathname.startsWith("/admin")) {
    console.log("Accessing admin area...");

    // Belum login → redirect ke login
    if (!token) {
      console.log("No token, redirecting to login...");
      const url = new URL("/auth/login", request.url);
      url.searchParams.set("callbackUrl", pathname); // simpan path
      return NextResponse.redirect(url);
    }

    // Role bukan admin → tolak
    // if (token?.user?.role !== "admin") {
    //   console.log("User not admin, redirecting to home...");
    //   return NextResponse.redirect(new URL("/", request.url));
    // }

    // Kalau cuma "/admin" → redirect ke dashboard
    if (pathname === "/admin") {
      console.log("Redirecting to /admin/dashboard...");
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }

    return NextResponse.next();
  }

  // ===== MEMBER AREA =====
  if (pathname.startsWith("/member")) {
    console.log("Accessing member area...");

    // Belum login → redirect ke login
    if (!token) {
      console.log("No token, redirecting to login...");
      const url = new URL("/auth/login", request.url);
      url.searchParams.set("callbackUrl", pathname); // simpan path
      return NextResponse.redirect(url);
    }

    // Kalau cuma "/member" → redirect ke dashboard
    if (pathname === "/member") {
      console.log("Redirecting to /member/dashboard...");
      return NextResponse.redirect(new URL("/member/dashboard", request.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/admin/:path*", "/member/:path*"],
};
