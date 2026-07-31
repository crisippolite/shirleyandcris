import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { publicNavigation } from "@/lib/site";
import styles from "./page.module.css";

const WEDDING_FEATURE =
  "https://www.dropbox.com/scl/fi/xhpfaru3asmijfpldubcu/5.-IPPOLITE-Wedding-FEATURE.mov?rlkey=ipzfkdeqt7m3xc87v833m1i8j&dl=1";

const schedule = [
  { time: "8:50", suffix: "AM", title: "Off to Euro", note: "Shirley leaves the Iron Horse Hotel.", sticker: "let’s go!" },
  { time: "9:30", suffix: "AM", title: "Getting ready", note: "Settle in, champagne, hair, makeup, happy nerves.", sticker: "mimosas ♡" },
  { time: "12:55", suffix: "PM", title: "The dress", note: "One last quiet moment before everything begins.", sticker: "something white" },
  { time: "2:00", suffix: "PM", title: "The ceremony", note: "Uncle Ed, the vows, and the best yes.", sticker: "we do!" },
  { time: "4:15", suffix: "PM", title: "The getaway", note: "Just married—and headed to South Second.", sticker: "beep beep" },
  { time: "5:00", suffix: "PM", title: "Cocktail hour", note: "Everyone together, finally ready to celebrate.", sticker: "cheers!" },
  { time: "6:05", suffix: "PM", title: "Cake + dinner", note: "Cake first. A planning decision we still support.", sticker: "cake first" },
  { time: "8:00", suffix: "PM", title: "First dances", note: "Then the floor stayed open until midnight.", sticker: "dance!" },
] as const;

