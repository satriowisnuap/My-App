import { useSession } from "next-auth/react";
import styles from "./Profile.module.scss";
import Link from "next/link";

const ProfileView = () => {
  const { data }: any = useSession();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.avatar}>{data?.user?.fullname?.charAt(0)}</div>

          <h1 className={styles.title}>Profile</h1>
        </div>

        <div className={styles.content}>
          <p className={styles.welcome}>Selamat Datang</p>

          <h2 className={styles.name}>
            {data?.user?.fullname || "Guest User"}
          </h2>

          <p className={styles.role}>Mahasiswa D4 Pengembangan Web</p>

          <div className={styles.divider}></div>

          <p className={styles.description}>
            Ini adalah halaman profile yang terintegrasi dengan NextAuth. Kamu
            bisa mengembangkan halaman ini menjadi dashboard, menambahkan data
            user, atau fitur lainnya.
          </p>
        </div>
        <div className={styles.actions}>
          <Link href="/">
            <button className={styles.backBtn}>← Kembali ke Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
