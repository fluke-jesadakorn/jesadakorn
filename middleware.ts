import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  if (host === "www.jesadakorn.com") {
    const url = request.nextUrl.clone();
    url.host = "jesadakorn.com";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