export const metadata: Metadata = {
  title: "Wedding Day",
  description:
    "August 27, 2016: the vows, the roses, Lamby, and one unforgettable day.",
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
            aria-current={item.href === "/wedding-day" ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default function WeddingDayPage() {
  return (
    <main className={styles.page}>
      <div className={`${styles.washi} ${styles.washiTop}`} aria-hidden="true" />
      <SiteHeader />

      <section className={styles.hero} aria-labelledby="wedding-title">
        <figure className={styles.heroImage}>
          <Image
            src="/media/photos/wedding-garden.png"
            alt="Shirley and Cris together in the garden on their wedding day"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 1180px"
          />
        </figure>
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.chapterTab}>CHAPTER · 03</div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Saturday · August 27, 2016</p>
          <h1 id="wedding-title">The day we chose forever.</h1>
          <p>
            From the morning at the Iron Horse, to vows beneath the trees at
            Euro, to a midnight finish at South Second.
          </p>
          <a className={styles.primaryLink} href="#todays-plan">
            Open the wedding planner <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className={styles.dateStamp} aria-label="August 27, 2016">
          <span>AUG</span>
          <strong>27</strong>
          <small>2016</small>
        </div>
        <span className={`${styles.tape} ${styles.heroTape}`} aria-hidden="true" />
        <LambySticker
          pose="peek"
          className={styles.heroLamby}
          label="Lamby peeking into the wedding day planner"
        />
      </section>

      <section className={styles.planSection} id="todays-plan" aria-labelledby="plan-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Today’s plan · do not lose this page</p>
          <h2 id="plan-title">One very full Saturday.</h2>
          <p>
            The actual timeline, edited down to the moments that mattered—and
            decorated the way it should have been all along.
          </p>
        </div>

        <ol className={styles.schedule}>
          {schedule.map((item, index) => (
            <li key={`${item.time}-${item.title}`} className={styles.scheduleItem}>
              <div className={styles.time}>
                <strong>{item.time}</strong>
                <span>{item.suffix}</span>
              </div>
              <div className={styles.eventCopy}>
                <span className={`${styles.eventSticker} ${styles[`sticker${index + 1}`]}`}>
                  {item.sticker}
                </span>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
              <span className={styles.checkbox} aria-hidden="true">✓</span>
            </li>
          ))}
        </ol>
        <div className={styles.scheduleTape} aria-hidden="true">
          <span>hair</span><span>roses</span><span>vows</span><span>cake</span><span>dance</span>
        </div>
      </section>

      <section className={styles.morningSection} aria-labelledby="morning-title">
        <div className={styles.morningCopy}>
          <p className={styles.eyebrow}>9:30 AM · Euro</p>
          <h2 id="morning-title">The happy nerves.</h2>
          <p>
            The quiet before the celebration: the dress, the finishing touches,
            and the moment it all became wonderfully real.
          </p>
          <div className={styles.stickerRow} aria-hidden="true">
            <span>champagne!</span><span>hair + makeup</span><span>deep breath ♡</span>
          </div>
        </div>
        <div className={styles.morningCollage}>
          <figure className={`${styles.photoFrame} ${styles.revealPhoto}`}>
            <Image
              src="/media/photos/wedding-reveal.png"
              alt="Shirley reacting with joy while getting ready for the wedding"
              fill
              sizes="(max-width: 760px) 74vw, 33vw"
            />
            <figcaption>oh my goodness—it’s today!</figcaption>
          </figure>
          <figure className={`${styles.photoFrame} ${styles.beforePhoto}`}>
            <Image
              src="/media/photos/wedding-before-ceremony.jpg"
              alt="Cris with Uncle Ed and family before the ceremony"
              fill
              sizes="(max-width: 760px) 62vw, 26vw"
            />
            <figcaption>Cris, Uncle Ed & family · before the vows</figcaption>
          </figure>
          <span className={`${styles.tape} ${styles.mintTape}`} aria-hidden="true" />
          <span className={`${styles.tape} ${styles.pinkTape}`} aria-hidden="true" />
        </div>
      </section>

      <section className={styles.ceremonySection} aria-labelledby="ceremony-title">
        <div className={styles.ceremonyPhoto}>
          <figure>
            <Image
              src="/media/photos/wedding-vows.png"
              alt="Uncle Ed officiating while Shirley and Cris exchange vows"
              fill
              sizes="(max-width: 760px) 100vw, 58vw"
            />
          </figure>
          <span className={`${styles.tape} ${styles.blackTape}`} aria-hidden="true" />
        </div>
        <div className={styles.ceremonyCopy}>
          <p className={styles.eyebrow}>2:00 PM · beneath the trees</p>
          <h2 id="ceremony-title">Uncle Ed made it official.</h2>
          <p>
            The same uncle who finally talked Cris into proposing stood between
            them as they promised the rest of their lives to each other.
          </p>
          <blockquote>“A thousand weeks later, here we are.”</blockquote>
          <span className={styles.doubleHappiness} lang="zh-Hant" aria-label="Double happiness">囍</span>
        </div>
      </section>

      <section className={styles.lambySection} aria-labelledby="lamby-title">
        <div className={styles.lambyCopy}>
          <p className={styles.eyebrow}>The smallest member of the wedding party</p>
          <h2 id="lamby-title">Lambeau understood the assignment.</h2>
          <p>
            Tuxedo on. Underbite perfect. The most important little ring bearer
            in Wisconsin was ready for his close-up.
          </p>
          <div className={styles.pawTrail} aria-hidden="true">● · ● · ● · ●</div>
        </div>
        <div className={styles.lambyStage}>
          <LambySticker pose="proud" className={styles.proudLamby} label="Lamby standing proudly in his wedding tuxedo" />
          <div className={styles.lambyCard} aria-hidden="true">
            <span>OFFICIAL DUTIES</span>
            <strong>Ring bearer<br />Best boy<br />Scene stealer</strong>
          </div>
          <span className={`${styles.tape} ${styles.redDotTape}`} aria-hidden="true" />
        </div>
      </section>

      <section className={styles.filmSection} aria-labelledby="feature-title">
        <div className={`${styles.washi} ${styles.filmWashi}`} aria-hidden="true">
          JUST MARRIED · JUST MARRIED · JUST MARRIED · JUST MARRIED
        </div>
        <div className={styles.filmHeading}>
          <div>
            <p className={styles.eyebrow}>The photographer’s feature</p>
            <h2 id="feature-title">The whole day, moving again.</h2>
          </div>
          <p>
            The finished wedding film—from the first preparations to the last
            dance, preserved exactly as the day felt.
          </p>
        </div>
        <div className={styles.filmFrame}>
          <span className={`${styles.tape} ${styles.filmTapeLeft}`} aria-hidden="true" />
          <span className={`${styles.tape} ${styles.filmTapeRight}`} aria-hidden="true" />
          <video
            controls
            preload="metadata"
            poster="/media/photos/wedding-reflection.png"
            aria-label="Shirley and Cris wedding feature film"
          >
            <source src={WEDDING_FEATURE} type="video/quicktime" />
            <source src={WEDDING_FEATURE} />
            Your browser does not support embedded video. You can{" "}
            <a href={WEDDING_FEATURE}>watch the wedding feature here</a>.
          </video>
        </div>
        <p className={styles.filmNote}>Front Room Photography · August 27, 2016</p>
      </section>

      <section className={styles.receptionSection} aria-labelledby="reception-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>5:00 PM onward · South Second</p>
          <h2 id="reception-title">Then we celebrated.</h2>
          <p>
            Cocktails, cake before dinner, a room full of laughter, a speech
            worth saving, caricatures, and a dance floor open until midnight.
          </p>
        </div>

        <div className={styles.gallery}>
          <figure className={`${styles.galleryPhoto} ${styles.cityPhoto}`}>
            <Image src="/media/photos/wedding-city.png" alt="Shirley and Cris standing together near South Second" fill sizes="(max-width: 760px) 88vw, 39vw" />
            <figcaption>between the ceremony and the party</figcaption>
          </figure>
          <figure className={`${styles.galleryPhoto} ${styles.toastPhoto}`}>
            <Image src="/media/photos/wedding-toast-kiss.png" alt="Cris kissing Shirley during the wedding reception" fill sizes="(max-width: 760px) 66vw, 27vw" />
            <figcaption>one very good toast</figcaption>
          </figure>
          <figure className={`${styles.galleryPhoto} ${styles.laughPhoto}`}>
            <Image src="/media/photos/wedding-laugh.png" alt="Shirley and Cris laughing together on their wedding day" fill sizes="(max-width: 760px) 64vw, 25vw" />
            <figcaption>this face, forever</figcaption>
          </figure>
          <figure className={`${styles.galleryPhoto} ${styles.caricaturePhoto}`}>
            <Image src="/media/photos/wedding-caricature.png" alt="Shirley and Cris posing beside their wedding caricature" fill sizes="(max-width: 760px) 62vw, 24vw" />
            <figcaption>plus Lamby, obviously</figcaption>
          </figure>
          <span className={`${styles.tape} ${styles.galleryTapeOne}`} aria-hidden="true" />
          <span className={`${styles.tape} ${styles.galleryTapeTwo}`} aria-hidden="true" />
        </div>

        <aside className={styles.speechCard} aria-label="A memorable wedding speech">
          <span>THE TOAST EVERYONE REMEMBERED</span>
          <h3>This page is saving a seat for the hit speech.</h3>
          <p>
            When the original recording finishes its trip out of the archive,
            Cris’s brother gets the replay button he earned.
          </p>
          <strong className={styles.handNote}>worth another round of applause ♡</strong>
        </aside>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <div className={`${styles.washi} ${styles.closingWashi}`} aria-hidden="true" />
        <div className={styles.closingPhotos}>
          <figure className={styles.dipPhoto}>
            <Image src="/media/photos/wedding-dip.png" alt="Cris dipping and kissing Shirley after their wedding" fill sizes="(max-width: 760px) 82vw, 38vw" />
          </figure>
          <LambySticker pose="sleep" className={styles.sleepingLamby} />
        </div>
        <div className={styles.closingCopy}>
          <p className={styles.eyebrow}>11:55 PM · one final planner note</p>
          <h2 id="closing-title">Just married. Still beginning.</h2>
          <p>
            The lights came up at midnight. The story, very happily, kept going.
          </p>
          <Link className={styles.primaryLink} href="/through-the-years">
            Turn to Through the Years <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/our-story">← Previous: Our Story</Link>
        <span>Shirley + Cris · 08.27.2016</span>
        <Link href="/through-the-years">Next: Through the Years →</Link>
      </footer>
    </main>
  );
}
