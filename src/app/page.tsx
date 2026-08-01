import Image from "next/image";
import Link from "next/link";
import { publicNavigation } from "@/lib/site";
import styles from "./page.module.css";

const ANNIVERSARY_FILM =
  "https://www.dropbox.com/scl/fi/fhse588ian8qept745mbo/Shirley-and-Cris-Anniversary.mp4?rlkey=7ipqntuc2xl4enpaagbpsb9x0&dl=1";

const films = [
  {
    number: "01",
    eyebrow: "Before the vows",
    title: "How We Met",
    note: "The meet-cute interview we played at the ceremony—our own little opening scene.",
    href: "https://www.dropbox.com/scl/fi/02a4ytqogae5e68z9rbc7/Wedding-Moving-Picture-08272016.mov?rlkey=plksd5k1euqz595bprtaz4tcy&dl=0",
  },
  {
    number: "02",
    eyebrow: "August 27, 2016",
    title: "The Wedding Feature",
    note: "The day at Ramhorn Farm, lovingly cut together by our photographers.",
    href: "https://www.dropbox.com/scl/fi/xhpfaru3asmijfpldubcu/5.-IPPOLITE-Wedding-FEATURE.mov?rlkey=ipzfkdeqt7m3xc87v833m1i8j&dl=0",
  },
  {
    number: "03",
    eyebrow: "Ten years later",
    title: "Still Us",
    note: "A new film for the life we made, and the pages we have not filled yet.",
    href: "#anniversary-film",
  },
] as const;

const milestones = [
  {
    year: "1997",
    month: "JUL",
    day: "25",
    title: "The day we met",
    copy: "Shirley’s birthday. The first page of a story neither of us knew we were beginning.",
    image: "/media/photos/early-years-formal.jpg",
    alt: "Shirley and Cris dressed up together in their early years",
    sticker: "first hello",
  },
  {
    year: "2012",
    month: "APR",
    day: "15",
    title: "The day we got engaged",
    copy: "Cris proposed in the very same spot where the story began in 1997.",
    image: "/media/photos/engaged-ring.jpg",
    alt: "Shirley hugging Cris and showing her engagement ring",
    sticker: "she said yes!",
  },
  {
    year: "2016",
    month: "AUG",
    day: "27",
    title: "The day we married",
    copy: "At Ramhorn Farm, with Uncle Ed, Lambeau, and the people who knew our long story.",
    image: "/media/photos/wedding-vows.png",
    alt: "Shirley and Cris holding hands during their wedding ceremony",
    sticker: "double happiness",
  },
  {
    year: "2026",
    month: "AUG",
    day: "27",
    title: "Ten years married",
    copy: "Back where we celebrated, still laughing, still choosing each other, still making plans.",
    image: "/media/photos/anniversary-table.jpg",
    alt: "Shirley and Cris seated together at their anniversary table",
    sticker: "and counting…",
  },
] as const;

type LambyPose = "proud" | "peek" | "card" | "sleep";

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

