import * as React from 'react';
import styles from './footer.module.scss';
export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return <div className={styles.footer}></div>;
}
