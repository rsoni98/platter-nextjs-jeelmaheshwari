import Link from "next/link";
import { Zap, Github, Twitter, Linkedin } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}><Zap size={14} /></span>
              Tech<span className={styles.logoAccent}>Geek</span>
            </Link>
            <p className={styles.tagline}>
              Building next-generation digital solutions for businesses that want to scale.
            </p>
            <div className={styles.socials}>
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className={styles.socialBtn}><Icon size={15} /></a>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <h4>Pages</h4>
            <ul>
              {[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, href]) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contact</h4>
            <ul>
              <li><span>hello@techgeek.io</span></li>
              <li><span>+1 (555) 000-0000</span></li>
              <li><span>Ahmedabad, India</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2024 TechGeek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}