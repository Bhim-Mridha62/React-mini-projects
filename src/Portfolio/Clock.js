import React from 'react';
// import './Clock.css'; // Import the CSS file for styling
const Clock = () => {
  const numbers = Array.from(Array(12).keys()); // Create an array of numbers from 0 to 11

  const calculatePosition = (index, total) => {
    const angle = (index / total) * 360; // Calculate the angle based on the index and total numbers
    const radius = 200; // Define the radius of the circle
    const centerX = 200; // Define the X-coordinate of the center of the circle
    const centerY = 900; // Define the Y-coordinate of the center of the circle

    const radians = (angle * Math.PI) / 180; // Convert the angle to radians
    const x = centerX + radius * Math.cos(radians); // Calculate the X-coordinate using cosine
    const y = centerY + radius * Math.sin(radians); // Calculate the Y-coordinate using sine

    return { x, y };
  };

  return (
    <div className="Circle">
        <div className="Allnumber">
      {numbers.map((number, index) => {
        const { x, y } = calculatePosition(index, numbers.length);
        return (
          <div className="number" key={number} style={{ left: x, top: y }}>
            {number + 1}
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Clock;
