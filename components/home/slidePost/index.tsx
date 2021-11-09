import * as React from 'react';
import Link from 'next/link';
import styles from './slidePost.module.scss';

export interface SlidePostProps {}

export function SlidePost(props: SlidePostProps) {
  return (
    <div className={styles.SlidePost}>
      <div className="container">
        <div className={styles.SlidePostWapper}>
          <div className="row">
            <div className="col-xl-8">
              <div className={styles.left}>
                <div className={styles.image}>
                  <img
                    src="https://microvn.net/_next/image?url=https://service.microvn.net/content/images/2021/11/ddn2714-crop-1635936936205.jpeg&w=1040&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className={styles.right}>
                <Link href="">
                  <a>
                    <p className={styles.tags}>Trà đá công nghệ</p>
                  </a>
                </Link>

                <Link href="">
                  <a>
                    <h2 className={styles.title}>
                      Không đợi tiêm hết vaccine, sạch ca nhiễm cộng đồng mới cho trẻ đến trường
                    </h2>
                  </a>
                </Link>
                <p className={styles.excerpt}>
                  [Báo dantri.com.vn] Tại cuộc họp Ban Chỉ đạo quốc gia phòng chống dịch Covid-19,
                  các ý kiến cho rằng, không thể đợi tiêm hết vaccine hoặc hết ca nhiễm trong cộng
                  đồng mới cho trẻ đi học trở lại.
                </p>
                <div className={styles.footer}>
                  <img
                    src="https://microvn.net/_next/image?url=https://service.microvn.net/content/images/2021/03/robot--1-.png&w=40&q=80"
                    alt=""
                    className={styles.footerImage}
                  />
                  <div className={styles.footerInfo}>
                    <span>Người Đưa Tin</span>
                    <span>Hôm qua lúc 20:20 • 4 MIN READ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
