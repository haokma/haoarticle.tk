import * as React from 'react';
import styles from './topView.module.scss';
import Link from 'next/link';

export interface TopViewItemProps {}

export default function TopViewItem(props: TopViewItemProps) {
  return (
    <div className={styles.topViewItem}>
      <Link href="">
        <a className={styles.topViewItemLink}>
          <h3>Twitter chi tiền cho hacker tìm sự thiên vị trong thuật toán cắt ảnh</h3>
        </a>
      </Link>
      <div className={styles.topViewItemInfo}>
        <div>
          <img
            src="https://coffeeit.net/_next/static/media/eye.b670d8ac4e43421a444bc4ad289e2a02.svg"
            alt=""
          />
          <span>1093</span>
        </div>
        <div>
          <img
            src="https://coffeeit.net/_next/static/media/time.12bf0c9171cc8676832967acf6bd0838.svg"
            alt=""
          />
          <span>4 tháng trước</span>
        </div>
        <div>
          <img
            src="https://coffeeit.net/_next/static/media/source.e8b1c9a0deb890357866c7116af7156c.svg"
            alt=""
          />
          <span>Trà đá công nghệ</span>
        </div>
      </div>
    </div>
  );
}
