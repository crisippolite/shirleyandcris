import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { publicNavigation } from "@/lib/site";
import styles from "./page.module.css";

const ANNIVERSARY_FILM =
  "https://www.dropbox.com/scl/fi/fhse588ian8qept745mbo/Shirley-and-Cris-Anniversary.mp4?rlkey=7ipqntuc2xl4enpaagbpsb9x0&dl=1";

export const metadata: Metadata = {
  title: "Ten Years",
  description:
    "A tenth-anniversary film and love letter for Shirley—ten years married, twenty-nine years together, and still counting.",
};

type LambyPose = "proud" | "peek" | "card" | "sleep";
type TapeColor = "red" | "pink" | "jade" | "gold" | "black";

const memories = [
  {
    year: "2016",
    title: "We said I do",
    note: "Ramhorn Farm · the beginning of married life",
    image: "/media/photos/wedding-reflection.png",
    alt: "Shirley and Cris sharing a quiet moment on their wedding day",
    tape: "red" as TapeColor,
  },
  {
    year: "2018",
    title: "Rooting for us",
    note: "Game days, good seats, and the home team",
    image: "/media/photos/history/baseball-day.jpg",
    alt: "Shirley and Cris together at a baseball game",
    tape: "jade" as TapeColor,
  },
  {
    year: "2020",
    title: "The little days",
    note: "Home together—and somehow still laughing",
    image: "/media/photos/history/stay-home.jpg",
    alt: "Shirley and Cris smiling together in a bathtub at home",
    tape: "pink" as TapeColor,
  },
  {
    year: "2021",
    title: "Always kiss me",
    note: "Ocean air · one very good afternoon",
    image: "/media/photos/history/ocean-kiss.jpg",
    alt: "Shirley and Cris kissing with the ocean behind them",
    tape: "black" as TapeColor,
  },
  {
    year: "2022",
    title: "More places, same us",
    note: "A heart tucked into the travel pages",
    image: "/media/photos/history/island-heart.jpg",
    alt: "Shirley and Cris making a heart together while traveling",
    tape: "gold" as TapeColor,
  },
  {
    year: "2026",
    title: "Ten years married",
    note: "A table for two · and everything still ahead",
    image: "/media/photos/anniversary-table.jpg",
    alt: "Shirley and Cris seated together at a lace-covered anniversary table",
    tape: "red" as TapeColor,
  },
] as const;

function LambySticker({
  pose,
  className = "",
  label,
}: {
  pose: LambyPose;
  className?: string;
  label?: string;
}) {
  return (
    <figure className={`${styles.lambySticker} ${styles[`lamby-${pose}`]} ${className}`}>
      <div className={styles.lambyCrop}>
        <Image
          src="/illustrations/lamby-character-sheet-v1.png"
          alt={label ?? ""}
          width={1254}
          height={1254}
          className={styles.lambySheet}
        />
      </div>
    </figure>
  );
}

function MemoryPhoto({ memory, index }: { memory: (typeof memories)[number]; index: number }) {
  return (
    <li className={`${styles.memory} ${styles[`memory${index + 1}`]}`}>
      <figure className={styles.photo}>
        <span className={`${styles.photoTape} ${styles[`tape-${memory.tape}`]}`} aria-hidden="true" />
        <div className={styles.photoWindow}>
          <Image src={memory.image} alt={memory.alt} fill sizes="(max-width: 760px) 82vw, 30vw" />
        </div>
        <figcaption>
          <strong>{memory.title}</strong>
          <span>{memory.note}</span>
        </figcaption>
      </figure>
      <span className={styles.yearSticker}>{memory.year}</span>
    </li>
  );
}

