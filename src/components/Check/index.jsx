import { useState } from "react";
import './style.css';

const Check = ({ vegan, isVeganToping }) => {
  const [checked, setChecked] = useState(false);

  console.log("from check: ", vegan, isVeganToping);

  const handleClick = () => {
    if (!vegan || isVeganToping) {
      setChecked(!checked);
    }
  };

  const classValue = !vegan || isVeganToping ? "check" : "check check--disabled";

  return (
    <button
      className={classValue}
      onClick={handleClick}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;
