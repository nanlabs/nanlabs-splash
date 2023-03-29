import { FC, ReactNode, useEffect, useState } from "react";
import "./styles.css";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  limit,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { db } from "../../utils/firebase-config";

type SendMessageProps = {
  children?: ReactNode;
};
type MessagesProps = {
  children?: ReactNode;
};

const Messages: FC<MessagesProps> = () => {
  const [messageType, setMessageType] = useState<string>();

  useEffect(() => {
    console.log("firestore: ", db);
    const q = query(
      collection(db, "messages"),
      orderBy("timestamp", "desc"),
      limit(1)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      try {
        querySnapshot.forEach((doc) => {
          console.log("Message object: ", doc.data());
          setMessageType(doc.data().type);
        });
      } catch (error) {
        console.log("Error getting messages: ", error);
      }
    });

    return () => unsubscribe();
  }, []);
  console.log("Current messageType: ", messageType);

  return (
    <div>
      Latest message sent: <span className="messageSpan">{messageType}</span>
    </div>
  );
};

export const SendMessage: FC<SendMessageProps> = () => {
  // sends new message to the firestore db
  const sendMessage = async (type: string) => {
    console.log(type);

    await addDoc(collection(db, "messages"), {
      type: type,
      timestamp: serverTimestamp(),
    });
  };

  // prompt to let you choose a type of message to display on the screen
  useEffect(() => {
    const promptMessage = `Please choose an option:
    1. Option 1
    2. Option 2
    3. Option 3
    4. Option 4`;

    const selectedOption = window.prompt(promptMessage)?.split(".")[0].trim();

    if (selectedOption) {
      switch (selectedOption) {
        case "1":
          console.log("Confetti selected");
          sendMessage("confetti");
          break;
        case "2":
          console.log("Animal 2 selected");
          sendMessage("animal");
          break;
        case "3":
          console.log("Language 3 selected");
          sendMessage("language");
          break;
        case "4":
          console.log("Creeper 4 selected");
          sendMessage("creeper");
          break;
        default:
          console.log("Invalid option selected");
          break;
      }
    }
  }, []);

  return (
    <div className="typeButton">
      *Aqui irian botones de testeo si se pudiesen clickear, pero no se puede
      por que el splash o las sparkles los tapan*
      {/* <button className="typeButton" onClick={() => sendMessage("confetti")}>
        Confetti
      </button>
      <button className="typeButton" onClick={() => sendMessage("animal")}>
        Animal
      </button>
      <button className="typeButton" onClick={() => sendMessage("language")}>
        Language
      </button>
      <button className="typeButton" onClick={() => sendMessage("creeper")}>
        Creeper
      </button> */}
    </div>
  );
};

export default Messages;
