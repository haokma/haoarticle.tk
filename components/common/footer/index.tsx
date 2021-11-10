import * as React from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';
export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.footerTitle}>
            <p>Blog</p>
          </div>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">
                <a className={styles.navLink}>LinkedIn</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">
                <a className={styles.navLink}>Facebook</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">
                <a className={styles.navLink}>Github</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
