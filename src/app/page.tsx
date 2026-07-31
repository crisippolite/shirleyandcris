import Link from "next/link";
import { publicNavigation, storyMilestones } from "@/lib/site";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.washi} aria-hidden="true" />
      <header className={styles.header}>
        <p className={styles.kicker}>A very special date</p>
        <h1>Shirley <span>+</span> Cris</h1>
        <p className={styles.date}>07 · 25 · 1997 — forever</p>
      </header>

      <section className={styles.note} aria-labelledby="foundation-heading">
        <p className={styles.stamp}>FOUNDATION PAGE · 01</p>
        <h2 id="foundation-heading">Our life, in little dates.</h2>
        <p>
          The planner is open. Photographs, films, washi, stickers, and a tiny guide
          named Lamby will turn these dates into the finished anniversary story.
        </p>
      </section>

      <ol className={styles.timeline} aria-label="Story milestones">
        {storyMilestones.map((milestone) => (
          <li key={milestone.date}>
            <time>{milestone.date}</time>
            <strong>{milestone.title}</strong>
            <span>{milestone.note}</span>
          </li>
        ))}
      </ol>

      <nav className={styles.nav} aria-label="Story chapters">
        {publicNavigation.slice(1).map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </nav>
    </main>
  );
}
