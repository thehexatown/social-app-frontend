import React from 'react';
import styles from './style.module.scss';

const Live = () => {
  return (
    <div className={styles.liveBackground}>
      <div className={styles.liveBackgroundOpacity}>
        <div className={styles.liveTop}>
          <div className={styles.live}>
            <span className={styles.liveText}>Live</span>
          </div>
          <div className={styles.liveCount}>
            <img src="/eye.svg" alt="img" />
            <span className={styles.liveCounting}> 1042</span>
          </div>
        </div>
        <div className={styles.liveBottom}>
          <div className={styles.bottomContainer}>
            <div>
              <div className={styles.chatContainer}>
                <img src="/chat-img.png" alt="img" />
                <span className={styles.chattingName}>
                  Alex joined live chat
                </span>
              </div>
              <div className={styles.chatContainer}>
                <img src="/chat-img.png" alt="img" />
                <span className={styles.chattingName}>
                  Alex joined live chat
                </span>
              </div>
            </div>
            <div>
              <img src="/fire.svg" alt="img" />
              <br />
              <span className={styles.chatCount}>6.5k</span>
            </div>
          </div>
          <div className={styles.commentContainer}>
            <input
              className={styles.commentBox}
              type="text"
              placeholder="Add your comment"
            />
            <img className={styles.sendButtonIcon} src="/send.svg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
