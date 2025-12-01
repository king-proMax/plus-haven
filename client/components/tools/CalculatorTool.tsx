import { useState } from 'react';
import { Delete, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CalculatorTool() {
  const { t } = useLanguage();
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperation = (op: string) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(result.toString());
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  const calculate = (prev: number, current: number, op: string): number => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '*':
        return prev * current;
      case '/':
        return prev / current;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    if (previousValue !== null && operation) {
      const currentValue = parseFloat(display);
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(result.toString());
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const buttonClasses =
    'px-3 py-3 rounded-lg font-semibold transition text-sm sm:text-base';
  const numberButtonClasses = `${buttonClasses} bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white`;
  const operationButtonClasses = `${buttonClasses} bg-blue-500 hover:bg-blue-600 text-white`;
  const equalsButtonClasses = `${buttonClasses} bg-green-500 hover:bg-green-600 text-white`;

  return (
    <div className="space-y-4">
      <div>
        <div className="p-4 rounded-lg bg-slate-900 dark:bg-slate-950 border border-slate-700">
          <p className="text-right text-3xl font-bold text-white font-mono break-words">
            {display}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {/* Row 1: Clear, Backspace, ÷, × */}
        <button
          onClick={handleClear}
          className={`${buttonClasses} col-span-2 bg-red-500 hover:bg-red-600 text-white`}
        >
          {t('common.clear')}
        </button>
        <button onClick={handleBackspace} className={operationButtonClasses}>
          <Delete className="w-4 h-4 mx-auto" />
        </button>
        <button onClick={() => handleOperation('/')} className={operationButtonClasses}>
          ÷
        </button>

        {/* Row 2: 7, 8, 9, × */}
        <button onClick={() => handleNumber('7')} className={numberButtonClasses}>
          7
        </button>
        <button onClick={() => handleNumber('8')} className={numberButtonClasses}>
          8
        </button>
        <button onClick={() => handleNumber('9')} className={numberButtonClasses}>
          9
        </button>
        <button onClick={() => handleOperation('*')} className={operationButtonClasses}>
          ×
        </button>

        {/* Row 3: 4, 5, 6, − */}
        <button onClick={() => handleNumber('4')} className={numberButtonClasses}>
          4
        </button>
        <button onClick={() => handleNumber('5')} className={numberButtonClasses}>
          5
        </button>
        <button onClick={() => handleNumber('6')} className={numberButtonClasses}>
          6
        </button>
        <button onClick={() => handleOperation('-')} className={operationButtonClasses}>
          −
        </button>

        {/* Row 4: 1, 2, 3, + */}
        <button onClick={() => handleNumber('1')} className={numberButtonClasses}>
          1
        </button>
        <button onClick={() => handleNumber('2')} className={numberButtonClasses}>
          2
        </button>
        <button onClick={() => handleNumber('3')} className={numberButtonClasses}>
          3
        </button>
        <button onClick={() => handleOperation('+')} className={operationButtonClasses}>
          +
        </button>

        {/* Row 5: 0, ., = */}
        <button
          onClick={() => handleNumber('0')}
          className={`${numberButtonClasses} col-span-2`}
        >
          0
        </button>
        <button onClick={handleDecimal} className={numberButtonClasses}>
          .
        </button>
        <button onClick={handleEquals} className={`${equalsButtonClasses} col-span-1`}>
          =
        </button>
      </div>

      <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
        <p className="text-xs text-blue-700 dark:text-blue-300">
          💡 <strong>Tip:</strong> Click or use keyboard (0-9, +, -, *, /, =) to calculate
        </p>
      </div>
    </div>
  );
}
