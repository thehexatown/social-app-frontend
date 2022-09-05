import React, { useState } from 'react';
import styles from './style.module.scss';
import { BsBookmark, BsShare, BsChatRightText } from 'react-icons/bs';
import { AiTwotoneLike, AiOutlineLike } from 'react-icons/ai';

const Actions = ({ i, post, setPost }) => {
  const [isShow, setIsShow] = useState(false);
  const [isIncrement, setIsIncrement] = useState(false);
  const [option, setOption] = useState('All');
  console.log('object', post);

  const handleImage = () => {
    return;
  };

  const handlerChange = (id) => {
    const array = post.map((i) =>
      i.id === id
        ? {
            ...i,
            isLike: !i.isLike,
            likes: !isIncrement ? i.likes + 1 : i.likes - 1,
          }
        : i
    );
    setIsIncrement(!isIncrement);
    setPost(array);
  };
  const unlike = (id) => {
    setPost(post.map((i) => (i.id === id ? { ...i, isLike: false } : i)));
  };
  return (
    <>
      <div className={styles.likesAndCommentsContainer}>
        <div
          className={styles.likesAndCommentsBox}
          onClick={() => handlerChange(i.id)}
        >
          {/* <img
            className={styles.likeIcons}
            src={!i.isLike ? "/heart.svg" : "/heart-filled.png"}
            alt="img"
          /> */}
          {!i.isLike ? (
            <AiOutlineLike className={styles.likeHand} />
          ) : (
            <AiTwotoneLike className={styles.likeHand} />
          )}

          <span className={styles.likeText}>
            {i.likes} {i.likes > 1 ? 'likes' : 'like'}
          </span>
        </div>
        <div
          className={styles.likesAndCommentsBox}
          onClick={() => setIsShow(!isShow)}
        >
          <BsChatRightText />
          <span className={styles.likeText}>
            {i.comments?.length}{' '}
            {i.comments?.length > 1 ? 'comments' : 'comment'}
          </span>
        </div>
        <div className={styles.likesAndCommentsBox}>
          <BsShare />
          <span className={styles.likeText}>50 shares</span>
        </div>
        <div className={styles.likesAndCommentsBox}>
          <BsBookmark />
          <span className={styles.likeText}>2 saved</span>
        </div>
      </div>
      {isShow && (
        <div className={styles.commentsBlock}>
          <div className={styles.commentsContainer}>
            {i.comments
              ?.slice(0, option === 'All' ? i.comments.length : 3)
              .map((c, index) => (
                <div key={index}>
                  <div className={styles.commentBoxContainer}>
                    <div className={styles.senderImage}>
                      <img
                        className={styles.postInputContainerImage}
                        src="/col-3-img.png"
                        alt="img"
                      />
                    </div>
                    <div className={styles.commentBoxRightblock}>
                      <div className={styles.commentBox}>
                        <p className={styles.senderName}>
                          {c.name}{' '}
                          <span className={styles.commentTime}>
                            {c.time} min
                          </span>
                        </p>
                        <p className={styles.senderComment}>{c.comment}</p>
                      </div>
                      <div className={styles.commentActions}>
                        <p className={styles.actions}>{c.likes + ' '}Like</p>
                        <p className={styles.actions}>{c.reply + ' '}Reply</p>
                      </div>
                    </div>
                  </div>
                  {i.reply.map(
                    (r, index) =>
                      r.commentId === c.id && (
                        <div
                          key={index}
                          className={styles.replyCommentBoxContainer}
                        >
                          <div className={styles.senderImage}>
                            <img
                              className={styles.postInputContainerImage}
                              src="/col-3-img.png"
                              alt="img"
                            />
                          </div>
                          <div className={styles.commentBoxRightblock}>
                            <div className={styles.commentBox}>
                              <p className={styles.senderName}>{c.name}</p>
                              <p className={styles.senderComment}>
                                {r.comment}
                              </p>
                            </div>
                            <div className={styles.commentActions}>
                              <p className={styles.actions}>
                                {c.likes + ' '}Like
                              </p>
                              <p className={styles.actions}>
                                {c.reply + ' '}Reply
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              ))}
          </div>
          <div className={styles.mostRecent}>
            <select
              className={styles.selectOptions}
              id="cars"
              name="options"
              onChange={(e) => setOption(e.target.value)}
            >
              <option value="most recent">most recent</option>
              <option value="All">All</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default Actions;
