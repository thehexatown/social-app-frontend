import React, { useState } from 'react';
import styles from './style.module.scss';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const PostHeader = ({ i, post, setPost }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  const handler = (id) => {
    setPost(
      post.map((i) => (i.id === id ? { ...i, dropDown: !i.dropDown } : i))
    );
  };
  const closeHandler = (id) => {
    setPost(post.map((i) => (i.id === id ? { ...i, like: false } : i)));
  };

  return (
    <div className={styles.postContainerTopBar}>
      <div className={styles.postContainerTopBarLeft}>
        <div>
          <img
            className={styles.postProfile}
            src={i.profileImg}
            alt="img"
            width="44px"
            height="44px"
          />
        </div>
        <div className={styles.postContainerNameDetails}>
          <span className={styles.postContainerName}>{i.profileName}</span>
          <span className={styles.postContainerTime}>{i.time}</span>
        </div>
      </div>
      <div className={styles.verticalDots}>
        <div className={styles.dropdown}>
          <div onClick={() => handler(i.id)} className={styles.verticalDotsP}>
            <Dropdown isOpen={isOpen} toggle={toggleHandler} direction="start">
              <DropdownToggle className={styles.verticalDots}>
                <img
                  src="/vertical-dots.svg"
                  alt="img"
                  width="5px"
                  height="20px"
                />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Header</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
