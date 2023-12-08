import { GoChevronLeft } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import avater from "../../assets/img/circleLogo.png";

const ChatMobileDrivers = () => {
  return (
    <div className="bg-white md:hidden block">
      <div className="bg-[#00A69C] sticky top-0  flex items-center gap-x-4 px-4 py-2">
        <Link to={"/chat"}>
          <GoChevronLeft className="text-2xl text-white" />
        </Link>

        <figure className="w-[3rem] h-[3rem] flex-shrink-0">
          <img
            src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?size=626&ext=jpg&ga=GA1.1.1239515754.1699101641&semt=sph"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </figure>
        <h2 className="text-base font-semibold text-white">Jane Cooper</h2>
        <button className="text-white text-2xl ms-auto">
          <BsThreeDotsVertical />
        </button>
      </div>

      <hr className="mt-5" />

      <div className="px-4">
        <p className="text-sm text-graylight mt-2 text-center">
          My account isn’t loading my order status
        </p>

        <span className="text-center block text-graylight text-xs ">May16</span>

        <article className="mt-4 flex items-center gap-x-3">
          <figure className="w-[2rem] h-[2rem] flex-shrink-0">
            <img
              src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?size=626&ext=jpg&ga=GA1.1.1239515754.1699101641&semt=sph"
              alt="avater"
              className="w-full h-full object-cover rounded-full"
            />
          </figure>

          <div className="bg-[#F2F2F2] rounded-[.5rem] p-1.5">
            <span className="text-sm text-primary-black">
              Lorem ipsum dolor sit amet
            </span>
            <span className="text-xs ml-1 text-graylight">11: 30am</span>
          </div>
        </article>

        <article className="mt-4 flex justify-end items-center gap-x-3">
          <div className="bg-[#E2FFFD] rounded-[.5rem] p-1.5">
            <span className="text-sm text-primary-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inDDIDidunt ut labore Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, consecte.
            </span>
            <span className="text-xs  text-graylight block text-right ">
              11: 30am
            </span>
          </div>
          <figure className="w-[2rem] h-[2rem] flex-shrink-0">
            <img
              src={avater}
              alt="avater"
              className="w-full h-full object-cover rounded-full"
            />
          </figure>
        </article>

        <article className="mt-4 flex items-center gap-x-3">
          <figure className="w-[2rem] h-[2rem] flex-shrink-0">
            <img
              src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?size=626&ext=jpg&ga=GA1.1.1239515754.1699101641&semt=sph"
              alt="avater"
              className="w-full h-full object-cover rounded-full"
            />
          </figure>

          <div className="bg-[#F2F2F2] rounded-[.5rem] p-1.5">
            <span className="text-sm text-primary-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor inDDIDidunt ut labore
            </span>
            <span className="text-xs ml-1 text-graylight">11: 30am</span>
          </div>
        </article>

        <article className="mt-4 flex justify-end items-center gap-x-3">
          <div className="bg-[#E2FFFD] rounded-[.5rem] p-1.5">
            <span className="text-sm text-primary-black">
              Lorem ipsum dolor sit amet,
            </span>
            <span className="text-xs  text-graylight block text-right ">
              11: 30am
            </span>
          </div>
          <figure className="w-[2rem] h-[2rem] flex-shrink-0">
            <img
              src={avater}
              alt="avater"
              className="w-full h-full object-cover rounded-full"
            />
          </figure>
        </article>
      </div>
    </div>
  );
};
export default ChatMobileDrivers;
