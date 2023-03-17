import React, { useState } from "react";

function BmiCalculator() {
  const [height, setHeight] = useState(60);
  const [weight, setWeight] = useState(50);
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(20);
  const [showBmi, setShowBmi] = useState(false);
  const [bmi, setbmi] = useState("");

  const calculateBmi = () => {
    const heightInMeters = (height * 2.54) / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  };

  const getWeightCategory = (bmi) => {
    if (gender === "male") {
      if (bmi <= 18.5) {
        return "Underweight";
      } else if (bmi <= 24.9) {
        return "Normal weight";
      } else if (bmi <= 29.9) {
        return "Overweight";
      } else {
        return "Obesity";
      }
    } else {
      if (bmi <= 20.5) {
        return "Underweight";
      } else if (bmi <= 26.9) {
        return "Normal weight";
      } else if (bmi <= 31.9) {
        return "Overweight";
      } else {
        return "Obesity";
      }
    }
  };

  const handleHeightChange = (event) => {
    setHeight(parseFloat(event.target.value));
  };

  const handleWeightChange = (event) => {
    setWeight(parseFloat(event.target.value));
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(parseFloat(event.target.value));
  };

  const weightCategory = getWeightCategory(bmi);

  const handleClick = () => {
    setbmi(calculateBmi());
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <label>
        Height (inches):
        <input
          type="number"
          value={height}
          min={24}
          max={96}
          onChange={handleHeightChange}
        />
      </label>
      <br />
      <label>
        Weight (kg):
        <input
          type="number"
          value={weight}
          min={0}
          onChange={handleWeightChange}
        />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={handleGenderChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          min={2}
          max={100}
          onChange={handleAgeChange}
        />
      </label>
      <br />
      <br />
      <button onClick={handleClick}>Calculate BMI</button>

      <br />
      <br />
      {bmi && (
        <h3>
          Your BMI is {bmi}. Your weight category is {weightCategory}.
        </h3>
      )}
    </div>
  );
}

export default BmiCalculator;
