import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/login"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));
  const corporateEmail = request.cookies.get("equivator_email")?.value;

  if (!isPublic && !corporateEmail) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (corporateEmail && !corporateEmail.endsWith("@equivator.com")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
