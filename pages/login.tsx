import React, { useState, FC } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button } from '@material-ui/core';
import styles from '../styles/Home.module.css';
import { auth } from '../src/utils/firebase';

const Login: FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isClickable, setIsClickable] = useState<boolean>(false);
  const [loginButtonText, setLoginButtonText] = useState<string>('Login');

  const loginAction = async (e: any) => {
    e.preventDefault();
    setLoginButtonText('Logining...');
    setIsClickable(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push('/');
    } catch (err) {
      setLoginButtonText('Login');
      setIsClickable(false);
      alert('EmailまたはPasswordが異なります');
    }
  };

  return (
    <>
      <div className={styles.container}>
        <TextField
          id="email-field"
          label="Input Email"
          type="email"
          variant="outlined"
          className={styles.inputField}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <TextField
          id="password-field"
          label="Input Password"
          type="password"
          variant="outlined"
          className={styles.inputField}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <div className={styles.inputButtonField}>
          <Button
            variant="contained"
            color="primary"
            className={styles.inputButton}
            onClick={(e: any) => loginAction(e)}
            disabled={isClickable}
          >
            {loginButtonText}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
