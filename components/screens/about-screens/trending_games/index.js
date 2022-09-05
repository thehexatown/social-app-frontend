import React from 'react';
import PlayingButons from '../../../playing_buttons';
import styles from './style.module.scss';

const buttons = [
  {
    text: 'Trending',
    image: '/trending.svg',
  },
  {
    text: 'Music',
    image: '/music.svg',
  },
  {
    text: 'Games',
    image: '/games.svg',
  },
  {
    text: 'Sports',
    image: '/sports.svg',
  },
];

const TrendingGames = () => {
  return (
    <div className={styles.trendingGameParent}>
      <div className={styles.gamingcontainerTop}>
        {buttons.map((i, index) => (
          <PlayingButons text={i.text} image={i.image} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TrendingGames;
