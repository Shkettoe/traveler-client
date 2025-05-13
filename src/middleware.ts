import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const isBackendRunning = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/health`
  )
    .then((res) => res.status === 404)
    .catch(() => false);

  if (!isBackendRunning)
    return NextResponse.redirect(new URL("/maintenance", request.url));

  const token = request.cookies.get("access_token");
  const isAuthPage =
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register");

  if (!token && !isAuthPage)
    return NextResponse.redirect(new URL("/login", request.url));

  if (token && isAuthPage)
    return NextResponse.redirect(new URL("/profile", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|maintenance).*)",
  ],
};
