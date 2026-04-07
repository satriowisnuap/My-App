import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Praktikum Next.js</title>
        <meta name="description" content="Praktikum Deployment Vercel" />
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Build & Deploy Website</h1>

          <p className={styles.subtitle}>
            Praktikum Next.js menggunakan Vercel untuk deployment modern web
            application.
          </p>

          <div className={styles.cta}>
            <button className={styles.primaryBtn}>Get Started</button>
            <Link href="/profile">
              <button className={styles.secondaryBtn}>Learn More</button>
            </Link>
          </div>
        </section>

        <section className={styles.profile}>
          <div className={styles.card}>
            <p className={styles.name}>Satrio Wisnu Adi Pratama</p>
            <p className={styles.role}>Mahasiswa D4 Pengembangan Web</p>

            <div className={styles.divider}></div>

            <p className={styles.description}>
              Website ini dibuat sebagai bagian dari praktikum Next.js dan
              deployment menggunakan Vercel. Mengusung konsep modern, clean, dan
              responsive design.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
