import Link from "next/link";

type ChapterPlaceholderProps = {
  number: string;
  title: string;
  note: string;
};

export function ChapterPlaceholder({ number, title, note }: ChapterPlaceholderProps) {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "72px 24px" }}>
      <p style={{ color: "var(--red-deep)", fontWeight: 800, letterSpacing: ".18em" }}>
        PLANNER PAGE · {number}
      </p>
      <h1 style={{ margin: "12px 0", fontFamily: "var(--font-editorial)", fontSize: "clamp(3rem, 9vw, 6rem)" }}>
        {title}
      </h1>
      <p style={{ maxWidth: 580, fontFamily: "var(--font-journal)", fontSize: "2rem", lineHeight: 1.2 }}>
        {note}
      </p>
      <Link href="/" style={{ display: "inline-block", marginTop: 36, borderBottom: "2px solid var(--red)" }}>
        Back to the open planner
      </Link>
    </main>
  );
}
