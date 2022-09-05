import React, { useState } from 'react';
import styles from './styles.module.scss';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
const CollectionHeading = ({ heading, text, isDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.collectionHeadingWrapper}>
      <span className={styles.heading}>{heading}</span>

      {isDropdown ? (
        <div className={styles.dropdown}>
          <Dropdown isOpen={isOpen} toggle={toggleHandler} direction="start">
            <DropdownToggle className={styles.horizontalDots}>
              <img
                src="/horizontal-dots.svg"
                alt="img"
                width="20px"
                height="5px"
              />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Header</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      ) : (
        <span className={styles.seeAll}>See All</span>
      )}
    </div>
  );
};

export default CollectionHeading;
