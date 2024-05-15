import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from './comments.module.css';

export default function Comments() {
  const { t } = useTranslation();

  const comentarios = [
    {
      text: t('comments.comment1.text'),
      author: t('comments.comment1.author'),
    },
    {
      text: t('comments.comment2.text'),
      author: t('comments.comment2.author'),
    },
    {
      text: t('comments.comment3.text'),
      author: t('comments.comment3.author'),
    },
    {
      text: t('comments.comment4.text'),
      author: t('comments.comment4.author'),
    },
    {
      text: t('comments.comment5.text'),
      author: t('comments.comment5.author'),
    },
  ];

  return (
    <div className={styles.mainCont}>
      <h1 className={styles.title}>{t('comments.title')}</h1>
      <h2 className={styles.subtitle}>{t('comments.subtitle')}</h2>
      <Swiper>
        {comentarios.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}> 
            <div className={styles.comments__container}>
              <p className={styles.text}>{item.text}</p>
              <p className={styles.author}>{item.author}</p>
            </div>  
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
