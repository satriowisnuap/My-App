import style from "@/styles/Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerAbout}>
          <h2>Satrio</h2>
          <p>
            Mahasiswa Teknik Informatika yang punya passion di dunia teknologi
            dan petualangan alam. Senang mengeksplor hal baru, baik dalam coding
            maupun mendaki gunung.
          </p>
        </div>

        <div className={style.footerLinks}>
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <Link href="/profile">About</Link>
            </li>
            <li>
              <Link href="/produk">Projects</Link>
            </li>
          </ul>
        </div>

        <div className={style.footerSocial}>
          <h3>Connect</h3>
          <div className={style.socialIcons}>
            <a href="https://www.instagram.com/satrwisn/">Instagram</a>
            <a href="https://www.linkedin.com/in/satrio-wisnu-adi-pratama-79776928a/">
              LinkedIn
            </a>
            <a href="https://github.com/satriowisnuap">GitHub</a>
          </div>
        </div>
      </div>

      <div className={style.footerBottom}>
        <p>© {new Date().getFullYear()} Satrio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
