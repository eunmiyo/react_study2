import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
  return (
    <div className={styles.wrapper}>
      안녕하세요 금요일이에요
      <span clssName="something">css module 테스트 중이에요</span>
    </div>
  );
};

export default CSSModule;
