import './App.css';
import { useState, ChangeEvent } from 'react';
import { NavLink } from 'react-router-dom';
import React from 'react';


const Calculator: React.FC = () => {
  const simbol: string[] = ["/", "X", "-", "+", "="];
  const operation: (string | number)[] = [
    "C",
    "DEL",
    "?",
    "/",
    "1",
    "2",
    "3",
    "X",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "+",
    "0",
    ".",
    "="
  ]
  
  const [display, setDisplay] = useState<string>("0");
  const [history, setHistory] = useState<string>('');
  const handleClick = (e:any): void => {
    const lastChar: string = display[display.length - 1];

    if (e === "C") {
      setDisplay("0");
      setHistory('');
    } else if (e === "DEL") {
      setDisplay((current: string) => current.slice(0, -1));
    } else if (e === "=") {
      try {
        const result: number = eval(display.replace('X', '*'));
        const newHistory: string = `${history}${result}\n`;
        setHistory(newHistory);
        if (isNaN(result) || !isFinite(result)) {
          setDisplay('Error');
        } else {
          setDisplay(String(result));
        }
      } catch (error) {
        setDisplay('Error');
      }
    } else if (simbol.includes(e)) {
      if (simbol.includes(lastChar) || lastChar === "=") {
        setDisplay('Error');
        return;
      }
      setDisplay((current: string) => (current === "0" ? String(e) : current + e));
    } else if (display.includes('.')) {
      if (e === '.') {
        setDisplay('Error');
        return;
      }
      setDisplay((current: string) => (current === "0" ? String(e) : current + e));
    } else {
      setDisplay((current: string) => (current === "0" ? String(e) : current + e));
    }
  };
  

  return (
    <div className="main">
      <div className='container'>
        <div className="history">
          <h2>{history}</h2>
        </div>
        <div className='result'>{display}</div>
        <div className='operation'>
          {operation.map((val: string | number, index: number) => (
            val === '?' ? (
              <NavLink className={'span-1'} to='/supportpage' key={index}>{val}</NavLink>
            ) : (
              <div
                onClick={() => { handleClick(String(val)) }}
                className={simbol.includes(String(val))
                  ? 'span-1-color'
                  : String(val) === "0" ? 'span-2'
                    : 'span-1'
                }
                key={index}
              >
                {val}
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