function SectionHeading({
  label,
  title,
  note,
}: {
  label: string;
  title: string;
  note: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <p>{label}</p>
      <h2>{title}</h2>
      <span>{note}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={`${styles.washi} ${styles.washiTop}`} aria-hidden="true" />

      <header className={styles.siteHeader}>
        <Link href="/" className={styles.brand} aria-label="Shirley and Cris home">
          <Image
            src="/media/brand/monogram.png"
            alt=""
            width={78}
            height={78}
            priority
          />
          <span>
            <strong>Shirley + Cris</strong>
            <small>our little book of us</small>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Our story chapters">
          {publicNavigation.map((item, index) => (
            <Link key={item.href} href={item.href} aria-current={index === 0 ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.redLabel}>A very special date · 08.27.2026</p>
          <h1 id="hero-title">Ten years, and every little date between.</h1>
          <p className={styles.heroIntro}>
            For Shirley—the girl I met on her birthday, the woman I married, and
            my favorite person in every chapter since.
          </p>
          <div className={styles.dateRibbon} aria-label="Together since July 25, 1997">
            <span>together since</span>
            <strong>07 · 25 · 1997</strong>
          </div>
          <a className={styles.primaryLink} href="#anniversary-film">
            Watch our anniversary film <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className={styles.heroAlbum}>
          <figure className={styles.heroPhoto}>
            <div className={`${styles.tape} ${styles.tapePink}`} aria-hidden="true" />
            <Image
              src="/media/photos/engagement-sunset.jpg"
              alt="Shirley and Cris sitting together at the marina at sunset"
              fill
              priority
              sizes="(max-width: 840px) 92vw, 48vw"
            />
            <figcaption>the two of us · always</figcaption>
          </figure>
          <div className={styles.miniSticker} aria-hidden="true">
            <span>♡</span> save every date
          </div>
          <LambySticker
            pose="peek"
            className={styles.heroLamby}
            label="Lamby, a tiny shaggy black dog in a tuxedo, peeking over the page"
          />
        </div>
      </section>

      <section className={styles.filmSection} id="anniversary-film" aria-labelledby="film-title">
        <div className={`${styles.washi} ${styles.washiDumplings}`} aria-hidden="true">
          <span>●</span><span>♡</span><span>●</span><span>♡</span><span>●</span><span>♡</span>
        </div>
        <div className={styles.filmIntro}>
          <div>
            <p className={styles.redLabel}>The anniversary film · 03:25</p>
            <h2 id="film-title">For Shirley, with all my love.</h2>
          </div>
          <p>
            Ten years after the wedding—and twenty-nine years after that first
            hello—this is the story I still want to watch forever.
          </p>
        </div>

        <div className={styles.filmFrame}>
          <div className={`${styles.tape} ${styles.tapeRedLeft}`} aria-hidden="true" />
          <div className={`${styles.tape} ${styles.tapeRedRight}`} aria-hidden="true" />
          <video
            controls
            preload="metadata"
            poster="/media/video/anniversary-poster.jpg"
            aria-label="Shirley and Cris ten-year anniversary film"
          >
            <source src={ANNIVERSARY_FILM} type="video/mp4" />
            Your browser does not support embedded video. You can{" "}
            <a href={ANNIVERSARY_FILM}>watch the anniversary film here</a>.
          </video>
        </div>
        <div className={styles.filmFooter}>
          <p className={styles.handNote}>Psst… start here, Shirley. ♡</p>
          <span className={styles.doubleHappiness} lang="zh-Hant" aria-label="Double happiness">
            囍
          </span>
          <LambySticker pose="proud" className={styles.filmLamby} />
        </div>
      </section>

      <section className={styles.timelineSection} aria-labelledby="dates-title">
        <SectionHeading
          label="Our story · four dates to circle"
          title="The dates I always want to remember"
          note="A life together, filed the way Shirley would: in photographs, little notes, and very important stickers."
        />

        <ol className={styles.milestones}>
          {milestones.map((milestone, index) => (
            <li key={milestone.year} className={styles.milestone}>
              <div className={styles.calendarDate} aria-label={`${milestone.month} ${milestone.day}, ${milestone.year}`}>
                <span>{milestone.month}</span>
                <strong>{milestone.day}</strong>
                <small>{milestone.year}</small>
              </div>
              <figure className={styles.milestonePhoto}>
                <Image
                  src={milestone.image}
                  alt={milestone.alt}
                  fill
                  sizes="(max-width: 760px) 72vw, 24vw"
                />
              </figure>
              <div className={styles.milestoneCopy}>
                <span className={`${styles.eventSticker} ${styles[`sticker${index + 1}`]}`}>
                  {milestone.sticker}
                </span>
                <h3>{milestone.title}</h3>
                <p>{milestone.copy}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.chapterLinkWrap}>
          <Link className={styles.chapterLink} href="/our-story">
            Open the full story <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className={styles.weddingSection} aria-labelledby="wedding-title">
        <div className={styles.weddingCopy}>
          <p className={styles.redLabel}>Chapter three · Ramhorn Farm</p>
          <h2 id="wedding-title">The very best kind of happiness.</h2>
          <p>
            August 27, 2016. Red roses, black tuxedos, a ceremony officiated by
            Uncle Ed—and one very important little dog dressed for the occasion.
          </p>
          <Link className={styles.inkLink} href="/wedding-day">
            Turn to the wedding chapter <span aria-hidden="true">→</span>
          </Link>
          <div className={styles.pawTrail} aria-hidden="true">● · ● · ●</div>
        </div>

        <div className={styles.weddingCollage}>
          <figure className={`${styles.photoFrame} ${styles.photoReveal}`}>
            <span className={`${styles.tape} ${styles.tapeJade}`} aria-hidden="true" />
            <Image
              src="/media/photos/wedding-reveal.png"
              alt="Shirley reacting with joy on the morning of the wedding"
              fill
              sizes="(max-width: 760px) 80vw, 32vw"
            />
          </figure>
          <figure className={`${styles.photoFrame} ${styles.photoGarden}`}>
            <span className={`${styles.tape} ${styles.tapeBlack}`} aria-hidden="true" />
            <Image
              src="/media/photos/wedding-garden.png"
              alt="Shirley and Cris walking together through the wedding garden"
              fill
              sizes="(max-width: 760px) 68vw, 26vw"
            />
          </figure>
          <figure className={`${styles.photoFrame} ${styles.photoDip}`}>
            <span className={`${styles.tape} ${styles.tapePinkSmall}`} aria-hidden="true" />
            <Image
              src="/media/photos/wedding-dip.png"
              alt="Cris dipping and kissing Shirley on their wedding day"
              fill
              sizes="(max-width: 760px) 56vw, 19vw"
            />
          </figure>
          <LambySticker pose="card" className={styles.weddingLamby} />
          <p className={styles.lambyCaption}>Lamby says:<br /><strong>“Best. Day. Ever.”</strong></p>
        </div>
      </section>

      <section className={styles.filmShelf} aria-labelledby="film-shelf-title">
        <SectionHeading
          label="The moving pictures"
          title="Three films, one very long love story"
          note="From the story we told our wedding guests, to the day itself, to this tenth-anniversary surprise."
        />
        <div className={styles.filmCards}>
          {films.map((film) => (
            <article className={styles.filmCard} key={film.number}>
              <span className={styles.filmNumber}>{film.number}</span>
              <p>{film.eyebrow}</p>
              <h3>{film.title}</h3>
              <span>{film.note}</span>
              <a href={film.href} target={film.href.startsWith("http") ? "_blank" : undefined} rel={film.href.startsWith("http") ? "noreferrer" : undefined}>
                {film.number === "03" ? "Play above" : "Watch the film"} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.yearsSection} aria-labelledby="years-title">
        <div className={styles.yearsPhotos}>
          <figure className={`${styles.memoryPhoto} ${styles.memoryOne}`}>
            <Image
              src="/media/photos/machu-picchu.jpg"
              alt="Shirley and Cris together at Machu Picchu"
              fill
              sizes="(max-width: 760px) 76vw, 28vw"
            />
            <figcaption>adventures, always</figcaption>
          </figure>
          <figure className={`${styles.memoryPhoto} ${styles.memoryTwo}`}>
            <Image
              src="/media/photos/through-years-portrait.jpg"
              alt="Shirley and Cris smiling together through the years"
              fill
              sizes="(max-width: 760px) 62vw, 25vw"
            />
            <figcaption>still my favorite face</figcaption>
          </figure>
          <figure className={`${styles.memoryPhoto} ${styles.memoryThree}`}>
            <Image
              src="/media/photos/wedding-laugh.png"
              alt="Shirley and Cris laughing together on their wedding day"
              fill
              sizes="(max-width: 760px) 54vw, 20vw"
            />
          </figure>
        </div>
        <div className={styles.yearsCopy}>
          <div className={`${styles.tape} ${styles.tapeDays}`} aria-hidden="true">MON · TUE · WED · THU · FRI · SAT · SUN</div>
          <p className={styles.redLabel}>The pages in between</p>
          <h2 id="years-title">A whole life lives between the big dates.</h2>
          <p>
            The trips, the pups, the football games, the ordinary Tuesdays, and
            every photograph that proves how much life can fit into twenty-nine years.
          </p>
          <div className={styles.stickerRow} aria-hidden="true">
            <span>✈ trip!</span><span>♡ date night</span><span>🏈 game day</span><span>🐾 pups</span>
          </div>
          <Link className={styles.primaryLink} href="/through-the-years">
            Browse through the years <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className={styles.closing} aria-label="Anniversary dedication">
        <div className={`${styles.washi} ${styles.washiBottom}`} aria-hidden="true" />
        <LambySticker pose="sleep" className={styles.closingLamby} />
        <p className={styles.redLabel}>This page is never really finished</p>
        <h2>Here’s to all the little dates still to come.</h2>
        <p className={styles.signature}>Happy ten years, Shirley. I love you. — Cris</p>
        <span className={styles.doubleHappinessLarge} lang="zh-Hant" aria-label="Double happiness">囍</span>
      </section>

      <footer className={styles.footer}>
        <span>Shirley + Cris · est. 07.25.1997</span>
        <nav aria-label="Footer navigation">
          {publicNavigation.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
      </footer>
    </main>
  );
}
