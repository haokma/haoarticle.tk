import * as React from 'react';
import styles from './tagList.module.scss';
import Link from 'next/link';

export interface TagListProps {
  tagList: any;
}

export default function TagList(props: TagListProps) {
  const { tagList } = props;
  console.log(tagList);
  return (
    <div>
      <div className={styles.tagHeading}>
        <h2># Tags</h2>
      </div>
      <ul className={styles.tagList}>
        {tagList?.map((tag: any, index: number) => {
          return (
            <li className={styles.tagItem} key={index}>
              <Link href={`/danh-muc/${tag.slug}`}>
                <a>#{tag.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
