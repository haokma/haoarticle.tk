import * as React from 'react';
import styles from './topView.module.scss';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
export interface TopViewItemProps {
  article: any;
}

export default function TopViewItem(props: TopViewItemProps) {
  const { article } = props;
  return (
    <div className={styles.topViewItem}>
      <Link href={`/${article.article_slug}`}>
        <a className={styles.topViewItemLink}>
          <h3>{article.article_title}</h3>
        </a>
      </Link>
      <div className={styles.topViewItemInfo}>
        <div>
          <img
            src="https://coffeeit.net/_next/static/media/eye.b670d8ac4e43421a444bc4ad289e2a02.svg"
            alt=""
          />
          <span>{article.article_views}</span>
        </div>
        <div>
          <img
            src="https://coffeeit.net/_next/static/media/time.12bf0c9171cc8676832967acf6bd0838.svg"
            alt=""
          />
          <span>{dayjs(article.createdAt, 'YYYY-MM-DD', 'vi').fromNow()}</span>
        </div>
        <div>
          <img
            src="https://coffeeit.net/_next/static/media/source.e8b1c9a0deb890357866c7116af7156c.svg"
            alt=""
          />
          <span>{article.article_source.source_name}</span>
        </div>
      </div>
    </div>
  );
}
