import Check from "../Check";
import { usePrefs } from "../../../prefs-context";

const Header = () => {

    const { veganOnly, setVeganOnly } = usePrefs()

    const handleClick = () => {
        setVeganOnly(!veganOnly)
    }

    return (
        <div>
            <button onClick={handleClick}>vegan</button>
        </div>
    )
};

export default Header;