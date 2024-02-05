import React, { useState } from 'react';

function InputDisplay() {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
    <div>
  <p>{inputValue}</p>
    </div>
    </div>
  );
}

export default InputDisplay;
