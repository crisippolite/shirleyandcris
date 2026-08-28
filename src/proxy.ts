import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";

const videoMetadata: Record<string, { contentType: string; size: string }> = {
  "/media/video/anniversary-film.mp4": {
    contentType: "video/mp4",
    size: "420480157",
  },
  "/media/video/meet-cute.mov": {
    contentType: "video/quicktime",
    size: "322577496",
  },
  "/media/video/wedding-feature.mov": {
    contentType: "video/quicktime",
    size: "8730313804",
  },
  "/media/video/cole-speech.mov": {
    contentType: "video/quicktime",
    size: "326336330",
  },
};

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/media/video/")) {
    if (request.method === "HEAD") {
      const metadata = videoMetadata[request.nextUrl.pathname];

      if (!metadata) {
        return new NextResponse(null, { status: 404 });
      }

      return new NextResponse(null, {
        status: 200,
        headers: {
          "Accept-Ranges": "bytes",
          "Cache-Control": "public, max-age=3600",
          "Content-Length": metadata.size,
          "Content-Type": metadata.contentType,
        },
      });
    }

    return NextResponse.next();
  }

  return updateSession(request);
}

export const config = {
  matcher: ["/studio/:path*", "/auth/:path*", "/media/video/:path*"],
};
