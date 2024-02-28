import { useState } from "react";
import { db, storage } from "../../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useChatContext } from "../../context/ChatContext";
import { v4 as uuid } from "uuid";
import { useAuthContext } from "../../context/AuthProvider";

const ChatInput = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const { chatRoomId, token } = useChatContext();

  const {
    admin: { phoneNoOrEmail: CurrentUid },
  } = useAuthContext();

  const handleSend = async (e) => {
    e.preventDefault();

    let content = "";
    let code = "";

    if (text) {
      content = text;
      code = "TXT";
    } else if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);
      content = await getDownloadURL(storageRef);
      code = "IMG";
    } else {
      return;
    }

    // Add message to Firestore
    await addDoc(collection(db, "Chatrooms", chatRoomId, "Messages"), {
      code,
      content,
      createdOn: serverTimestamp(),
      senderId: CurrentUid,
      id: uuid(),
      isMessageRead: false,
    });

    // Update chatroom properties

    const chatRoomRef = doc(db, "Chatrooms", chatRoomId);
    await updateDoc(chatRoomRef, {
      lastMessageSenderId: CurrentUid,
      lastMessageTime: Timestamp.now(),
      lastMessage: content,
    });

    // Reset input fields
    setText("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <form
      onSubmit={handleSend}
      className="mt-3 md:w-[85%] w-full rounded-[1.25rem]  bg-background py-2 px-3"
    >
      <span className="text-graylight md:text-[.9rem] text-sm">
        Write a message
      </span>

      <div className=" flex items-center">
        <label
          type="button"
          htmlFor="file"
          className="hover:bg-slate-300 rounded-lg p-2"
        >
          <input
            type="file"
            id="file"
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
          <svg
            className="md:w-[20px] w-[15px]"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_1490_9902)">
              <path
                d="M18 9.99992L10.324 17.6759C9.25849 18.7141 7.82691 19.2907 6.33927 19.2811C4.85164 19.2714 3.42768 18.6761 2.37574 17.6242C1.32381 16.5723 0.72855 15.1483 0.71887 13.6607C0.70919 12.173 1.28586 10.7415 2.32402 9.67592L10.2294 1.77058C10.9366 1.06334 11.8958 0.666016 12.896 0.666016C13.8962 0.666016 14.8554 1.06334 15.5627 1.77058C16.2699 2.47783 16.6673 3.43706 16.6673 4.43725C16.6673 5.43745 16.2699 6.39667 15.5627 7.10392L7.88536 14.7813C7.53174 15.1349 7.05212 15.3335 6.55202 15.3335C6.05193 15.3335 5.57231 15.1349 5.21869 14.7813C4.86507 14.4276 4.66641 13.948 4.66641 13.4479C4.66641 12.9478 4.86507 12.4682 5.21869 12.1146L12.6667 4.66658"
                stroke="#868686"
                strokeWidth="1.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_1490_9902">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </label>

        <input
          type="text"
          className="outline-none bg-transparent py-3 px-2 w-[90%] "
          placeholder="chat..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">
          <svg
            className="md:w-[40px] w-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M0 3.07617V16.1531L23.0769 19.9992L0 23.8454V36.9223L40 19.9992L0 3.07617Z"
              fill="#00A69C"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
export default ChatInput;
