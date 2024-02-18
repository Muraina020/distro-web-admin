import logo from "../../assets/img/circlelogo.png";
import { Wrapper } from "../../components";
import { useAuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

const Profile = () => {
  const { admin, setAdmin } = useAuthContext();

  const logOutAdmin = () => {
    setTimeout(() => {
      setAdmin(null);
      removeUserFromLocalStorage();
      toast.success("Logged out");
    }, 1000);
  };

  return (
    <Wrapper className={"sm:mt-0 mt-3"}>
      <div className="pt-[5rem] md:px-[2.5rem] px-3">
        <div className="w-[6.25rem] h-[6.25rem] mx-auto">
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
        </div>

        <form className="mt-12 flex xl:flex-row flex-col gap-y-7 items-center justify-center gap-x-[3rem]">
          <div className=" border-b w-full px-3 flex items-center">
            <label htmlFor="email" className="lg:text-[1.125rem] text-base">
              Emil Address
            </label>
            <input
              id="email"
              type="text"
              defaultValue={admin?.phoneNoOrEmail}
              placeholder="admin@distro.com"
              className="p-2 outline-none lg:w-[72%] bg-transparent"
            />
          </div>

          <div className="border-b w-full flex items-center px-3">
            <label htmlFor="password" className="lg:text-[1.125rem] text-base">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="*************"
              defaultValue={admin?.password}
              className="p-2 outline-none lg:basis-[65%] w-full bg-transparent"
            />
            <button className="text-primary-default  sm:text-[1.125rem] text-sm">
              Change
            </button>
          </div>
        </form>

        <div className="grid place-content-center">
          <button
            onClick={logOutAdmin}
            className="lg:text-[1.75rem] text-base  text-[#F00] mt-20 flex  items-center gap-x-2"
          >
            <svg
              className="lg:w-[34px] w-[25px]"
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M24.3008 5.17895L24.3008 7.51313C24.3008 7.6725 24.3706 7.82192 24.4934 7.92153C24.7756 8.15395 25.0479 8.40297 25.3069 8.66528C26.3808 9.73809 27.2366 11.0088 27.827 12.4073C28.4389 13.8561 28.7529 15.4133 28.7501 16.986C28.7501 18.5764 28.4379 20.117 27.827 21.5647C27.2366 22.9631 26.3808 24.2339 25.3069 25.3067C24.2366 26.3814 22.9681 27.2384 21.5715 27.8301C20.1239 28.4444 18.5866 28.7532 16.9961 28.7532C15.4057 28.7532 13.8684 28.4411 12.4208 27.8301C11.0229 27.2391 9.7645 26.3891 8.6854 25.3067C7.6063 24.2243 6.7563 22.9659 6.16528 21.5647C5.55435 20.117 5.24224 18.5764 5.24224 16.986C5.24224 15.3955 5.55103 13.8549 6.16528 12.4073C6.7563 11.0061 7.6063 9.7477 8.6854 8.66528C8.94771 8.40297 9.21997 8.15727 9.49888 7.92153C9.62173 7.82192 9.69146 7.66918 9.69146 7.51313L9.69146 5.17895C9.69146 4.96977 9.45903 4.84028 9.28306 4.95649C5.32525 7.50317 2.70552 11.959 2.7188 17.0225C2.73872 24.978 9.19673 31.3563 17.1422 31.2766C24.9616 31.1969 31.2735 24.8286 31.2735 16.986C31.2735 11.9358 28.6571 7.49985 24.7092 4.95649C24.5333 4.8436 24.3008 4.96977 24.3008 5.17895ZM16.787 2.22719L13.0682 6.93871C12.9288 7.11469 13.0549 7.37036 13.2774 7.37036L15.8008 7.37036L15.8008 17.7961C15.8008 17.9422 15.9204 18.0618 16.0665 18.0618L17.9258 18.0618C18.0719 18.0618 18.1915 17.9422 18.1915 17.7961L18.1915 7.37035L20.7149 7.37035C20.9374 7.37035 21.0635 7.11137 20.9241 6.93871L17.2053 2.22719C17.1805 2.19544 17.1487 2.16977 17.1125 2.15211C17.0762 2.13445 17.0365 2.12527 16.9961 2.12527C16.9558 2.12527 16.916 2.13445 16.8798 2.15211C16.8436 2.16977 16.8118 2.19544 16.787 2.22719Z"
                fill="#FF0000"
              />
            </svg>
            LOG OUT
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Profile;
