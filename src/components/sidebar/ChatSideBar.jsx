import { Link } from "react-router-dom";
import { chatNavLinks } from "../../utils/data";

const ChatSideBar = () => {
  return (
    <aside className="fixed top-[6rem] w-[6rem] xl:block hidden bg-background h-screen">
      <ul className="flex flex-col items-center">
        {chatNavLinks.map((link, i) => (
          <li key={i}>
            <Link
              to={link.path}
              className="px-3 py-3 hover:scale-105 transition-all inline-block"
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default ChatSideBar;
