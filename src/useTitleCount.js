import { useEffect } from "react";

const useTitleCount = ({Count}) => {
  useEffect(() => {
    console.log("I am first");
    if (Count >= 1) {
      document.title = `chats (${Count})`;
    } else {
      document.title = `chats`;
    }
  }, [Count]);
};
export default useTitleCount;
