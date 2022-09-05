import React from 'react';
import Image from 'next/image';
import styles from '../styles/auth.module.scss';
import { Input, Button } from 'reactstrap';

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginDetailWrapper}>
        <Image
          className={styles.loginLogo}
          src="/Hexon.svg"
          height="70px"
          width="70px"
        />
        <Image
          className={styles.loginLogoText}
          src="/Hexon-text.svg"
          height="50px"
          width="100px"
        />
        <p className={styles.aboutHexon}>
          Hexon helps you connect and share with the people in your life.
        </p>
        <Input
          className={styles.input}
          name="text"
          placeholder="Email or Username"
          type="email"
        />
        <Input
          className={styles.input}
          name="password"
          placeholder="password"
          type="password"
        />
        <p className={styles.forgotPassword}>Forgot Password?</p>
        <Button className={styles.signIn}>Sign In</Button>
        <Button className={styles.newAccount}>Create New Account</Button>
      </div>
    </div>
  );
};

export default Login;
