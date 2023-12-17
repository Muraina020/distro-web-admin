import { CusChatMsg } from "../../utils/data";

const CustomerChats = () => {
  return (
    <div>
      <div className="flex gap-x-4 items-center border-b px-4 pb-1">
        <div className="xl:w-[4rem] md:w-[3rem] w-[2rem] xl:h-[4rem] md:h-[3rem] h-[2rem] rounded-full">
          <img
            src="https://img.freepik.com/premium-photo/smiling-young-african-man-looking-camera-standing-home-headshot-portrait_562687-3051.jpg?size=626&ext=jpg&ga=GA1.1.1239515754.1699101641&semt=sph"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h1 className="xl:text-[1.875rem] md:text-[1.1rem] text-base leading-[1.32213rem]  text-primary-black font-semibold">
            Leslie Alexander
          </h1>
          <h6 className="text-primary-default mt-1.5 xl:text-[1.1875rem] text-sm font-medium">
            Active
          </h6>
        </div>
      </div>
      <article className="flex flex-col min-h-[68vh]">
        <div className="flex-grow">
          <div className="divider xl:text-base text-sm">Fri, Jul 28</div>

          <h4 className="text-center text-[0.875rem] text-primary-black">
            I’m having issues with my account
          </h4>

          <div className="px-4 mt-2">
            <div className="space-y-5">
              {CusChatMsg.map((chat, i) => {
                return (
                  <div key={i} className=" flex items-start gap-x-2">
                    <div className="xl:w-[3.125rem] flex-shrink-0 w-[1.9rem] xl:h-[3.125rem] h-[1.9rem]">
                      <img
                        src={chat.img}
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <div className="w-[37.8125rem]">
                      <h1 className="text-primary-black xl:text-[1.175rem] text-base font-semibold">
                        {chat.name}
                        <span className="xl:text-[0.7rem] text-xs text-graylight ml-1.5">
                          {chat.time}
                        </span>
                      </h1>

                      <p className="mt-1 text-gray-600 xl:text-[1rem] text-sm leading-[1.875rem]">
                        {chat.msg}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-[0.875rem] text-center mt-1">
              Jane Cooper ended the chat
            </p>
          </div>
        </div>

        <div className="px-4">
          <form className="mt-12 w-[85%] rounded-[1.25rem]  bg-background py-2 px-3">
            <span className="text-graylight text-[1.125rem]">
              Write a message
              <div className=" flex items-center">
                <button>
                  <svg
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
                </button>

                <input
                  type="text"
                  className="outline-none bg-transparent py-3 px-2 w-[90%] "
                  placeholder="chat..."
                />

                <button>
                  <svg
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
            </span>
          </form>
        </div>
      </article>
    </div>
  );
};
export default CustomerChats;
