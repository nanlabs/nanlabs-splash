import ButtonList from "../ButtonsList";
import "./styles.css";

export type KeypadItem = {
    label: string;
    image: string;
    id: number;
    key: string;
};

const items = [
    { label: "Item 1", image: "image1.png", id: 1, key: "animal" },
    { label: "Item 2", image: "image2.png", id: 2, key: "language" },
    { label: "Item 3", image: "image3.png", id: 3, key: "confetti" },
];

const keys = ["language", "confetti"];


const Keypad = () => {
    return (
        <div>
            <ButtonList items={items} keys={keys} />
        </div>
    );
};



export default Keypad;
