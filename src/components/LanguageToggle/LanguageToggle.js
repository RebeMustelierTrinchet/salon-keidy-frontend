import styles from './languajeToggle.module.css';
import React, { useState } from 'react';

const LanguageToggle = ({ toggleLanguage }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
    toggleLanguage(isChecked ? 'es' : 'en');
  };

  return (
    <div>
      {/* <button onClick={() => toggleLanguage('en')}>English</button>
      <button onClick={() => toggleLanguage('es')}>Español</button> */}

      <div className={styles.switch__container}>
        <button
          className={`${styles.switch__button} ${isChecked ? styles.checked : ''}`}
          onClick={toggleSwitch}
        >
          <span className={styles.switch__text}>{isChecked ? 'ES' : 'EN'}</span>
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