export default function TenYearsPage() {
  return (
    <main className={styles.page}>
      <div className={`${styles.washi} ${styles.washiTop}`} aria-hidden="true" />

      <header className={styles.siteHeader}>
        <Link href="/" className={styles.brand} aria-label="Shirley and Cris home">
          <Image src="/media/brand/monogram.png" alt="" width={78} height={78} priority />
          <span>
            <strong>Shirley + Cris</strong>
            <small>our little book of us</small>
          </span>
        </Link>
        <nav className={styles.nav} aria-label="Our story chapters">
          {publicNavigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={item.href === "/ten-years" ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Planner page 05 · August 27, 2026</p>
          <span className={styles.giantTen} aria-hidden="true">10</span>
          <h1 id="hero-title">Ten years.<br />Still my favorite person.</h1>
          <p className={styles.heroIntro}>
            Shirley, this page is for the decade since our wedding—and for every
            little day that made it ours.
          </p>
          <a className={styles.primaryLink} href="#our-film">
            Press play, my love <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className={styles.heroAlbum}>
          <figure className={`${styles.photo} ${styles.heroPhoto}`}>
            <span className={`${styles.photoTape} ${styles["tape-pink"]}`} aria-hidden="true" />
            <div className={styles.photoWindow}>
              <Image
                src="/media/photos/through-years-portrait.jpg"
                alt="Shirley and Cris walking hand in hand"
                fill
                priority
                sizes="(max-width: 820px) 92vw, 52vw"
              />
            </div>
            <figcaption>
              <strong>the anniversary chapter</strong>
              <span>still walking this way—together</span>
            </figcaption>
          </figure>
          <div className={styles.anniversaryStamp} aria-label="Thursday, August 27, 2026">
            <small>THU</small><strong>27</strong><span>AUG · 2026</span>
          </div>
          <div className={styles.heroSticker} aria-hidden="true">♡ ten out of ten</div>
          <LambySticker
            pose="peek"
            className={styles.heroLamby}
            label="Lamby peeking into the tenth-anniversary scrapbook"
          />
        </div>
      </section>

      <section className={styles.filmSection} id="our-film" aria-labelledby="film-title">
        <div className={`${styles.washi} ${styles.washiFilm}`} aria-hidden="true">
          <span>♡</span><span>10</span><span>♡</span><span>10</span><span>♡</span><span>10</span><span>♡</span>
        </div>
        <div className={styles.filmHeading}>
          <div>
            <p className={styles.eyebrow}>The anniversary film · 03:25</p>
            <h2 id="film-title">Before anything else, watch this.</h2>
          </div>
          <p>
            Ten years after we said “I do”—and twenty-nine years after that
            Friday night—this is my little film for you.
          </p>
        </div>
        <div className={styles.filmFrame}>
          <span className={`${styles.cornerTape} ${styles.cornerTapeLeft}`} aria-hidden="true" />
          <span className={`${styles.cornerTape} ${styles.cornerTapeRight}`} aria-hidden="true" />
          <video
            controls
            playsInline
            preload="metadata"
            poster="/media/video/anniversary-poster.jpg"
            aria-label="Shirley and Cris tenth-anniversary film"
          >
            <source src={ANNIVERSARY_FILM} type="video/mp4" />
            Your browser does not support embedded video. You can{" "}
            <a href={ANNIVERSARY_FILM}>watch the anniversary film here</a>.
          </video>
        </div>
        <div className={styles.filmNote}>
          <span>start here, Shirley ♡</span>
          <i aria-hidden="true">囍</i>
        </div>
      </section>

      <section className={styles.decadeSection} aria-labelledby="decade-title">
        <div className={styles.decadeHeading}>
          <p className={styles.eyebrow}>2016 → 2026 · notes from the margins</p>
          <h2 id="decade-title">A decade made of little days.</h2>
          <p>
            The wedding was one beautiful date. The marriage became all the
            ordinary, hilarious, faraway, stay-at-home dates that followed.
          </p>
        </div>

        <div className={styles.yearRail} aria-label="Years from 2016 through 2026">
          {[2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].map((year) => (
            <span key={year} className={year === 2016 || year === 2026 ? styles.circledYear : undefined}>{year}</span>
          ))}
        </div>

        <ol className={styles.memoryBoard}>
          {memories.map((memory, index) => (
            <MemoryPhoto key={memory.year} memory={memory} index={index} />
          ))}
        </ol>

        <div className={styles.marginNote}>
          <span aria-hidden="true">✦</span>
          turns out “forever” is mostly a lot of really good Tuesdays
        </div>
      </section>

      <section className={styles.letterSection} aria-labelledby="letter-title">
        <div className={styles.letterCollage}>
          <figure className={`${styles.photo} ${styles.letterPhotoBack}`}>
            <span className={`${styles.photoTape} ${styles["tape-black"]}`} aria-hidden="true" />
            <div className={styles.photoWindow}>
              <Image
                src="/media/photos/wedding-laugh.png"
                alt="Shirley and Cris laughing together on their wedding day"
                fill
                sizes="(max-width: 820px) 75vw, 32vw"
              />
            </div>
            <figcaption><strong>then</strong><span>08 · 27 · 2016</span></figcaption>
          </figure>
          <figure className={`${styles.photo} ${styles.letterPhotoFront}`}>
            <span className={`${styles.photoTape} ${styles["tape-jade"]}`} aria-hidden="true" />
            <div className={styles.photoWindow}>
              <Image
                src="/media/photos/anniversary-table.jpg"
                alt="Shirley and Cris celebrating together at an anniversary table"
                fill
                sizes="(max-width: 820px) 75vw, 34vw"
              />
            </div>
            <figcaption><strong>and now</strong><span>ten years—and counting</span></figcaption>
          </figure>
          <LambySticker pose="card" className={styles.letterLamby} label="Lamby delivering a love note" />
        </div>

        <article className={styles.letter}>
          <span className={styles.letterClip} aria-hidden="true">♡</span>
          <p className={styles.eyebrow}>A note to keep forever</p>
          <h2 id="letter-title">Shirley,</h2>
          <p>
            Twenty-nine years ago, on your birthday, I met the person who would
            become the center of every chapter that mattered.
          </p>
          <p>
            Ten years ago, we stood at Ramhorn Farm and made our long story
            official. Since then, the grand adventures have been wonderful. But
            what I love most is the life between the photographs—the ordinary
            days, private jokes, pups underfoot, plans scribbled into calendars,
            and all the quiet ways we keep choosing one another.
          </p>
          <p>
            If I could turn back to that Friday night in 1997, I would choose
            every step that led me here again.
          </p>
          <p className={styles.letterClose}>Happy tenth anniversary. I love you.</p>
          <p className={styles.signature}>Always,<br />Cris</p>
        </article>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <div className={styles.closingTab}>NEXT PAGE</div>
        <p className={styles.eyebrow}>August 28, 2026 → everything after</p>
        <h2 id="closing-title">The best date is still the next one.</h2>
        <p>
          More trips. More pups. More stickers in the planner. More ordinary
          days I get to call ours.
        </p>
        <Link className={styles.primaryLink} href="/">
          Start our book again <span aria-hidden="true">↺</span>
        </Link>
        <LambySticker pose="proud" className={styles.closingLamby} label="Lamby ready for the next chapter" />
        <span className={styles.doubleHappiness} lang="zh-Hant" aria-label="Double happiness">囍</span>
      </section>

      <footer className={styles.footer}>
        <span>Shirley + Cris · est. 07.25.1997</span>
        <Link href="/through-the-years">← Through the Years</Link>
        <Link href="/">Home ↺</Link>
      </footer>
    </main>
  );
}
