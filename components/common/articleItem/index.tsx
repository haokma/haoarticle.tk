import * as React from 'react';
import styles from './articleItem.module.scss';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
export interface ArticleItemProps {
  article: any;
}

export function ArticleItem(props: ArticleItemProps) {
  const { article } = props;
  console.log(article);
  return (
    <div className={styles.ArticleItem}>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
          <div className={styles.left}>
            <div className={styles.image}>
              <img src={article.article_thumbnail} alt="" />
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6">
          <div className={styles.right}>
            <Link href="/">
              <a>
                <p className={styles.tags}>Trà đá công nghệ</p>
              </a>
            </Link>

            <Link href={`/${article.article_slug}`}>
              <a>
                <h2 className={styles.title}>{article.article_title}</h2>
              </a>
            </Link>
            <p className={styles.excerpt}>{article.article_excerpt}</p>
            <div className={styles.footer}>
              <img
                src="https://microvn.net/_next/image?url=https://service.microvn.net/content/images/2021/03/robot--1-.png&w=40&q=80"
                alt=""
                className={styles.footerImage}
              />
              <div className={styles.footerInfo}>
                <span>{article.author.name}</span>
                <span>{dayjs(article.createdAt, 'YYYY-MM-DD', 'vi').fromNow()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
