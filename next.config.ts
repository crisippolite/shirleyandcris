import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/media/video/anniversary-film.mp4",
        destination:
          "https://dl.dropboxusercontent.com/scl/fi/fhse588ian8qept745mbo/Shirley-and-Cris-Anniversary.mp4?rlkey=7ipqntuc2xl4enpaagbpsb9x0&raw=1",
      },
      {
        source: "/media/video/meet-cute.mov",
        destination:
          "https://dl.dropboxusercontent.com/scl/fi/02a4ytqogae5e68z9rbc7/Wedding-Moving-Picture-08272016.mov?rlkey=plksd5k1euqz595bprtaz4tcy&raw=1",
      },
      {
        source: "/media/video/wedding-feature.mov",
        destination:
          "https://dl.dropboxusercontent.com/scl/fi/xhpfaru3asmijfpldubcu/5.-IPPOLITE-Wedding-FEATURE.mov?rlkey=ipzfkdeqt7m3xc87v833m1i8j&raw=1",
      },
      {
        source: "/media/video/cole-speech.mov",
        destination:
          "https://dl.dropboxusercontent.com/scl/fi/ivvgiyrdz8eod756cd3n3/Cole-Speech.mov?rlkey=up5lt41246ul8q8gz47xcqnus&raw=1",
      },
    ];
  },
};

export default nextConfig;
