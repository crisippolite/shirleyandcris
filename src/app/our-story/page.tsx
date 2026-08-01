import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { publicNavigation } from "@/lib/site";
import styles from "./page.module.css";

const MEET_CUTE_FILM =
  "https://www.dropbox.com/scl/fi/02a4ytqogae5e68z9rbc7/Wedding-Moving-Picture-08272016.mov?rlkey=plksd5k1euqz595bprtaz4tcy&dl=1";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How a missed hello on Shirley’s birthday became a thousand-week love story.",
};

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
            aria-current={item.href === "/our-story" ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default function OurStoryPage() {
  return (
    <main className={styles.page}>
      <div className={`${styles.washi} ${styles.washiTop}`} aria-hidden="true" />
      <SiteHeader />

      <section className={styles.hero} aria-labelledby="story-title">
        <div className={styles.chapterTab}>CHAPTER · 02</div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Shirley’s birthday · Friday, July 25, 1997</p>
          <h1 id="story-title">The day we almost met.</h1>
          <p className={styles.heroIntro}>
            A pretty girl at a bar. A father sent to the parking lot. A late
            friend, a very nervous Cris—and the first page of everything.
          </p>
          <a className={styles.primaryLink} href="#the-almost">
            Read the true story <span aria-hidden="true">↓</span>
          </a>
          <div className={styles.birthdaySticker} aria-hidden="true">
            <span>25</span>
            <small>happy birthday,<br />Shirley!</small>
          </div>
        </div>

        <div className={styles.heroAlbum}>
          <figure className={styles.heroPhoto}>
            <span className={`${styles.tape} ${styles.heroTape}`} aria-hidden="true" />
            <Image
              src="/media/photos/early-years-formal.jpg"
              alt="Shirley and Cris smiling together in their early years"
              fill
              priority
              sizes="(max-width: 760px) 84vw, 44vw"
            />
            <figcaption>the early chapters ♡</figcaption>
          </figure>
          <figure className={styles.interviewSnapshot}>
            <Image
              src="/media/video/meet-cute-poster.jpg"
              alt="Shirley and Cris telling their meet-cute story together"
              fill
              priority
              sizes="(max-width: 760px) 54vw, 24vw"
            />
            <figcaption>telling the true story · 2016</figcaption>
          </figure>
          <LambySticker
            pose="peek"
            className={styles.heroLamby}
            label="Lamby peeking into Shirley and Cris’s story"
          />
        </div>
      </section>

      <section className={styles.scriptSection} id="the-almost" aria-labelledby="almost-title">
        <div className={styles.scriptHeading}>
          <p className={styles.eyebrow}>The meet-cute · as told by us</p>
          <h2 id="almost-title">First, the almost.</h2>
          <p>
            This is the version Shirley and Cris recorded for the ceremony—kept
            in their own words, including the part where the leading man loses
            his nerve.
          </p>
        </div>

        <div className={styles.plannerSpread}>
          <div className={styles.binding} aria-hidden="true">
            <span /><span /><span /><span /><span /><span /><span />
          </div>

          <article className={`${styles.quoteCard} ${styles.quoteOne}`}>
            <div className={styles.speaker}>CRIS</div>
            <blockquote>
              “It was quite some time ago. I was having lunch with my father.
              I saw this pretty girl sitting at the bar all by herself.”
            </blockquote>
            <span className={`${styles.eventSticker} ${styles.stickerPretty}`}>pretty girl sighting ♡</span>
            <div className={styles.checklist} aria-hidden="true">
              <span>□ lunch with Dad</span>
              <span>□ notice pretty girl</span>
              <span>□ be brave?</span>
            </div>
          </article>

          <article className={`${styles.quoteCard} ${styles.quoteTwo}`}>
            <div className={styles.speaker}>CRIS</div>
            <blockquote>
              “I sent my dad out to the parking lot and said, ‘Dad, I’ll meet
              you out there. I’m gonna go talk to this pretty girl.’”
            </blockquote>
            <span className={`${styles.eventSticker} ${styles.stickerParking}`}>Dad → parking lot</span>
            <p className={styles.marginNote}>confidence level: briefly excellent</p>
          </article>

          <article className={`${styles.quoteCard} ${styles.quoteThree}`}>
            <div className={`${styles.speaker} ${styles.speakerShirley}`}>SHIRLEY</div>
            <blockquote>
              “So I was sitting at the bar by myself. Nobody approached me.
              Nobody said anything. My girlfriend was late. I waited.”
            </blockquote>
            <span className={`${styles.eventSticker} ${styles.stickerWaiting}`}>still waiting…</span>
            <div className={styles.tinyClock} aria-hidden="true">3:00</div>
          </article>

          <article className={`${styles.quoteCard} ${styles.quoteFour}`}>
            <div className={styles.speaker}>CRIS</div>
            <blockquote>“Perfect. Basically… yeah. I chickened out.”</blockquote>
            <span className={`${styles.eventSticker} ${styles.stickerOops}`}>plot twist!</span>
            <p className={styles.bigScribble} aria-hidden="true">so close.</p>
            <LambySticker pose="card" className={styles.almostLamby} />
          </article>
        </div>
      </section>

      <section className={styles.secondChance} aria-labelledby="second-title">
        <div className={styles.secondPhoto}>
          <figure>
            <span className={`${styles.tape} ${styles.handsTape}`} aria-hidden="true" />
            <Image
              src="/media/photos/meet-cute-hands.jpg"
              alt="Shirley and Cris holding hands during their meet-cute interview"
              fill
              sizes="(max-width: 760px) 90vw, 47vw"
            />
          </figure>
        </div>

        <div className={styles.secondCopy}>
          <p className={styles.eyebrow}>But the story wasn’t over</p>
          <h2 id="second-title">Then came the message.</h2>
          <blockquote>
            “‘Oh my God, I saw you today. I saw you today.’ And he starts
            describing what I was wearing…”
          </blockquote>
          <p className={styles.shirleyAside}>
            “I’m, like, totally creeped out. Like—are you stalking me?”
          </p>
          <div className={styles.messageSticker} aria-hidden="true">
            <span>new message!</span>
            <strong>I saw you today ♡</strong>
          </div>
        </div>
      </section>

      <section className={styles.roses} aria-labelledby="roses-title">
        <div className={styles.rosesDate} aria-hidden="true">
          <span>MON</span>
          <strong>28</strong>
          <small>JUL · 1997</small>
        </div>
        <div>
          <p className={styles.eyebrow}>The following Monday morning</p>
          <h2 id="roses-title">Roses arrived at work.</h2>
          <p>
            One missed hello became a message. The message became flowers. And
            the flowers became the beginning of Shirley + Cris.
          </p>
        </div>
        <div className={styles.roseKeepsake}>
          <div className={styles.rosePetals} aria-hidden="true">
            <i /><i /><i /><i /><i />
          </div>
          <article className={styles.floristCard} aria-label="The card Cris sent with Shirley’s roses">
            <span>with the roses</span>
            <p>Glad to have met you on Friday night.<br />Call me anytime—</p>
            <strong>Cris</strong>
            <small>969-4041</small>
          </article>
          <div className={styles.roseNotes} aria-hidden="true">
            <span>rose delivery!</span>
            <span>♡ keep this one</span>
            <span>best Monday ever</span>
          </div>
        </div>
      </section>

      <section className={styles.filmSection} aria-labelledby="film-title">
        <div className={`${styles.washi} ${styles.filmWashi}`} aria-hidden="true">
          FRI · JUL 25 · FRI · JUL 25 · FRI · JUL 25 · FRI · JUL 25
        </div>
        <div className={styles.filmHeading}>
          <div>
            <p className={styles.eyebrow}>The version we showed at our ceremony</p>
            <h2 id="film-title">The true story, in our own voices.</h2>
          </div>
          <p>
            Part “When Harry Met Sally,” part family album, and completely us.
            This is the film our guests watched before we said our vows.
          </p>
        </div>
        <div className={styles.filmFrame}>
          <span className={`${styles.tape} ${styles.filmTapeLeft}`} aria-hidden="true" />
          <span className={`${styles.tape} ${styles.filmTapeRight}`} aria-hidden="true" />
          <video
            controls
            preload="metadata"
            poster="/media/video/meet-cute-poster.jpg"
            aria-label="Shirley and Cris meet-cute ceremony film"
          >
            <source src={MEET_CUTE_FILM} type="video/quicktime" />
            <source src={MEET_CUTE_FILM} />
            Your browser does not support embedded video. You can{" "}
            <a href={MEET_CUTE_FILM}>watch the ceremony film here</a>.
          </video>
        </div>
        <p className={styles.filmNote}>Recorded before the wedding · played August 27, 2016</p>
      </section>

      <section className={styles.yearsSection} aria-labelledby="years-title">
        <div className={styles.yearsHeading}>
          <p className={styles.eyebrow}>The pages that followed</p>
          <h2 id="years-title">From one almost-hello to a thousand weeks.</h2>
          <p>Some dates are too important for a tiny sticker.</p>
        </div>

        <ol className={styles.yearPages}>
          <li className={styles.yearPage}>
            <div className={styles.yearNumber}>1997</div>
            <figure>
              <Image
                src="/media/photos/early-years-formal.jpg"
                alt="Shirley and Cris together in their early years"
                fill
                sizes="(max-width: 760px) 84vw, 29vw"
              />
            </figure>
            <div className={styles.yearCopy}>
              <span>07 · 25</span>
              <h3>The beginning</h3>
              <p>Shirley’s birthday—and the first day of the rest of the story.</p>
            </div>
          </li>

          <li className={styles.yearPage}>
            <div className={styles.yearNumber}>2012</div>
            <figure>
              <Image
                src="/media/photos/engaged-ring.jpg"
                alt="Shirley showing her engagement ring while hugging Cris"
                fill
                sizes="(max-width: 760px) 84vw, 29vw"
              />
            </figure>
            <div className={styles.yearCopy}>
              <span>04 · 15</span>
              <h3>Back to the same spot</h3>
              <p>Fifteen years later, Cris returned to where they met. This time, he asked.</p>
            </div>
          </li>

          <li className={styles.yearPage}>
            <div className={styles.yearNumber}>2016</div>
            <figure>
              <Image
                src="/media/photos/wedding-reflection.png"
                alt="Shirley and Cris together on their wedding day"
                fill
                sizes="(max-width: 760px) 84vw, 29vw"
              />
            </figure>
            <div className={styles.yearCopy}>
              <span>08 · 27</span>
              <h3>A thousand weeks later</h3>
              <p>Here they were—at Ramhorn Farm, getting married. That’s the true story.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className={styles.nextChapter} aria-labelledby="next-title">
        <div className={`${styles.washi} ${styles.nextWashi}`} aria-hidden="true" />
        <LambySticker pose="proud" className={styles.nextLamby} />
        <div className={styles.pawPath} aria-hidden="true">● · ● · ● · ●</div>
        <p className={styles.eyebrow}>Lamby knows where we go next</p>
        <h2 id="next-title">Follow the paw prints to the wedding.</h2>
        <p>
          The almost-hello made it all the way to Uncle Ed, red roses, black
          tuxedos, and one tiny ring bearer dressed for the occasion.
        </p>
        <Link className={styles.primaryLink} href="/wedding-day">
          Turn to Wedding Day <span aria-hidden="true">→</span>
        </Link>
        <span className={styles.doubleHappiness} lang="zh-Hant" aria-label="Double happiness">囍</span>
      </section>

      <footer className={styles.footer}>
        <Link href="/">← Back to the open planner</Link>
        <span>Shirley + Cris · est. 07.25.1997</span>
        <Link href="/wedding-day">Next: Wedding Day →</Link>
      </footer>
    </main>
  );
}
