import * as React from 'react';
import TopViewItem from './item';
import styles from './topView.module.scss';
export interface TopViewProps {}

export function TopView(props: TopViewProps) {
  return (
    <div className={styles.topViewList}>
      <div className={styles.topViewHeading}>
        <img
          src="https://coffeeit.net/_next/static/media/top-star.a5180b79a82fe86e483eaa0f6f54e08f.svg"
          alt=""
        />
        <h2>ĐỌC NHIỀU NHẤT</h2>
      </div>
      <img
        className={styles.topViewHeadingBanner}
        src="https://api.coffeeit.net/storage/article_avatar/11_00_11_08_02_2021_R7MmGSa4rc.jpg"
        alt=""
      />
      <TopViewItem />
      <TopViewItem />
      <TopViewItem />
      <TopViewItem />
      <TopViewItem />
      <TopViewItem />
      <TopViewItem />
      <TopViewItem />
    </div>
  );
}
