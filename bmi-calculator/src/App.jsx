import { useState, useMemo } from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(180);

  function onWeightChange(e) {
    setWeight(e.target.value);
  }

  function onHeightChange(e) {
    setHeight(e.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return ((weight / (calculateHeight * calculateHeight)).toFixed(1));
  }, [weight, height]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">BMI Calculator</h1>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Weight: <span id="weightValue">{weight}</span> kg</label>
          <input 
            type="range"
            value={weight}
            onChange={onWeightChange}
            min={40}
            max={220}
            className="w-full mb-4"
          />
          <label className="block mb-2 text-gray-700">Height: <span id="heightValue">{height}</span> cm</label>
          <input 
            type="range"
            value={height}
            onChange={onHeightChange}
            min={140}
            max={220}
            className="w-full mb-4"
          />
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-700">Your BMI is</p>
          <p id="bmiResult" className="text-2xl font-bold">{output}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
