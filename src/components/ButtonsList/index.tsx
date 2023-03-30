import { KeypadItem } from "../Keypad";
import "./styles.css";

type ButtonListProps = {
    items: KeypadItem[];
    keys: string[];
};

const ButtonList = ({ items, keys }: ButtonListProps) => {
    const filteredItems = items.filter((item) => keys.includes(item.key));

    return (
        <>
            {items.map((item) =>
                filteredItems.includes(item) ? (
                    <button className="keypad-button noselect" key={item.id}>
                        {item.label}

                        {/* <img src={item.image} alt={item.label} /> */}
                    </button>
                ) : null
            )}
        </>
    );
};

export default ButtonList;
