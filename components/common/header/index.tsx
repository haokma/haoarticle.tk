import * as React from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.headerLogo}>
            <Link href="/">
              <a>
                <img
                  src="https://coffeeit.net/_next/static/media/logo.ea375fd0b0e15753f9c378dd294f4977.svg"
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className={styles.headerNav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/">
                  <a className={styles.navLink}>Trang chủ</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/">
                  <a className={styles.navLink}>Trà chanh chém gió</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
