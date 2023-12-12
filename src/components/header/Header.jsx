import { Link } from "react-router-dom";
import logo from "../../assets/img/distro-logo.png";
import Container from "../ui/Container";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { openSidebar } = useAppContext();

  return (
    <header className=" py-6 lg:px-11 px-5 sticky left-0 w-full top-0 bg-background z-20 ">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex gap-x-6">
            <button onClick={openSidebar} className="lg:hidden block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="18"
                viewBox="0 0 28 18"
                fill="none"
              >
                <path
                  d="M2 2H14"
                  stroke="#00A69C"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M2 9.2002H26"
                  stroke="#00A69C"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M2 16.4004H20"
                  stroke="#00A69C"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <Link to={"/"}>
              <div className=" lg:w-[9.70575rem] lg:h-[3.28713rem] w-[4rem]  ">
                <img src={logo} alt="distor logo" className="h-full w-full" />
              </div>
            </Link>
          </div>

          <div className="max-w-[366px] w-full lg:flex hidden items-center bg-white rounded-[48px] p-1 pr-3">
            <button className="pl-2">
              <svg
                className="lg:w-[25px] lg:h-[25px] w-[20px] h-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_1403_8372)">
                  <path
                    d="M15.4996 14.0001H14.7096L14.4296 13.7301C15.6296 12.3301 16.2496 10.4201 15.9096 8.39014C15.4396 5.61014 13.1196 3.39014 10.3196 3.05014C6.08965 2.53014 2.52965 6.09014 3.04965 10.3201C3.38965 13.1201 5.60965 15.4401 8.38965 15.9101C10.4196 16.2501 12.3296 15.6301 13.7296 14.4301L13.9996 14.7101V15.5001L18.2496 19.7501C18.6596 20.1601 19.3296 20.1601 19.7396 19.7501C20.1496 19.3401 20.1496 18.6701 19.7396 18.2601L15.4996 14.0001ZM9.49965 14.0001C7.00965 14.0001 4.99965 11.9901 4.99965 9.50014C4.99965 7.01014 7.00965 5.00014 9.49965 5.00014C11.9896 5.00014 13.9996 7.01014 13.9996 9.50014C13.9996 11.9901 11.9896 14.0001 9.49965 14.0001Z"
                    fill="#6C8B64"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1403_8372">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none p-2 rounded-[48px]"
            />
          </div>

          <ul className="flex gap-x-3">
            <li className="lg:hidden block">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path
                    d="M14.5195 13.1445H13.7953L13.5386 12.897C14.6386 11.6136 15.207 9.86279 14.8953 8.00195C14.4645 5.45362 12.3378 3.41862 9.77112 3.10695C5.89362 2.63029 2.63029 5.89362 3.10695 9.77112C3.41862 12.3378 5.45362 14.4645 8.00195 14.8953C9.86279 15.207 11.6136 14.6386 12.897 13.5386L13.1445 13.7953V14.5195L17.0403 18.4153C17.4161 18.7911 18.0303 18.7911 18.4061 18.4153C18.782 18.0395 18.782 17.4253 18.4061 17.0495L14.5195 13.1445ZM9.01945 13.1445C6.73695 13.1445 4.89445 11.302 4.89445 9.01945C4.89445 6.73695 6.73695 4.89445 9.01945 4.89445C11.302 4.89445 13.1445 6.73695 13.1445 9.01945C13.1445 11.302 11.302 13.1445 9.01945 13.1445Z"
                    fill="black"
                  />
                </svg>
              </button>
            </li>
            <li>
              <Link to={"/chat"}>
                <button>
                  <svg
                    className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                  >
                    <path
                      d="M4.07786 29.3543L9.06086 27.6925L9.933 28.1286C11.9366 29.128 14.1641 29.6607 16.5 29.6607C24.3021 29.6607 30.6429 23.518 30.6429 16.6964C30.6429 9.87486 24.3021 3.73214 16.5 3.73214C8.69786 3.73214 2.35714 9.87486 2.35714 16.6964C2.35714 19.2421 3.27643 21.8256 4.9665 24.0342L5.77971 25.0949L4.0755 29.3519L4.07786 29.3543ZM2.41136 32.395C2.19805 32.4665 1.96875 32.4754 1.75053 32.4207C1.53232 32.3661 1.3343 32.2501 1.17988 32.0865C1.02547 31.9229 0.921092 31.7185 0.87909 31.4975C0.837089 31.2765 0.859216 31.0481 0.942857 30.8393L3.09257 25.465C1.13143 22.8957 0 19.822 0 16.6964C0 8.88486 7.07143 1.375 16.5 1.375C25.9286 1.375 33 8.88486 33 16.6964C33 24.508 25.9286 32.0179 16.5 32.0179C13.8557 32.0253 11.2462 31.4151 8.87936 30.2359L2.41136 32.3926V32.395Z"
                      fill="#00A69C"
                    />
                    <path
                      d="M4.07786 29.3543L9.06086 27.6925L9.933 28.1286C11.9366 29.128 14.1641 29.6607 16.5 29.6607C24.3021 29.6607 30.6429 23.518 30.6429 16.6964C30.6429 9.87486 24.3021 3.73214 16.5 3.73214C8.69786 3.73214 2.35714 9.87486 2.35714 16.6964C2.35714 19.2421 3.27643 21.8256 4.9665 24.0342L5.77971 25.0949L4.0755 29.3519L4.07786 29.3543Z"
                      fill="#00A69C"
                    />
                    <path
                      d="M16.5001 18.582C16.2525 18.582 16.0073 18.5332 15.7785 18.4384C15.5497 18.3437 15.3418 18.2048 15.1667 18.0297C14.9916 17.8546 14.8527 17.6467 14.7579 17.4179C14.6632 17.1891 14.6144 16.9439 14.6144 16.6963C14.6144 16.4486 14.6632 16.2034 14.7579 15.9746C14.8527 15.7458 14.9916 15.538 15.1667 15.3629C15.3418 15.1878 15.5497 15.0489 15.7785 14.9541C16.0073 14.8593 16.2525 14.8105 16.5001 14.8105C17.0002 14.8105 17.4799 15.0092 17.8335 15.3629C18.1872 15.7165 18.3858 16.1961 18.3858 16.6963C18.3858 17.1964 18.1872 17.676 17.8335 18.0297C17.4799 18.3833 17.0002 18.582 16.5001 18.582ZM23.5715 18.582C23.3239 18.582 23.0787 18.5332 22.8499 18.4384C22.6211 18.3437 22.4132 18.2048 22.2381 18.0297C22.063 17.8546 21.9241 17.6467 21.8294 17.4179C21.7346 17.1891 21.6858 16.9439 21.6858 16.6963C21.6858 16.4486 21.7346 16.2034 21.8294 15.9746C21.9241 15.7458 22.063 15.538 22.2381 15.3629C22.4132 15.1878 22.6211 15.0489 22.8499 14.9541C23.0787 14.8593 23.3239 14.8105 23.5715 14.8105C24.0717 14.8105 24.5513 15.0092 24.9049 15.3629C25.2586 15.7165 25.4573 16.1961 25.4573 16.6963C25.4573 17.1964 25.2586 17.676 24.9049 18.0297C24.5513 18.3833 24.0717 18.582 23.5715 18.582ZM9.42868 18.582C9.18105 18.582 8.93584 18.5332 8.70705 18.4384C8.47827 18.3437 8.27039 18.2048 8.09528 18.0297C7.92018 17.8546 7.78128 17.6467 7.68651 17.4179C7.59174 17.1891 7.54297 16.9439 7.54297 16.6963C7.54297 16.4486 7.59174 16.2034 7.68651 15.9746C7.78128 15.7458 7.92018 15.538 8.09528 15.3629C8.27039 15.1878 8.47827 15.0489 8.70705 14.9541C8.93584 14.8593 9.18105 14.8105 9.42868 14.8105C9.92881 14.8105 10.4084 15.0092 10.7621 15.3629C11.1157 15.7165 11.3144 16.1961 11.3144 16.6963C11.3144 17.1964 11.1157 17.676 10.7621 18.0297C10.4084 18.3833 9.92881 18.582 9.42868 18.582Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </Link>
            </li>

            <li className="lg:block hidden">
              <Link to={"/profile/setting"}>
                <button>
                  <svg
                    className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.4179 4.06877C16.9517 3.59478 17.6407 3.333 18.3546 3.33301H21.6446C22.3584 3.333 23.0475 3.59478 23.5813 4.06877C24.115 4.54276 24.4564 5.19604 24.5408 5.90488L24.7948 8.03822C24.8633 8.61447 25.2777 9.20113 25.9681 9.61238C26.6727 10.0322 27.3998 10.107 27.9535 9.86947L29.9354 9.01947C30.5915 8.73813 31.3279 8.70717 32.0053 8.93243C32.6827 9.15769 33.2539 9.62355 33.6108 10.2418L35.2558 13.0909C35.6128 13.7091 35.7306 14.4368 35.587 15.136C35.4434 15.8353 35.0483 16.4576 34.4767 16.8851L32.605 18.2847C32.1608 18.6168 31.8746 19.2355 31.8746 19.9997C31.8746 20.7638 32.1608 21.3826 32.605 21.7147L34.4767 23.1143C35.0483 23.5418 35.4434 24.1641 35.587 24.8633C35.7306 25.5626 35.6128 26.2902 35.2558 26.9084L33.6108 29.7576C33.2539 30.3758 32.6827 30.8417 32.0053 31.0669C31.3279 31.2922 30.5915 31.2612 29.9354 30.9799L27.9535 30.1299C27.3998 29.8926 26.6727 29.967 25.9681 30.3868C25.2777 30.7982 24.8631 31.3851 24.7946 31.9611L24.5408 34.0945C24.4564 34.8033 24.115 35.4566 23.5813 35.9306C23.0475 36.4046 22.3584 36.6664 21.6446 36.6663H18.3546C17.6407 36.6664 16.9517 36.4046 16.4179 35.9306C15.8841 35.4566 15.5427 34.8033 15.4583 34.0945L15.2475 32.3228C15.1679 31.6543 14.6706 30.9863 13.8652 30.5324C13.0935 30.0972 12.3067 30.018 11.699 30.2786L10.0637 30.9799C9.40768 31.2612 8.67122 31.2922 7.99385 31.0669C7.31648 30.8417 6.74524 30.3758 6.38833 29.7576L4.74333 26.9084C4.3864 26.2902 4.26857 25.5626 4.41217 24.8633C4.55577 24.1641 4.95082 23.5418 5.5225 23.1143L6.79979 22.1591C7.36604 21.7357 7.70791 20.9503 7.70791 19.9997C7.70791 19.0493 7.36625 18.2641 6.8 17.8405L5.5225 16.8851C4.95082 16.4576 4.55577 15.8353 4.41217 15.136C4.26857 14.4368 4.3864 13.7091 4.74333 13.0909L6.38833 10.2418C6.74524 9.62355 7.31648 9.15769 7.99385 8.93243C8.67122 8.70717 9.40768 8.73813 10.0637 9.01947L11.699 9.72072C12.3067 9.98134 13.0935 9.90238 13.8652 9.46738C14.6706 9.01322 15.1679 8.34509 15.2475 7.67655L15.4583 5.90488C15.5427 5.19604 15.8841 4.54276 16.4179 4.06877ZM18.0779 5.93815C18.0016 6.00588 17.9529 6.09923 17.9408 6.20051L17.9252 6.33174L21.8554 6.58355L22.191 9.38796C22.3364 9.4178 22.4806 9.45055 22.6238 9.48615C22.4694 9.12947 22.361 8.7446 22.3121 8.33384L22.0583 6.20051C22.0463 6.09923 21.9975 6.00588 21.9213 5.93815C21.845 5.87042 21.7466 5.83301 21.6446 5.83301H18.3546C18.2526 5.83301 18.1541 5.87042 18.0779 5.93815ZM27.793 12.474C28.2765 12.9745 28.7122 13.5215 29.0927 14.1075L28.3388 12.4779L31.6394 11.8271L31.4458 11.4918C31.3948 11.4034 31.3132 11.3368 31.2164 11.3047C31.1196 11.2725 31.0144 11.2767 30.9206 11.317L28.9385 12.167C28.5606 12.3291 28.176 12.4282 27.793 12.474ZM30.401 16.9586L30.3822 16.8948L30.4078 16.9503L30.401 16.9586ZM28.2873 26.9777C28.1287 27.1658 27.9639 27.3485 27.7931 27.5253C27.8525 27.5324 27.9119 27.5408 27.9714 27.5505L28.2873 26.9777ZM30.3302 23.2736L30.4357 23.0823L30.4011 23.0406C30.3783 23.1186 30.3546 23.1963 30.3302 23.2736ZM22.6239 30.5132C22.4074 30.567 22.1884 30.6143 21.9669 30.655L22.573 30.6362C22.5894 30.5948 22.6064 30.5538 22.6239 30.5132ZM17.2359 30.4771C17.713 30.6027 18.2029 30.6965 18.7033 30.7562L17.422 30.7959L17.4641 30.9691C17.3976 30.7992 17.3211 30.6351 17.2359 30.4771ZM17.9408 33.7988L17.7383 32.0968L18.2374 34.1495C18.1788 34.1323 18.1242 34.1024 18.0779 34.0612C18.0016 33.9935 17.9529 33.9001 17.9408 33.7988ZM10.0131 24.2041C9.81654 23.7378 9.65171 23.2549 9.52127 22.758C9.45458 22.8767 9.38256 22.9931 9.30501 23.1067L10.0131 24.2041ZM12.3106 27.6305C12.2205 27.5397 12.132 27.4473 12.0451 27.3534L12.2261 27.6338C12.2542 27.6324 12.2824 27.6313 12.3106 27.6305ZM9.52122 17.2416L9.54373 17.1572L9.41369 17.0597C9.45097 17.1197 9.4868 17.1803 9.52122 17.2416ZM12.1105 12.5758C12.1763 12.506 12.243 12.437 12.3106 12.3689C12.2741 12.3678 12.2377 12.3662 12.2012 12.3643L12.1105 12.5758ZM6.98048 14.216L6.90833 14.3409C6.87388 14.4006 6.85503 14.4674 6.85276 14.5353L6.98048 14.216ZM20.0003 24.9997C22.7618 24.9997 25.0003 22.7611 25.0003 19.9997C25.0003 17.2382 22.7618 14.9997 20.0003 14.9997C17.2389 14.9997 15.0003 17.2382 15.0003 19.9997C15.0003 22.7611 17.2389 24.9997 20.0003 24.9997Z"
                      fill="#00A69C"
                      stroke="#00A69C"
                    />
                  </svg>
                </button>
              </Link>
            </li>

            <li>
              <Link to={"/profile"}>
                <button>
                  <svg
                    className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="32"
                    viewBox="0 0 35 32"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.203125 31.8967L2.67874 0.421057C4.56492 0.421057 8.69094 0.91618 10.1056 2.89667L7.62996 29.4211C6.21533 30.4821 2.74947 32.4626 0.203125 31.8967ZM16.8251 18.8113C14.2787 25.8845 9.63403 28.8317 7.62996 29.4211V31.8967C10.1089 32.4625 14.3214 30.4821 16.1178 29.4211V31.8967C26.0202 32.2161 34.335 23.0346 34.1544 15.6284C33.8714 4.02839 22.7194 0.185289 17.8861 0.421057V2.89667C16.1885 0.633252 11.9918 0.303171 10.1056 0.421057V2.89667C16.047 6.29178 17.2652 11.856 17.1316 14.2138L17.8861 2.89667C23.5446 5.443 26.0202 8.92956 26.0202 15.6284C26.0202 22.3272 18.5934 28.0065 16.1178 29.4211L16.8251 18.8113Z"
                      fill="#00A69C"
                    />
                  </svg>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
