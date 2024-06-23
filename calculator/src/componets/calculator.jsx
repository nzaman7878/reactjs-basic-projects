
import { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Calculator</h1>
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <div className="w-full p-2 border border-gray-300 rounded bg-gray-100">
            {result}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="p-4 bg-blue-500 text-white rounded"
            >
              {value}
            </button>
          ))}
          {['4', '5', '6', '*'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="p-4 bg-blue-500 text-white rounded"
            >
              {value}
            </button>
          ))}
          {['1', '2', '3', '-'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="p-4 bg-blue-500 text-white rounded"
            >
              {value}
            </button>
          ))}
          {['0', '.', '=', '+'].map((value) => (
            <button
              key={value}
              onClick={() => (value === '=' ? handleCalculate() : handleButtonClick(value))}
              className="p-4 bg-blue-500 text-white rounded"
            >
              {value}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 p-4 bg-red-500 text-white rounded"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
