import React, { useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [operation, setOperation] = useState("");

  const onButtonClickHandle = (value) => {
    setOperation((curValue) => {
      return curValue + value;
    });
  };

  const Button = ({ text, value, alt = false }) => {
    return (
      <button
        className={`${styles.calculatorButton} ${alt ? styles.bg2 : null}`}
        value={value}
        onClick={() => onButtonClickHandle(value)}
      >
        {text}
      </button>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className="calculator__screen-container">
          <div className={styles.calculatorScreen}>
            <input
              className={styles.calculatorOperation}
              placeholder={operation ?? 'Ingresa una operacion...'}
              readOnly={true}
            />
            <input
              id="result"
              className={styles.calculatorResult}
              placeholder="="
              readOnly={true}
            />
          </div>
        </div>
        <div className={styles.calculatorKeyboard}>
          <Button text="(" value="(" alt={true}></Button>
          <Button text=")" value=")" alt={true}></Button>
          <Button text="x!" value="x!" alt={true}></Button>
          <Button text="x²" value="x²" alt={true}></Button>
          <Button text="√" value="√" alt={true}></Button>
          <Button text="ⁿ√" value="ⁿ√" alt={true}></Button>
          <Button text="sin" value="sin" alt={true}></Button>
          <Button text="cos" value="cos" alt={true}></Button>
          <Button text="tg" value="tg" alt={true}></Button>
          <Button text="x³" value="x³" alt={true}></Button>
          <Button text="∛" value="∛" alt={true}></Button>
          <Button text="xⁿ" value="xⁿ" alt={true}></Button>
          <Button text="7" value="7"></Button>
          <Button text="8" value="8"></Button>
          <Button text="9" value="9"></Button>
          <Button text="/" value="/" alt={true}></Button>
          <Button text="%" value="%" alt={true}></Button>
          <Button text="ln" value="ln" alt={true}></Button>
          <Button text="4" value="4"></Button>
          <Button text="5" value="5"></Button>
          <Button text="6" value="6"></Button>
          <Button text="*" value="*" alt={true}></Button>
          <Button text="log" value="log" alt={true}></Button>
          <Button text="e" value="e" alt={true}></Button>
          <Button text="1" value="1"></Button>
          <Button text="2" value="2"></Button>
          <Button text="3" value="3"></Button>
          <Button text="-" value="-" alt={true}></Button>
          <Button text="AC" value="AC" alt={true}></Button>
          <Button text="." value="." alt={true}></Button>
          <Button text="0" value="0"></Button>
          <Button text="π" value="π" alt={true}></Button>
          <Button text="+" value="+" alt={true}></Button>
          <Button text="MR" value="MR" alt={true}></Button>
          <button
            className={`${styles.calculatorButton} ${styles.calculatorButtonEqual}`}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
