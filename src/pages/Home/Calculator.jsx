import React, { useRef, useState } from 'react';
import styles from './Calculator.module.css';
import { create, all, nthRoot } from 'mathjs';

const Calculator = () => {
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');
  const [isShowingResult, setIsShowingResult] = useState(false);

  const operationRef = useRef();

  const math = create(all);
  math.import(
    {
      log: math.log10,
      ln: math.log,
      nthRoot: (root, number) => nthRoot(number, root),
    },
    { override: true }
  );

  const onClickButton = (value) => {
    operationRef.current.focus();
    checkIfShowingResult();
    setOperation((operation) => operation.concat(value));
  };

  const onClickEqual = () => {
    if (!operation) return;

    const op = operation.replace(/√|∛/g, function (match) {
      if (match === '√') return 'sqrt';
      if (match === '∛') return 'cbrt';
    });

    try {
      let newResult = math.evaluate(op);
      newResult = math.format(newResult, {
        notation: 'auto',
        precision: 6,
        lower: -4,
        upper: 4,
      });
      setResult(newResult);
    } catch (error) {
      setResult('Syntax Error');
    } finally {
      setIsShowingResult(true);
    }
  };

  // TODO Agregar simbolo para raiz enésima
  const onClickNthRoot = () => {
    const lastNumber = operation.match(/\d+$/);
    if (!lastNumber) return;
    setOperation((operation) => {
      return operation
        .slice(0, -lastNumber[0].length)
        .concat(`nthRoot(${lastNumber}, `);
    });
  };

  const onClickMemoryRead = () => {
    checkIfShowingResult();
    if (!result || result === 'Syntax error') return;
    setOperation((operation) => operation.concat(result));
  };

  const checkIfShowingResult = () => {
    if (isShowingResult) {
      setIsShowingResult(false);
      setOperation('');
    }
  };

  const allClear = () => {
    setOperation('');
    setResult('');
  };

  function moveCaretAtEnd(e) {
    var temp_value = e.target.value;
    e.target.value = '';
    e.target.value = temp_value;
  }

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className="calculator__screen-container">
          <div className={styles.calculatorScreen}>
            <input
              className={styles.calculatorOperation}
              placeholder={operation ?? 'Ingresa una operacion...'}
              readOnly={true}
              ref={operationRef}
              onFocus={moveCaretAtEnd}
            />
            <input
              id="result"
              className={styles.calculatorResult}
              placeholder="="
              readOnly={true}
              value={'= ' + result}
            />
          </div>
        </div>
        <div className={styles.calculatorKeyboard}>
          <Button text="(" value="(" alt={true} onClick={onClickButton} />
          <Button text=")" value=")" alt={true} onClick={onClickButton} />
          <Button text="x!" value="!" alt={true} onClick={onClickButton} />
          <Button text="x²" value="^2" alt={true} onClick={onClickButton} />
          <Button text="√" value="√(" alt={true} onClick={onClickButton} />
          <Button text="ⁿ√" value="ⁿ√" alt={true} onClick={onClickNthRoot} />
          <Button text="sin" value="sin(" alt={true} onClick={onClickButton} />
          <Button text="cos" value="cos(" alt={true} onClick={onClickButton} />
          <Button text="tg" value="tg(" alt={true} onClick={onClickButton} />
          <Button text="x³" value="^3" alt={true} onClick={onClickButton} />
          <Button text="∛" value="∛(" alt={true} onClick={onClickButton} />
          <Button text="xⁿ" value="^" alt={true} onClick={onClickButton} />
          <Button text="7" value="7" onClick={onClickButton} />
          <Button text="8" value="8" onClick={onClickButton} />
          <Button text="9" value="9" onClick={onClickButton} />
          <Button text="/" value="/" alt={true} onClick={onClickButton} />
          <Button text="%" value="%" alt={true} onClick={onClickButton} />
          <Button text="ln" value="ln(" alt={true} onClick={onClickButton} />
          <Button text="4" value="4" onClick={onClickButton} />
          <Button text="5" value="5" onClick={onClickButton} />
          <Button text="6" value="6" onClick={onClickButton} />
          <Button text="*" value="*" alt={true} onClick={onClickButton} />
          <Button text="log" value="log(" alt={true} onClick={onClickButton} />
          <Button text="e" value="e" alt={true} onClick={onClickButton} />
          <Button text="1" value="1" onClick={onClickButton} />
          <Button text="2" value="2" onClick={onClickButton} />
          <Button text="3" value="3" onClick={onClickButton} />
          <Button text="-" value="-" alt={true} onClick={onClickButton} />
          <button
            className={`${styles.calculatorButton} ${styles.bg2}`}
            onClick={allClear}
          >
            AC
          </button>
          <Button text="." value="." alt={true} onClick={onClickButton} />
          <Button text="0" value="0" onClick={onClickButton} />
          <Button text="π" value="pi" alt={true} onClick={onClickButton} />
          <Button text="+" value="+" alt={true} onClick={onClickButton} />
          <Button text="MR" alt={true} onClick={onClickMemoryRead} />
          <button
            className={`${styles.calculatorButton} ${styles.calculatorButtonEqual}`}
            onClick={onClickEqual}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

const Button = ({ text, value, alt = false, onClick }) => {
  return (
    <button
      className={`${styles.calculatorButton} ${alt ? styles.bg2 : null}`}
      value={value}
      onClick={() => onClick(value)}
    >
      {text}
    </button>
  );
};

export default Calculator;
