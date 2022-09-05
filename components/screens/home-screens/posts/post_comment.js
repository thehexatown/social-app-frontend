import React, { useState } from 'react';
import styles from './style.module.scss';

const PostComment = ({ i, post, setPost }) => {
  const [comment, setComment] = useState('');
  const submitComent = () => {
    const value = post.map((p) =>
      p.id === i.id
        ? {
            ...p,
            comments: [
              ...p.comments,
              { name: 'Luis', comment: comment, reply: 0, time: 1, likes: 0 },
            ],
          }
        : p
    );
    setPost(value);
    setComment('');
  };
  return (
    <div className={styles.postInputContainer}>
      <img
        className={styles.postInputContainerImage}
        src="/col-3-img.png"
        alt="img"
      />
      <div className={styles.inputContainer}>
        <input
          className={styles.postInput}
          type="text"
          value={comment}
          placeholder="Write your comment..."
          onChange={(e) => setComment(e.target.value)}
        />

        <img className={styles.inputIcons} src="/paper-clip.svg" alt="img" />
        <img className={styles.inputIcons} src="/smile.svg" alt="img" />
        {comment.length < 1 ? (
          <img
            className={styles.inputIcons}
            src="/image-gallery.svg"
            alt="img"
          />
        ) : (
          <div className={styles.sendComment} onClick={() => submitComent()}>
            <img
              className={styles.sendIcons}
              src="/send-comment.svg"
              alt="img"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostComment;
