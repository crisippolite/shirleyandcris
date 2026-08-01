import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { publicNavigation } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Through the Years",
  description:
    "Twenty-nine years of trips, pups, game days, celebrations, and ordinary magic.",
};

type LambyPose = "proud" | "peek" | "card" | "sleep";
type TapeColor = "red" | "pink" | "jade" | "gold" | "black";

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

function Photo({
  src,
  alt,
  caption,
  tape,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  tape: TapeColor;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`${styles.photo} ${className}`}>
      <span className={`${styles.photoTape} ${styles[`tape-${tape}`]}`} aria-hidden="true" />
      <div className={styles.photoWindow}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 760px) 82vw, (max-width: 1100px) 42vw, 430px"
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function SiteHeader() {
  return (
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
          <Link
            key={item.href}
            href={item.href}
            aria-current={item.href === "/through-the-years" ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default function ThroughTheYearsPage() {
  return (
    <main className={styles.page}>
      <div className={`${styles.washi} ${styles.washiTop}`} aria-hidden="true" />
      <SiteHeader />

      <section className={styles.hero} aria-labelledby="years-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Chapter 04 · the pages between</p>
          <h1 id="years-title">Twenty-nine years of little days.</h1>
          <p>
            Big dates make the timeline. Everything between them made the life:
            the trips, the pups, the games, the parties, and thousands of very
            ordinary days spent together.
          </p>
          <a className={styles.primaryLink} href="#the-calendar">
            Turn the page <span aria-hidden="true">↓</span>
          </a>
          <div className={styles.yearRule} aria-label="Together from 1997 through 2026">
            <strong>1997</strong>
            <span aria-hidden="true"><i /><i /><i /><i /><i /></span>
            <strong>2026</strong>
          </div>
        </div>

        <div className={styles.heroAlbum}>
          <Photo
            src="/media/photos/history/early-plaid.jpg"
            alt="A young Cris and Shirley smiling together in an early snapshot"
            caption="the early pages"
            tape="red"
            className={`${styles.heroEarly} ${styles.agedPhoto}`}
            priority
          />
          <Photo
            src="/media/photos/through-years-portrait.jpg"
            alt="Shirley and Cris walking hand in hand through a garden in 2022"
            caption="still walking side by side"
            tape="jade"
            className={styles.heroNow}
            priority
          />
          <div className={styles.firstDateStamp} aria-label="July 25, 1997">
            <span>FRI</span>
            <strong>25</strong>
            <small>JUL · 1997</small>
          </div>
          <span className={styles.heroDoodle} aria-hidden="true">then → now</span>
          <LambySticker
            pose="proud"
            className={styles.heroLamby}
            label="Lamby guarding the family scrapbook"
          />
        </div>
      </section>

      <section className={styles.calendarIntro} id="the-calendar" aria-labelledby="calendar-title">
        <div className={styles.calendarTab}>OUR VERY LONG CALENDAR</div>
        <div className={styles.calendarCopy}>
          <p className={styles.eyebrow}>July 1997 → today</p>
          <h2 id="calendar-title">The calendar kept filling up.</h2>
          <p>
            Some dates got a gold star. Some got a football, a tiny airplane, or
            a paw-print sticker. Most simply became another day we got to call ours.
          </p>
        </div>
        <div className={styles.miniCalendar} aria-hidden="true">
          <div className={styles.weekdays}><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
          <div className={styles.calendarGrid}>
            {Array.from({ length: 28 }, (_, index) => (
              <span key={index} className={index === 4 ? styles.metDay : index === 16 ? styles.heartDay : ""}>
                {index + 1}
              </span>
            ))}
          </div>
          <div className={styles.calendarStickers}>
            <b>♡ date!</b><b>🏈</b><b>✈</b><b>🐾</b>
          </div>
        </div>
      </section>

      <article className={`${styles.era} ${styles.eraEarly}`} aria-labelledby="early-title">
        <div className={styles.eraMarker}>
          <span>VOLUME 01</span>
          <strong>1997—2005</strong>
        </div>
        <div className={styles.eraCopy}>
          <p className={styles.eyebrow}>Old cameras · real prints · no filters</p>
          <h2 id="early-title">The early pages.</h2>
          <p>
            Before every moment lived on a phone, there were flash photos,
            printed doubles, and the beginning of a very large pile of memories.
          </p>
          <span className={styles.handNote}>look how young we are ♡</span>
        </div>
        <div className={styles.earlyCollage}>
          <Photo
            src="/media/photos/history/early-plaid.jpg"
            alt="Cris and Shirley together in an early plaid-shirt snapshot"
            caption="one of the first stacks of prints"
            tape="pink"
            className={`${styles.earlyOne} ${styles.agedPhoto}`}
          />
          <Photo
            src="/media/photos/history/early-leather.jpg"
            alt="A young Cris and Shirley dressed in black and smiling together"
            caption="leather jackets were having a moment"
            tape="black"
            className={`${styles.earlyTwo} ${styles.agedPhoto}`}
          />
          <div className={styles.filmStrip} aria-hidden="true"><span /><span /><span /><span /><span /></div>
        </div>
      </article>

      <article className={`${styles.era} ${styles.eraHome}`} aria-labelledby="home-title">
        <div className={styles.eraMarker}>
          <span>VOLUME 02</span>
          <strong>2006—2011</strong>
        </div>
        <div className={styles.homeCollage}>
          <Photo
            src="/media/photos/history/february-2006.jpg"
            alt="Shirley hugging Cris in a dated February 2006 snapshot"
            caption="FEB 11 · 2006"
            tape="pink"
            className={styles.homeOne}
          />
          <Photo
            src="/media/photos/history/pups-at-home.jpg"
            alt="Cris and Shirley lying on the floor with one of their fluffy pups"
            caption="home is where the pups are"
            tape="jade"
            className={styles.homeTwo}
          />
          <Photo
            src="/media/photos/history/oscars-scrapbook.jpg"
            alt="A scrapbook collage of Shirley and Cris dressed for Academy Awards events"
            caption="a few very fancy Sundays"
            tape="red"
            className={styles.homeThree}
          />
        </div>
        <div className={styles.eraCopy}>
          <p className={styles.eyebrow}>A life starts looking like a life</p>
          <h2 id="home-title">Pups, parties, and making a home.</h2>
          <p>
            The scrapbook got fuller: ordinary nights, beloved dogs underfoot,
            and the occasional excuse to get extremely dressed up.
          </p>
          <div className={styles.stickerRow} aria-hidden="true">
            <span>🐾 puppy love</span><span>movie night</span><span>best dressed!</span>
          </div>
        </div>
      </article>

      <article className={`${styles.era} ${styles.eraPromise}`} aria-labelledby="promise-title">
        <div className={styles.eraMarker}>
          <span>VOLUME 03</span>
          <strong>2012—2016</strong>
        </div>
        <div className={styles.eraCopy}>
          <p className={styles.eyebrow}>April 15, 2012 · back where it began</p>
          <h2 id="promise-title">The same spot. A new promise.</h2>
          <p>
            Cris proposed where they first met in 1997. Four years later, the
            planner held its biggest date yet: August 27, 2016.
          </p>
          <div className={styles.chapterLinks}>
            <Link href="/our-story">Read the proposal chapter →</Link>
            <Link href="/wedding-day">Open the wedding planner →</Link>
          </div>
        </div>
        <div className={styles.promiseCollage}>
          <Photo
            src="/media/photos/engaged-ring.jpg"
            alt="Shirley showing her engagement ring while hugging Cris on April 15, 2012"
            caption="she said yes · 04.15.2012"
            tape="gold"
            className={styles.promiseOne}
          />
          <Photo
            src="/media/photos/engagement-sunset.jpg"
            alt="Shirley and Cris sitting together beside the marina at sunset"
            caption="the countdown begins"
            tape="red"
            className={styles.promiseTwo}
          />
          <div className={styles.ringSticker} aria-hidden="true">♡<small>engaged!</small></div>
        </div>
      </article>

      <section className={styles.memoryRibbon} aria-label="Favorite recurring memories">
        <span>PACKERS SUNDAYS</span><i>♡</i><span>AIRPORT MORNINGS</span><i>♡</i><span>PUPS UNDERFOOT</span><i>♡</i><span>DINNER FOR TWO</span><i>♡</i><span>ONE MORE PHOTO</span>
      </section>

      <article className={`${styles.era} ${styles.eraAdventure}`} aria-labelledby="adventure-title">
        <div className={styles.eraMarker}>
          <span>VOLUME 04</span>
          <strong>2016—2021</strong>
        </div>
        <div className={styles.adventureCollage}>
          <Photo
            src="/media/photos/machu-picchu.jpg"
            alt="Shirley and Cris standing together at Machu Picchu"
            caption="newlyweds, very far from home"
            tape="red"
            className={styles.adventureOne}
          />
          <Photo
            src="/media/photos/history/baseball-day.jpg"
            alt="Cris and Shirley in Milwaukee baseball jerseys at the ballpark"
            caption="game day · 2018"
            tape="jade"
            className={styles.adventureTwo}
          />
          <Photo
            src="/media/photos/history/stay-home.jpg"
            alt="Shirley and Cris relaxing together in an oversized bathtub at home"
            caption="even staying in became a story"
            tape="pink"
            className={styles.adventureThree}
          />
          <Photo
            src="/media/photos/history/ocean-kiss.jpg"
            alt="Shirley and Cris kissing beside an ocean view"
            caption="and still this"
            tape="black"
            className={styles.adventureFour}
          />
        </div>
        <div className={styles.eraCopy}>
          <p className={styles.eyebrow}>Just married · then everywhere</p>
          <h2 id="adventure-title">Big trips. Quiet Sundays. All of it ours.</h2>
          <p>
            The spectacular views made the photo album. So did ball games and
            wonderfully uneventful afternoons at home.
          </p>
          <span className={styles.passportSticker} aria-hidden="true">✈ ADMIT TWO</span>
        </div>
      </article>

      <article className={`${styles.era} ${styles.eraNow}`} aria-labelledby="now-title">
        <div className={styles.eraMarker}>
          <span>VOLUME 05</span>
          <strong>2022—2026</strong>
        </div>
        <div className={styles.eraCopy}>
          <p className={styles.eyebrow}>The newest pages</p>
          <h2 id="now-title">Still filling the planner.</h2>
          <p>
            More birthdays. More beautiful places. More reasons to set a tiny
            table for two—and another anniversary waiting just ahead.
          </p>
          <span className={styles.handNote}>same two people, even better story</span>
        </div>
        <div className={styles.nowCollage}>
          <Photo
            src="/media/photos/through-years-portrait.jpg"
            alt="Shirley and Cris walking together through a garden in 2022"
            caption="twenty-five years · 2022"
            tape="jade"
            className={styles.nowOne}
          />
          <Photo
            src="/media/photos/history/island-heart.jpg"
            alt="Shirley and Cris forming a heart with their hands above an island view"
            caption="collecting the views"
            tape="gold"
            className={styles.nowTwo}
          />
          <Photo
            src="/media/photos/history/birthday-sixty.jpg"
            alt="Cris and Shirley laughing together in front of birthday balloons"
            caption="still celebrating everything"
            tape="pink"
            className={styles.nowThree}
          />
          <Photo
            src="/media/photos/anniversary-table.jpg"
            alt="Shirley and Cris seated together at a lace-covered anniversary table"
            caption="a table for two · always"
            tape="red"
            className={styles.nowFour}
          />
          <LambySticker pose="peek" className={styles.nowLamby} label="Lamby peeking at the newest scrapbook pages" />
        </div>
      </article>

      <section className={styles.closing} aria-labelledby="closing-title">
        <div className={styles.closingWashi} aria-hidden="true">MON · TUE · WED · THU · FRI · SAT · SUN · REPEAT FOREVER</div>
        <LambySticker pose="sleep" className={styles.closingLamby} label="Lamby asleep beside the finished scrapbook page" />
        <div>
          <p className={styles.eyebrow}>The best part about a living scrapbook</p>
          <h2 id="closing-title">There is no last page.</h2>
          <p>
            Twenty-nine years in, the calendar still has room—and Lamby is
            keeping watch over every blank square.
          </p>
          <Link className={styles.primaryLink} href="/ten-years">
            Next chapter: Ten Years <span aria-hidden="true">→</span>
          </Link>
        </div>
        <span className={styles.doubleHappiness} lang="zh-Hant" aria-label="Double happiness">囍</span>
      </section>

      <footer className={styles.footer}>
        <span>Shirley + Cris · est. 07.25.1997</span>
        <Link href="/wedding-day">← Wedding Day</Link>
        <Link href="/ten-years">Ten Years →</Link>
      </footer>
    </main>
  );
}
