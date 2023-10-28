import Check from "../Check";
import './style.css';
import { usePrefs } from "../../../prefs-context";

const Topping = ({ topping }) => {

const veganValue = usePrefs().veganOnly;

  return (
    <div className="topping">
      <Check vegan={veganValue} isVeganToping={topping.vegan}/>
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
