const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: ` bg-primary-default text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Message = ({ chat }) => {
  const messageClass =
    chat.data.senderId === "support@distro.com.ng"
      ? `${style.sent}`
      : `${style.received}`;

  const time =
    chat.data.senderId === "support@distro.com.ng"
      ? "-ml-16 left-0"
      : "-mr-16 right-0";
  const float =
    chat.data.senderId === "support@distro.com.ng"
      ? "float-right"
      : "float-left";

  const convertTimestampToTime = (timestamp) => {
    if (!timestamp) {
      return "";
    }

    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();

    const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
    const period = hours < 12 ? "AM" : "PM";

    // Format the minutes
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  const code = chat.data.code;

  return (
    <div className={` `}>
      {code == "TXT" && (
        <div className={` ${style.message} ${messageClass} relative `}>
          <h1 className={style.name}>
            {chat.name}
            {/* <span className="xl:text-[0.775rem] text-xs text-graylight ml-1.5">
            {chat.time}
          </span> */}
          </h1>
          <span className={`absolute text-gray-400 text-sm  ${time}`}>
            {convertTimestampToTime(chat.data.createdOn?.toDate())}
          </span>
          <p>{chat.data.content}</p>
        </div>
      )}

      {code === "IMG" && (
        <div className={`w-[15rem] relative h-[14rem] py-2 px-3   ${float}`}>
          <img
            src={chat.data.content}
            alt=""
            className="w-full h-full object-cover"
          />
          <span className={`absolute text-gray-400 text-sm  ${time}`}>
            {convertTimestampToTime(chat.data.createdOn?.toDate())}
          </span>
        </div>
      )}
    </div>
  );
};

export default Message;
