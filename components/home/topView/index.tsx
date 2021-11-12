import * as React from 'react';
import TopViewItem from './item';
import styles from './topView.module.scss';
export interface TopViewProps {
  data: any;
}

export function TopView(props: TopViewProps) {
  const { data } = props;
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
      {data.slice(0, 10).map((article: any, index: number) => {
        return <TopViewItem article={article} key={index} />;
      })}
    </div>
  );
}
