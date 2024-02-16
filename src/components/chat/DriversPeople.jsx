import ChatUser from "./ChatUser";

import {
  collection,
  onSnapshot,
  where,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { useChatContext } from "../../context/ChatContext";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useAuthContext } from "../../context/AuthProvider";

const DriversPeople = () => {
  const [chatUsers, setChatUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useChatContext();
  const { chatRoomId, setSelect } = useChatContext();
  const [active, setActive] = useState(chatRoomId);
  const { admin } = useAuthContext();
  const isMediumDevice = useMediaQuery("only screen and (min-width : 768px)");

  useEffect(() => {
    const fetchPeople = () => {
      const q = query(
        collection(db, "Chatrooms"),
        where("userIds", "array-contains", admin.phoneNoOrEmail),
        orderBy("lastMessageTime", "desc")
      );
      const unsub = onSnapshot(q, (querySnapShot) => {
        let people = [];
        querySnapShot.forEach((doc) => {
          people.push({ ...doc.data(), id: doc.id });
        });
        setChatUsers(people);
      });
      setLoading(false);

      return () => unsub();
    };

    fetchPeople();
  }, []);

  const handleSelect = (u, id) => {
    dispatch({ type: "CHANGE_USER", payload: u });
    setActive(id);

    if (!isMediumDevice) {
      setSelect(true);
    }
  };

  return (
    <ul className="space-y-5 ">
      {chatUsers.map((person) => {
        return (
          <ChatUser
            key={person.id}
            person={person}
            active={active}
            onclick={handleSelect}
          />
        );
      })}
    </ul>
  );
};
export default DriversPeople;
