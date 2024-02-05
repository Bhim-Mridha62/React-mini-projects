import { useState, useEffect } from 'react';

function MyForm() {
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    const storedInputs = localStorage.getItem('formInputs');
    if (storedInputs) {
      setInputs(JSON.parse(storedInputs));
    }
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('formInputs', JSON.stringify(inputs));
    alert('Form submitted!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ''}
          onChange={handleChange}
        />
      </label>
      <label>Enter your age:
        <input
          className="input"
          type="number"
          name="age"
          value={inputs.age || ''}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default MyForm;
