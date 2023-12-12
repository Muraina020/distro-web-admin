import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useAppContext } from "../../context/AppContext";

const SlideInSidebar = () => {
  const { closeSidebar, isSidebarOpen } = useAppContext();

  return (
    <div
      className={`fixed top-0 left-0 z-40 lg:hidden block ${
        isSidebarOpen ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={closeSidebar}
        className={`bg-black/40 z-40 backdrop-blur-sm  top-0 left-0 transition duration-150 w-screen h-screen ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
      <aside
        className={`h-full bg-white fixed top-0 left-0 max-[330px]:w-full  w-[20rem] transition-all duration-200 py-3 overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <span>&nbsp;</span>
          <button onClick={closeSidebar} className="px-5 ">
            <RxCross1 className="text-xl" />
          </button>
        </div>

        <div className="flex items-center gap-x-4 px-5 py-2 mt-5">
          <figure className="w-[3rem] h-[3rem]">
            <img
              src="https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg?size=626&ext=jpg&ga=GA1.1.1239515754.1699101641&semt=sph"
              alt="avater"
              className="w-full h-full object-cover rounded-full"
            />
          </figure>

          <div>
            <h2 className="text-base font-medium">John Jonson</h2>
            <p className="text-xs text-graylight">Driver</p>
          </div>
        </div>

        <ul className="space-y-2 mt-2">
          <h2 className="text-base font-normal px-5">Account Management</h2>

          <li>
            <Link
              onClick={closeSidebar}
              to={""}
              className="text-sm flex items-center gap-x-2 px-5 py-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.1606 10.87C12.0606 10.86 11.9406 10.86 11.8306 10.87C9.45055 10.79 7.56055 8.84 7.56055 6.44C7.56055 3.99 9.54055 2 12.0006 2C14.4506 2 16.4406 3.99 16.4406 6.44C16.4306 8.84 14.5406 10.79 12.1606 10.87Z"
                  stroke="#00A69C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.15973 14.56C4.73973 16.18 4.73973 18.82 7.15973 20.43C9.90973 22.27 14.4198 22.27 17.1698 20.43C19.5898 18.81 19.5898 16.17 17.1698 14.56C14.4298 12.73 9.91973 12.73 7.15973 14.56Z"
                  stroke="#00A69C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Profile Info
            </Link>
          </li>
          <li>
            <Link
              onClick={closeSidebar}
              to={"/profile/setting"}
              className="text-sm flex items-center gap-x-2 px-5 py-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.2567 6.10125L17.9611 5.41187L18.2567 6.10112V6.10125ZM11.0126 2C10.5842 1.99999 10.1708 2.15706 9.85054 2.44146C9.53028 2.72585 9.32543 3.11782 9.2748 3.54312L10.7643 3.7205C10.7715 3.65973 10.8008 3.60372 10.8465 3.56309C10.8923 3.52245 10.9514 3.5 11.0126 3.5V2ZM12.9866 2H11.0126V3.5H12.9866V2ZM14.7243 3.54312C14.6737 3.11782 14.4688 2.72585 14.1486 2.44146C13.8283 2.15706 13.4149 1.99999 12.9866 2V3.5C13.0477 3.5 13.1068 3.52245 13.1526 3.56309C13.1983 3.60372 13.2276 3.65973 13.2348 3.7205L14.7243 3.54312ZM14.8767 4.82312L14.7243 3.54312L13.2348 3.7205L13.3871 5.0005L14.8767 4.82312ZM17.9611 5.41187L16.7719 5.92187L17.3631 7.30037L18.5522 6.79037L17.9611 5.41187ZM20.1663 6.14525C19.9522 5.77432 19.6094 5.49481 19.203 5.35965C18.7966 5.22449 18.3547 5.24307 17.9611 5.41187L18.5522 6.79037C18.6084 6.76623 18.6716 6.76369 18.7296 6.78299C18.7877 6.8023 18.8367 6.84224 18.8673 6.89525L20.1663 6.14525ZM21.1533 7.85475L20.1663 6.14525L18.8673 6.89525L19.8543 8.60475L21.1533 7.85475ZM20.6858 10.1312C21.0288 9.87475 21.2658 9.50136 21.352 9.08181C21.4382 8.66225 21.3675 8.22567 21.1533 7.85475L19.8543 8.60475C19.8849 8.65775 19.895 8.72014 19.8827 8.78008C19.8703 8.84003 19.8364 8.89337 19.7874 8.93L20.6858 10.1312ZM19.5628 10.971L20.6858 10.1312L19.7874 8.93L18.6646 9.76975L19.5628 10.971ZM20.6858 13.8687L19.5628 13.029L18.6646 14.2302L19.7874 15.07L20.6858 13.8687ZM21.1533 16.1452C21.3675 15.7743 21.4382 15.3377 21.352 14.9182C21.2658 14.4986 21.0288 14.1253 20.6858 13.8687L19.7874 15.07C19.8364 15.1066 19.8703 15.16 19.8827 15.2199C19.895 15.2799 19.8849 15.3422 19.8543 15.3952L21.1533 16.1452ZM20.1663 17.8547L21.1533 16.1452L19.8543 15.3952L18.8673 17.1047L20.1663 17.8547ZM17.9611 18.5881C18.3547 18.7569 18.7966 18.7755 19.203 18.6403C19.6094 18.5052 19.9522 18.2257 20.1663 17.8547L18.8673 17.1047C18.8367 17.1577 18.7877 17.1977 18.7296 17.217C18.6716 17.2363 18.6084 17.2336 18.5522 17.2095L17.9611 18.5881ZM16.7719 18.0781L17.9611 18.5881L18.5522 17.2095L17.3632 16.6996L16.7719 18.0781ZM14.7243 20.4569L14.8765 19.1769L13.3872 18.9995L13.2348 20.2795L14.7243 20.4569ZM12.9866 22C13.4149 22 13.8283 21.8429 14.1486 21.5585C14.4688 21.2741 14.6737 20.8822 14.7243 20.4569L13.2348 20.2795C13.2276 20.3403 13.1983 20.3963 13.1526 20.4369C13.1068 20.4776 13.0477 20.5 12.9866 20.5V22ZM11.0126 22H12.9866V20.5H11.0126V22ZM9.2748 20.4569C9.32543 20.8822 9.53028 21.2741 9.85054 21.5585C10.1708 21.8429 10.5842 22 11.0126 22V20.5C10.9514 20.5 10.8923 20.4776 10.8465 20.4369C10.8008 20.3963 10.7715 20.3403 10.7643 20.2795L9.2748 20.4569ZM9.1483 19.3939L9.2748 20.4569L10.7643 20.2795L10.6378 19.2165L9.1483 19.3939ZM6.42805 16.7887L5.44693 17.2095L6.03805 18.5881L7.01918 18.1674L6.42793 16.7887H6.42805ZM5.44693 17.2095C5.3907 17.2336 5.32746 17.2363 5.26941 17.217C5.21135 17.1976 5.1624 17.1577 5.1318 17.1047L3.8328 17.8547C4.04695 18.2257 4.38969 18.5052 4.79611 18.6403C5.20254 18.7755 5.64441 18.7569 6.03805 18.5881L5.44693 17.2095ZM5.1318 17.1047L4.1448 15.3952L2.8458 16.1452L3.8328 17.8547L5.1318 17.1047ZM4.1448 15.3952C4.11421 15.3422 4.10412 15.2799 4.11644 15.2199C4.12877 15.16 4.16265 15.1066 4.21168 15.07L3.3133 13.8687C2.97029 14.1253 2.73326 14.4986 2.64711 14.9182C2.56095 15.3377 2.63164 15.7743 2.8458 16.1452L4.1448 15.3952ZM4.21168 15.07L4.97818 14.4969L4.07968 13.2956L3.3133 13.8687L4.21168 15.07ZM3.3133 10.1312L4.0798 10.7045L4.97818 9.50325L4.21168 8.93L3.3133 10.1312ZM2.8458 7.85475C2.63164 8.22567 2.56095 8.66225 2.64711 9.08181C2.73326 9.50136 2.97029 9.87475 3.3133 10.1312L4.21168 8.93C4.16265 8.89337 4.12877 8.84003 4.11644 8.78008C4.10412 8.72014 4.11421 8.65775 4.1448 8.60475L2.8458 7.85475ZM3.8328 6.14525L2.8458 7.85475L4.1448 8.60475L5.1318 6.89525L3.8328 6.14525ZM6.03805 5.41187C5.64441 5.24307 5.20254 5.22449 4.79611 5.35965C4.38969 5.49481 4.04695 5.77432 3.8328 6.14525L5.1318 6.89525C5.1624 6.84227 5.21135 6.80235 5.26941 6.78305C5.32746 6.76374 5.3907 6.76639 5.44693 6.7905L6.03805 5.41187ZM7.01918 5.83262L6.03805 5.41187L5.44693 6.7905L6.42805 7.21125L7.01918 5.83262ZM9.2748 3.54312L9.1483 4.60612L10.6378 4.7835L10.7643 3.7205L9.2748 3.54312ZM9.05555 6.98712C9.8153 6.55887 10.5168 5.79937 10.6378 4.78337L9.1483 4.60612C9.10055 5.00725 8.80218 5.40812 8.31893 5.68062L9.05555 6.98712ZM6.42805 7.21125C7.33855 7.60175 8.30993 7.4075 9.05555 6.98712L8.31893 5.68062C7.85593 5.94162 7.3838 5.989 7.01918 5.83262L6.42793 7.21125H6.42805ZM6.12455 12C6.12455 11.1125 5.80605 10.1224 4.97818 9.50325L4.0798 10.7045C4.41955 10.9586 4.62455 11.4297 4.62455 12H6.12455ZM9.05555 17.0129C8.30993 16.5925 7.33855 16.3982 6.42805 16.7887L7.01918 18.1674C7.3838 18.011 7.85593 18.0585 8.31893 18.3196L9.05555 17.0129ZM4.97818 14.4969C5.80618 13.8777 6.12455 12.8875 6.12455 12H4.62455C4.62455 12.5704 4.41943 13.0416 4.07968 13.2956L4.97818 14.4969ZM14.8129 16.9437C14.1209 17.356 13.4983 18.0665 13.3872 18.9995L14.8765 19.1769C14.9177 18.8312 15.1664 18.4791 15.5807 18.2322L14.8129 16.9437ZM17.3632 16.6996C16.4764 16.3194 15.5296 16.5167 14.8129 16.9437L15.5807 18.2322C16.0034 17.9804 16.4397 17.9357 16.7719 18.0781L17.3632 16.6996ZM10.6378 19.2165C10.5168 18.2006 9.8153 17.4412 9.05555 17.0129L8.31893 18.3196C8.80218 18.592 9.10055 18.9927 9.1483 19.3939L10.6378 19.2165ZM17.6245 12C17.6245 12.7986 17.9243 13.6767 18.6646 14.2302L19.5628 13.029C19.2963 12.8297 19.1245 12.4585 19.1245 12H17.6245ZM18.6646 9.76975C17.9243 10.3232 17.6245 11.2012 17.6245 12H19.1245C19.1245 11.5415 19.2963 11.1702 19.5628 10.971L18.6646 9.76975ZM14.8129 7.05625C15.5296 7.48325 16.4764 7.68062 17.3631 7.30037L16.7719 5.92187C16.4397 6.06437 16.0034 6.0195 15.5807 5.76762L14.8129 7.05625ZM13.3871 5.0005C13.4982 5.9335 14.1209 6.644 14.8129 7.05625L15.5807 5.76762C15.1664 5.52087 14.9178 5.16887 14.8767 4.82312L13.3871 5.0005Z"
                  fill="#00A69C"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="#00A69C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Settings
            </Link>
          </li>
          <h2 className="text-base font-normal px-5">Driver Management</h2>
          <li>
            <Link
              onClick={closeSidebar}
              to={"/driver"}
              className="text-sm flex items-center gap-x-2 px-5 py-1"
            >
              <svg
                className="sidebar-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M19.7168 19.7836C19.9002 19.767 20.1002 19.767 20.2668 19.7836C24.2335 19.6503 27.3835 16.4003 27.4002 12.4003C27.4002 11.9924 27.3671 11.5922 27.3034 11.2021C20.4795 13.497 14.7221 12.1583 12.6964 11.2021C12.633 11.5922 12.6001 11.9924 12.6001 12.4003C12.6001 16.4003 15.7501 19.6503 19.7168 19.7836Z"
                  fill="#00A69C"
                  stroke="#00A69C"
                  strokeWidth="1.0625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.3335 33.3333C8.33269 31.277 9.36763 29.218 11.4383 27.6522C16.1597 24.1159 23.8748 24.1159 28.562 27.6522C30.6376 29.212 31.6725 31.2721 31.6668 33.3333"
                  stroke="#00A69C"
                  strokeWidth="1.0625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.8182 4.53046C11.8182 4.40573 11.9004 4.14752 12.3626 3.78087C12.8093 3.4267 13.4854 3.07687 14.3328 2.76858C16.0228 2.15377 18.1881 1.77778 20 1.77778C21.8119 1.77778 23.9772 2.15377 25.6672 2.76858C26.5146 3.07687 27.1907 3.4267 27.6374 3.78087C28.0996 4.14752 28.1818 4.40573 28.1818 4.53047C28.1818 5.81061 27.9705 6.81448 27.7652 7.48809C27.7041 7.68853 27.6435 7.85964 27.5892 8H12.4108C12.3565 7.85964 12.296 7.68845 12.2348 7.488C12.0295 6.81434 11.8182 5.81045 11.8182 4.53046ZM12.9986 9.77778H27.0014C27.9358 10.2667 28.0824 11.0001 28.0389 11.3057C28.6455 10.7321 28.9219 10.1291 29.0341 9.63831C29.0849 9.41618 29.1008 9.22276 29.102 9.07191C29.1196 9.03422 29.1386 8.99245 29.1588 8.94658C29.2569 8.72382 29.383 8.40453 29.5075 7.996C29.7567 7.17867 30 6.0033 30 4.53046C30 3.62294 29.4254 2.90983 28.7826 2.40013C28.1242 1.87796 27.2469 1.44643 26.3012 1.10239C24.4049 0.412542 22.0247 0 20 0C17.9753 0 15.5951 0.412542 13.6988 1.10239C12.7531 1.44643 11.8758 1.87796 11.2174 2.40013C10.5746 2.90983 10 3.62294 10 4.53047C10 6.00316 10.2433 7.17849 10.4925 7.99582C10.617 8.40445 10.7431 8.72373 10.8412 8.94649C10.8614 8.99236 10.8804 9.03422 10.898 9.07191C10.8992 9.22276 10.9151 9.41618 10.9659 9.63831C11.0781 10.1291 11.3545 10.7321 11.9611 11.3057C11.9176 11.0001 12.0642 10.2667 12.9986 9.77778Z"
                  fill="#00A69C"
                />
                <path
                  d="M13.225 10.0276C13.134 9.9416 13.0595 9.85778 12.9986 9.77778C12.0642 10.2667 11.9176 11.0001 11.9611 11.3057C13.1554 12.4348 15.495 13.3333 20 13.3333C24.505 13.3333 26.8446 12.4348 28.0389 11.3057C28.0824 11.0001 27.9358 10.2667 27.0014 9.77778C26.9405 9.85778 26.866 9.9416 26.775 10.0276C26.089 10.6763 24.3378 11.5556 20 11.5556C15.6622 11.5556 13.911 10.6763 13.225 10.0276Z"
                  fill="#868686"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.0574 34.4237C24.8183 33.3961 25.3478 32.3399 26.24 32.0645L27.3171 31.7321C28.2093 31.4568 29.1264 32.0666 29.3654 33.0942L29.9426 35.5751C30.1817 36.6027 29.6521 37.6589 28.7599 37.9342L27.6829 38.2666C26.7907 38.5419 25.8736 37.9321 25.6346 36.9045L25.0574 34.4237ZM26.5286 33.3049C26.2312 33.3967 26.0547 33.7488 26.1344 34.0913L26.7116 36.5722C26.7913 36.9146 27.097 37.1179 27.3944 37.0262L28.4714 36.6938C28.7688 36.602 28.9453 36.25 28.8656 35.9074L28.2884 33.4266C28.2087 33.084 27.903 32.8807 27.6056 32.9726L26.5286 33.3049Z"
                  fill="#00A69C"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6346 33.0942C10.8736 32.0666 11.7907 31.4568 12.683 31.7321L13.7599 32.0645C14.6521 32.3399 15.1817 33.3961 14.9426 34.4237L14.3654 36.9045C14.1264 37.9321 13.2093 38.5419 12.3171 38.2666L11.24 37.9342C10.3478 37.6588 9.81833 36.6026 10.0574 35.575L10.6346 33.0942ZM12.3944 32.9726C12.097 32.8808 11.7913 33.084 11.7116 33.4266L11.1344 35.9074C11.0547 36.2499 11.2312 36.602 11.5286 36.6938L12.6056 37.0261C12.9031 37.1179 13.2087 36.9147 13.2884 36.5721L13.8656 34.0913C13.9453 33.7488 13.7688 33.3967 13.4714 33.3049L12.3944 32.9726Z"
                  fill="#00A69C"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.2634 35.4034H19.2574V29.7859C17.2564 30.0102 15.539 31.1885 14.5572 32.8623C14.3831 32.522 14.074 32.2543 13.6801 32.1473L13.3992 32.0709C14.7452 29.8297 17.1776 28.333 19.9546 28.333C22.732 28.333 25.1644 29.8299 26.5104 32.0714L26.2292 32.1478C25.8353 32.2548 25.5263 32.5224 25.3522 32.8626C24.3705 31.1887 22.653 30.0102 20.6519 29.7859V35.4034H25.6458L25.965 36.6115C25.9839 36.683 26.0078 36.7518 26.0364 36.8175H19.9546H13.8726C13.9013 36.7516 13.9254 36.6827 13.9444 36.6109L14.2634 35.4034ZM13.7466 37.0466C13.4581 37.4719 12.9542 37.712 12.4351 37.6496C12.6014 38.4895 12.9012 39.281 13.3112 39.9997L14.5183 39.2916C14.1312 38.6128 13.864 37.8548 13.7466 37.0466ZM25.3909 39.2916C25.778 38.613 26.0452 37.8551 26.1626 37.047C26.4511 37.4724 26.9549 37.7125 27.4741 37.6502C27.3078 38.4899 27.0079 39.2811 26.598 39.9997L25.3909 39.2916Z"
                  fill="#00A69C"
                />
                <path
                  d="M22.0054 36.3535C22.0054 37.5617 21.0872 38.541 19.9546 38.541C18.8219 38.541 17.9038 37.5617 17.9038 36.3535C17.9038 35.1454 18.8219 34.166 19.9546 34.166C21.0872 34.166 22.0054 35.1454 22.0054 36.3535Z"
                  fill="#00A69C"
                />
              </svg>
              Drivers
            </Link>
          </li>
          <li>
            <Link
              onClick={closeSidebar}
              to={"/addDriver"}
              className="text-sm flex items-center gap-x-2 px-5 py-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.1606 10.87C12.0606 10.86 11.9406 10.86 11.8306 10.87C9.45055 10.79 7.56055 8.84 7.56055 6.44C7.56055 3.99 9.54055 2 12.0006 2C14.4506 2 16.4406 3.99 16.4406 6.44C16.4306 8.84 14.5406 10.79 12.1606 10.87Z"
                  stroke="#00A69C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.15973 14.56C4.73973 16.18 4.73973 18.82 7.15973 20.43C9.90973 22.27 14.4198 22.27 17.1698 20.43C19.5898 18.81 19.5898 16.17 17.1698 14.56C14.4298 12.73 9.91973 12.73 7.15973 14.56Z"
                  stroke="#00A69C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.13158 1.63158C9.13158 1.33147 9.01236 1.04364 8.80015 0.831432C8.58794 0.619219 8.30011 0.5 8 0.5C7.69989 0.5 7.41207 0.61922 7.19985 0.831432C6.98764 1.04364 6.86842 1.33147 6.86842 1.63158V3.86842H4.63158C4.33147 3.86842 4.04364 3.98764 3.83143 4.19985C3.61922 4.41207 3.5 4.69989 3.5 5C3.5 5.30011 3.61922 5.58794 3.83143 5.80015C4.04364 6.01236 4.33147 6.13158 4.63158 6.13158H6.86842V8.36842C6.86842 8.66853 6.98764 8.95636 7.19985 9.16857C7.41207 9.38078 7.69989 9.5 8 9.5C8.30011 9.5 8.58793 9.38078 8.80015 9.16857C9.01236 8.95636 9.13158 8.66853 9.13158 8.36842V6.13158H11.3684C11.6685 6.13158 11.9564 6.01236 12.1686 5.80015C12.3808 5.58793 12.5 5.30011 12.5 5C12.5 4.69989 12.3808 4.41207 12.1686 4.19985C11.9564 3.98764 11.6685 3.86842 11.3684 3.86842H9.13158V1.63158Z"
                  fill="#00A69C"
                  stroke="white"
                />
              </svg>
              Add Driver
            </Link>
          </li>
          <h2 className="text-base font-normal px-5"> Customer Management</h2>
          <li>
            <Link
              onClick={closeSidebar}
              to={"/customer"}
              className="text-sm flex items-center gap-x-2 px-5 py-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.1606 10.87C12.0606 10.86 11.9406 10.86 11.8306 10.87C9.45055 10.79 7.56055 8.84 7.56055 6.44C7.56055 3.99 9.54055 2 12.0006 2C14.4506 2 16.4406 3.99 16.4406 6.44C16.4306 8.84 14.5406 10.79 12.1606 10.87Z"
                  stroke="#00A69C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.15973 14.56C4.73973 16.18 4.73973 18.82 7.15973 20.43C9.90973 22.27 14.4198 22.27 17.1698 20.43C19.5898 18.81 19.5898 16.17 17.1698 14.56C14.4298 12.73 9.91973 12.73 7.15973 14.56Z"
                  stroke="#00A69C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Customers
            </Link>
          </li>
          <h2 className="text-base font-normal px-5">Order Management</h2>
          <li>
            <Link
              onClick={closeSidebar}
              to={"/orderTracking"}
              className="text-sm flex items-center gap-x-2 px-5 py-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.75 0H1.25C0.559062 0 0 0.559062 0 1.25V3.75C0 4.44094 0.559062 5 1.25 5V18.75C1.25 19.4409 1.80906 20 2.5 20H17.5C18.1909 20 18.75 19.4409 18.75 18.75V5C19.4409 5 20 4.44094 20 3.75V1.25C20 0.559062 19.4409 0 18.75 0ZM18.125 15.8084L14.5581 19.375H5.44187L1.875 15.8084V5H18.125V15.8084ZM1.875 18.75V16.6919L4.55813 19.375H2.5C2.155 19.375 1.875 19.095 1.875 18.75ZM17.5 19.375H15.4419L18.125 16.6919V18.75C18.125 19.095 17.845 19.375 17.5 19.375ZM19.375 3.75C19.375 4.095 19.095 4.375 18.75 4.375H1.25C0.905 4.375 0.625 4.095 0.625 3.75V1.25C0.625 0.905 0.905 0.625 1.25 0.625H18.75C19.095 0.625 19.375 0.905 19.375 1.25V3.75Z"
                  fill="#00A69C"
                  stroke="#00A69C"
                  strokeWidth="0.416667"
                />
                <path
                  d="M6.5625 10H13.4375C13.9553 10 14.375 9.58 14.375 9.0625C14.375 8.545 13.9553 8.125 13.4375 8.125H6.5625C6.04469 8.125 5.625 8.545 5.625 9.0625C5.625 9.58 6.04469 10 6.5625 10ZM6.5625 8.75H13.4375C13.6103 8.75 13.75 8.88969 13.75 9.0625C13.75 9.23531 13.6103 9.375 13.4375 9.375H6.5625C6.38969 9.375 6.25 9.23531 6.25 9.0625C6.25 8.88969 6.38969 8.75 6.5625 8.75Z"
                  fill="#00A69C"
                  stroke="#00A69C"
                  strokeWidth="0.416667"
                />
              </svg>
              Order
            </Link>
          </li>

          <li>
            <Link
              onClick={closeSidebar}
              to={"/expressOrderHistory"}
              className="text-sm flex items-center gap-x-2 px-5 py-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_3005_12202)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.275391 4V3H13.3691C14.1699 3 14.7754 3.68555 14.7754 4.45313V5.5918C14.9316 5.53516 15.0977 5.5 15.2754 5.5H19.2754C20.2324 5.5 20.9297 6.20117 21.3906 6.75781L21.3984 6.76758L23.4707 9.53125L23.4766 9.53711C23.4766 9.53711 24.2754 10.5488 24.2754 11.6934V16.5C24.2754 17.3301 23.6055 18 22.7754 18H21.7754V17.5V17H22.7754C22.9629 17 23.2754 16.6875 23.2754 16.5V12.5H18.2754C17.8594 12.5 17.5 12.3066 17.2344 12.041C16.9688 11.7754 16.7754 11.416 16.7754 11V9C16.7754 8.14453 17.4785 7.5 18.2754 7.5H20.6973L20.6191 7.39258C20.2363 6.93359 19.6719 6.5 19.2754 6.5H15.2754C15.0879 6.5 14.7754 6.8125 14.7754 7V16.5C14.7754 16.5918 14.832 16.7285 14.9395 16.8359C15.0449 16.9414 15.1855 17 15.2793 17H15.8223C16.0605 15.5859 17.2949 14.5 18.7754 14.5C20.4258 14.5 21.7754 15.8496 21.7754 17.5C21.7754 19.1504 20.4258 20.5 18.7754 20.5C17.2949 20.5 16.0605 19.4141 15.8223 18H15.2715C14.8984 17.9961 14.5723 17.8398 14.3164 17.6133C14.0625 17.8496 13.7246 18 13.3535 18H8.72852C8.49023 19.4141 7.25586 20.5 5.77539 20.5C4.29492 20.5 3.06055 19.4141 2.82227 18H1.77539C0.945312 18 0.275391 17.332 0.275391 16.502V14.6608H1.27539V16.502C1.27539 16.6875 1.58789 17 1.77539 17H2.82227C3.06055 15.5859 4.29492 14.5 5.77539 14.5C7.25586 14.5 8.49023 15.5859 8.72852 17H13.3535C13.5898 17 13.7754 16.8145 13.7754 16.5781V16.5078V16.5V7V6.99023V4.45313C13.7754 4.20703 13.584 4 13.3691 4H0.275391ZM18.2754 8.5H21.4473L22.6621 10.1191L22.6638 10.1221C22.6941 10.1748 23.1243 10.9223 23.2168 11.5H18.2754C18.1914 11.5 18.0508 11.4434 17.9414 11.334C17.832 11.2246 17.7754 11.084 17.7754 11V9C17.7754 8.74805 18.0723 8.5 18.2754 8.5ZM5.77539 15.5C6.88672 15.5 7.77539 16.3887 7.77539 17.5C7.77539 18.6113 6.88672 19.5 5.77539 19.5C4.66406 19.5 3.77539 18.6113 3.77539 17.5C3.77539 16.3887 4.66406 15.5 5.77539 15.5ZM18.7754 15.5C19.8867 15.5 20.7754 16.3887 20.7754 17.5C20.7754 18.6113 19.8867 19.5 18.7754 19.5C17.6641 19.5 16.7754 18.6113 16.7754 17.5C16.7754 16.3887 17.6641 15.5 18.7754 15.5Z"
                    fill="#00A69C"
                  />
                  <path
                    d="M0.275391 7.125H9.20247V6.125H0.275391V7.125Z"
                    fill="#00A69C"
                  />
                  <path
                    d="M0.275391 10.25H6.07747V9.25H0.275391V10.25Z"
                    fill="#00A69C"
                  />
                  <path
                    d="M0.275391 13.375H3.99414V12.375H0.275391V13.375Z"
                    fill="#00A69C"
                  />
                  <path
                    d="M18.2754 8.5H21.4473L22.6621 10.1191L22.6638 10.1221C22.6941 10.1748 23.1243 10.9223 23.2168 11.5H18.2754C18.1914 11.5 18.0508 11.4434 17.9414 11.334C17.832 11.2246 17.7754 11.084 17.7754 11V9C17.7754 8.74805 18.0723 8.5 18.2754 8.5Z"
                    fill="#00A69C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3005_12202">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Express Order History
            </Link>
          </li>
          <li>
            <Link
              onClick={closeSidebar}
              to={"/scheduleOrderHistory"}
              className="text-sm flex items-center gap-x-2 px-5 py-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_3005_12198)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 10.5603C0 7.65027 2.37 5.28027 5.28 5.28027C6.915 5.28027 8.37938 6.0284 9.35063 7.20027H13.53C14.2988 7.20027 14.88 7.8584 14.88 8.59527V9.6884C15.03 9.63402 15.1894 9.60027 15.36 9.60027H19.2C20.1188 9.60027 20.7881 10.2734 21.2306 10.8078L21.2381 10.8171L23.2275 13.4703L23.2331 13.4759C23.2331 13.4759 24 14.4471 24 15.5459V20.1603C24 20.9571 23.3569 21.6003 22.56 21.6003H21.6V21.1203V20.6403H22.56C22.74 20.6403 23.04 20.3403 23.04 20.1603V16.3203H18.24C17.8406 16.3203 17.4956 16.1346 17.2406 15.8796C16.9856 15.6246 16.8 15.2796 16.8 14.8803V12.9603C16.8 12.139 17.475 11.5203 18.24 11.5203H20.565L20.49 11.4171C20.1225 10.9765 19.5806 10.5603 19.2 10.5603H15.36C15.18 10.5603 14.88 10.8603 14.88 11.0403V20.1603C14.88 20.2484 14.9344 20.3796 15.0375 20.4828C15.1388 20.584 15.2738 20.6403 15.3638 20.6403H15.885C16.1138 19.2828 17.2988 18.2403 18.72 18.2403C20.3044 18.2403 21.6 19.5359 21.6 21.1203C21.6 22.7046 20.3044 24.0003 18.72 24.0003C17.2988 24.0003 16.1138 22.9578 15.885 21.6003H15.3563C14.9981 21.5965 14.685 21.4465 14.4394 21.229C14.1956 21.4559 13.8713 21.6003 13.515 21.6003H9.075C8.84625 22.9578 7.66125 24.0003 6.24 24.0003C4.81875 24.0003 3.63375 22.9578 3.405 21.6003H2.4C1.60313 21.6003 0.96 20.959 0.96 20.1621V13.5884C0.358125 12.7296 0 11.6871 0 10.5603ZM9.6 10.5603C9.6 8.16965 7.67063 6.24027 5.28 6.24027C2.88937 6.24027 0.96 8.16965 0.96 10.5603C0.96 12.9509 2.88937 14.8803 5.28 14.8803C7.67063 14.8803 9.6 12.9509 9.6 10.5603ZM13.53 8.16027H9.97688C10.3481 8.88027 10.56 9.6959 10.56 10.5603C10.56 13.4703 8.19 15.8403 5.28 15.8403C4.005 15.8403 2.83313 15.3846 1.92 14.6271V20.1621C1.92 20.3403 2.22 20.6403 2.4 20.6403H3.405C3.63375 19.2828 4.81875 18.2403 6.24 18.2403C7.66125 18.2403 8.84625 19.2828 9.075 20.6403H13.515C13.7419 20.6403 13.92 20.4621 13.92 20.2353V20.1678V20.1603V11.0403V11.0309V8.59527C13.92 8.35902 13.7363 8.16027 13.53 8.16027ZM21.285 12.4803H18.24C18.045 12.4803 17.76 12.7184 17.76 12.9603V14.8803C17.76 14.9609 17.8144 15.0959 17.9194 15.2009C18.0244 15.3059 18.1594 15.3603 18.24 15.3603H22.9838C22.8949 14.8057 22.482 14.0881 22.4529 14.0375C22.4519 14.0357 22.4513 14.0346 22.4513 14.0346L21.285 12.4803ZM8.16 21.1203C8.16 20.0534 7.30688 19.2003 6.24 19.2003C5.17313 19.2003 4.32 20.0534 4.32 21.1203C4.32 22.1871 5.17313 23.0403 6.24 23.0403C7.30688 23.0403 8.16 22.1871 8.16 21.1203ZM20.64 21.1203C20.64 20.0534 19.7869 19.2003 18.72 19.2003C17.6531 19.2003 16.8 20.0534 16.8 21.1203C16.8 22.1871 17.6531 23.0403 18.72 23.0403C19.7869 23.0403 20.64 22.1871 20.64 21.1203Z"
                    fill="#00A69C"
                  />
                  <path
                    d="M18.24 12.4803H21.285L22.4513 14.0346L22.4529 14.0375C22.482 14.0881 22.8949 14.8057 22.9838 15.3603H18.24C18.1594 15.3603 18.0244 15.3059 17.9194 15.2009C17.8144 15.0959 17.76 14.9609 17.76 14.8803V12.9603C17.76 12.7184 18.045 12.4803 18.24 12.4803Z"
                    fill="#00A69C"
                  />
                  <path
                    d="M5.2725 6.71277C5.00813 6.7184 4.79625 6.9359 4.8 7.20027V9.97527C4.62375 10.1196 4.5225 10.3334 4.5225 10.5603C4.5225 10.583 4.52413 10.6058 4.52588 10.63L4.52625 10.6353L3.50063 11.6609C3.375 11.7809 3.32438 11.9609 3.36937 12.1278C3.4125 12.2965 3.54375 12.4278 3.7125 12.4709C3.87937 12.5159 4.05938 12.4653 4.17938 12.3396L5.205 11.314C5.22938 11.3159 5.25563 11.3178 5.28 11.3178C5.69813 11.3178 6.0375 10.9784 6.0375 10.5603C6.0375 10.3334 5.93625 10.1196 5.76 9.97527V7.20027C5.76188 7.0709 5.71125 6.94527 5.61938 6.8534C5.5275 6.76152 5.40188 6.7109 5.2725 6.71277Z"
                    fill="#00A69C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3005_12198">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Schedule Order History
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default SlideInSidebar;
