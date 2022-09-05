import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import PostHeader from './header';
import Actions from './actions';
import PostComment from './post_comment';

const PostOne = ({ postData }) => {
  const [post, setPost] = useState([]);
  const [image, setImage] = useState(true);
  const [seondImage, setSeondImage] = useState(true);
  const [thirdImage, setThirdImage] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3333/post`)
      .then((res) => res.json())
      .then((res) => setPost(res))
      .catch((err) => console.log('err', err.response));
  }, []);

  const openImage = () => {
    setImage(false);
  };
  const closeImage = () => {
    setImage(true);
  };
  const openImageT = () => {
    setSeondImage(false);
  };
  const closeImageT = () => {
    setSeondImage(true);
  };
  const openImageTh = () => {
    setThirdImage(false);
  };
  const closeImageTh = () => {
    setThirdImage(true);
  };

  function getFileType(file) {
    if (file.type.match('image.*')) return 'image';

    if (file.type.match('video.*')) return 'video';

    if (file.type.match('audio.*')) return 'audio';

    // etc...

    return 'other';
  }
  useEffect(() => {
    if (!image || !seondImage || !thirdImage) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [image, seondImage, thirdImage]);
  // const handleCheck = (arr) => {
  //   console.log("i", arr);
  //   const aa = arr.map((i) => i.img.split("."));
  //   console.log("object", aa);
  // };
  return (
    <div>
      {post?.map((i, index) => (
        <div key={index} className={styles.postContainer}>
          <PostHeader post={post} setPost={setPost} i={i} />
          {/*  */}
          <p className={styles.favouritePlace}>{i.favouritePlace}</p>
          {/*  */}

          {i.img?.length === 3 ? (
            <div className={styles.postImages}>
              {/* {handleCheck(i.img)} */}
              <div className={styles.leftImageContainer}>
                <img onClick={openImage} src={i.img[0]} alt="img" />
                <div
                  id="myModal"
                  className={image ? styles.modal : styles.modalOpen}
                >
                  <span onClick={closeImage} className={styles.close}>
                    &times;
                  </span>
                  <img
                    onClick={openImageT}
                    className={styles.modalcontent}
                    src={i.img[0]}
                    id="img01"
                    alt="img"
                  />
                  <div id="caption"></div>
                </div>
              </div>
              <div className={styles.rightImageContainer}>
                <div className={styles.leftImageContainerTop}>
                  <img
                    onClick={openImageT}
                    // className={styles.leftImageContainerTop}
                    src={i.img[1]}
                    alt="img"
                  />
                  <div
                    id="myModal"
                    className={seondImage ? styles.modal : styles.modalOpen}
                  >
                    <span onClick={closeImageT} className={styles.close}>
                      &times;
                    </span>
                    <img
                      className={styles.modalcontent}
                      src={i.img[1]}
                      id="img01"
                      alt="img"
                    />
                    <div id="caption"></div>
                  </div>
                </div>
                <div className={styles.leftImageContainerBottom}>
                  <img
                    onClick={openImageTh}
                    // className={styles.leftImageContainerBottom}
                    src={i.img[2]}
                    alt="img"
                  />
                  <div
                    id="myModal"
                    className={thirdImage ? styles.modal : styles.modalOpen}
                  >
                    <span onClick={closeImageTh} className={styles.close}>
                      &times;
                    </span>
                    <img
                      className={styles.modalcontent}
                      src={i.img[2]}
                      id="img01"
                      alt="img"
                    />
                    <div id="caption"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.postImagesTwo}>
              <video
                className={styles.video}
                src={i?.img[0]}
                autoPlay
                controls
                loop={true}
                type="video/mp4"
              />
            </div>
          )}
          {/*  */}
          <Actions i={i} post={post} setPost={setPost} />

          {/*  */}
          <PostComment i={i} post={post} setPost={setPost} />
        </div>
      ))}
    </div>
  );
};

export default PostOne;
