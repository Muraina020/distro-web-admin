import { Outlet } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { Wrapper } from "../../components";

const SharedLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Wrapper className={"sm:bg-white  bg-transparent"}>
      <nav className="border-b lg:block hidden">
        <ul className="flex ">
          <li className="relative">
            <NavLink
              to={"/profile"}
              className={`flex items-center uppercase   lg:text-[1.2625rem] text-[.9rem] px-9 pt-3 w-full gap-x-3 ${
                currentPath === "/profile"
                  ? "text-primary-default fill-graylight"
                  : "text-graylight"
              }`}
            >
              <svg
                className={`
                lg:w-[23px] w-[18px]
                 ${
                   currentPath === "/profile"
                     ? "fill-primary-default"
                     : "fill-graylight"
                 }
                `}
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="31"
                viewBox="0 0 33 31"
                fill="none"
              >
                <path d="M11.125 2.375C12.2066 2.375 13.2639 2.69574 14.1633 3.29665C15.0626 3.89756 15.7635 4.75167 16.1775 5.75095C16.5914 6.75023 16.6997 7.84982 16.4887 8.91065C16.2777 9.97148 15.7568 10.9459 14.992 11.7107C14.2272 12.4756 13.2527 12.9964 12.1919 13.2074C11.1311 13.4184 10.0315 13.3101 9.0322 12.8962C8.03292 12.4823 7.17881 11.7814 6.5779 10.882C5.97699 9.98269 5.65625 8.92537 5.65625 7.84375C5.65625 6.39335 6.23242 5.00235 7.25801 3.97676C8.2836 2.95117 9.6746 2.375 11.125 2.375ZM11.125 0.1875C9.61074 0.1875 8.13048 0.636531 6.87142 1.47781C5.61235 2.31909 4.63103 3.51483 4.05155 4.91383C3.47206 6.31283 3.32044 7.85224 3.61586 9.33741C3.91128 10.8226 4.64047 12.1868 5.71121 13.2575C6.78196 14.3283 8.14617 15.0575 9.63134 15.3529C11.1165 15.6483 12.6559 15.4967 14.0549 14.9172C15.4539 14.3377 16.6497 13.3564 17.4909 12.0973C18.3322 10.8383 18.7812 9.35801 18.7812 7.84375C18.7812 5.81319 17.9746 3.86579 16.5388 2.42996C15.103 0.994138 13.1556 0.1875 11.125 0.1875ZM22.0625 30.8125H19.875V25.3438C19.875 23.8933 19.2988 22.5023 18.2732 21.4768C17.2477 20.4512 15.8567 19.875 14.4062 19.875H7.84375C6.39335 19.875 5.00235 20.4512 3.97676 21.4768C2.95117 22.5023 2.375 23.8933 2.375 25.3438V30.8125H0.1875V25.3438C0.1875 23.3132 0.994138 21.3658 2.42996 19.93C3.86579 18.4941 5.81319 17.6875 7.84375 17.6875H14.4062C16.4368 17.6875 18.3842 18.4941 19.82 19.93C21.2559 21.3658 22.0625 23.3132 22.0625 25.3438V30.8125ZM22.0625 2.375H33V4.5625H22.0625V2.375ZM22.0625 7.84375H33V10.0312H22.0625V7.84375ZM22.0625 13.3125H29.7188V15.5H22.0625V13.3125Z" />
              </svg>
              Profile
            </NavLink>
            {currentPath === "/profile" && (
              <span className="0.125rem inline-block absolute h-[0.125rem] w-full top-full  left-0 bg-primary-default"></span>
            )}
          </li>
          <li className="relative">
            <NavLink
              to={"/profile/setting"}
              className={`flex items-center uppercase lg:text-[1.2625rem] text-[.9rem] px-9 pt-3 w-full gap-x-3 ${
                currentPath === "/profile/setting"
                  ? "text-primary-default fill-graylight"
                  : "text-graylight"
              }`}
            >
              <svg
                className={`lg:w-[23px] w-[18px] ${
                  currentPath === "/profile/setting"
                    ? "fill-primary-default"
                    : "fill-graylight"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.5 12.0312C16.0496 12.0312 14.6586 12.6074 13.633 13.633C12.6074 14.6586 12.0312 16.0496 12.0312 17.5C12.0312 18.9504 12.6074 20.3414 13.633 21.367C14.6586 22.3926 16.0496 22.9688 17.5 22.9688C18.9504 22.9688 20.3414 22.3926 21.367 21.367C22.3926 20.3414 22.9688 18.9504 22.9688 17.5C22.9688 16.0496 22.3926 14.6586 21.367 13.633C20.3414 12.6074 18.9504 12.0312 17.5 12.0312ZM14.2188 17.5C14.2188 16.6298 14.5645 15.7952 15.1798 15.1798C15.7952 14.5645 16.6298 14.2188 17.5 14.2188C18.3702 14.2188 19.2048 14.5645 19.8202 15.1798C20.4355 15.7952 20.7812 16.6298 20.7812 17.5C20.7812 18.3702 20.4355 19.2048 19.8202 19.8202C19.2048 20.4355 18.3702 20.7812 17.5 20.7812C16.6298 20.7812 15.7952 20.4355 15.1798 19.8202C14.5645 19.2048 14.2188 18.3702 14.2188 17.5Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.4634 1.82227C16.8145 1.82227 16.2734 1.82227 15.8301 1.85143C15.3769 1.8703 14.93 1.96393 14.5074 2.12852C14.0207 2.3299 13.5784 2.62519 13.2058 2.99752C12.8332 3.36985 12.5376 3.81193 12.3359 4.29852C12.1245 4.80893 12.0676 5.34852 12.0443 5.93477C12.0419 6.14917 11.9852 6.35947 11.8793 6.54594C11.7734 6.7324 11.622 6.88892 11.439 7.00081C11.2507 7.10363 11.0394 7.1569 10.8249 7.15562C10.6103 7.15435 10.3996 7.09857 10.2126 6.99352C9.69342 6.71935 9.19759 6.49914 8.64925 6.42623C8.12709 6.35754 7.59651 6.39238 7.08781 6.52875C6.57911 6.66512 6.10225 6.90035 5.68446 7.22102C5.33121 7.50522 5.02721 7.84568 4.78467 8.22873C4.53675 8.59914 4.2655 9.06727 3.94175 9.62873L3.90529 9.69289C3.58008 10.2544 3.31029 10.7225 3.11488 11.1221C2.91071 11.5391 2.75029 11.9504 2.69196 12.4054C2.55283 13.4598 2.8382 14.5262 3.48529 15.3702C3.82217 15.8091 4.26113 16.1285 4.75696 16.4406C4.94182 16.5499 5.09583 16.7044 5.20451 16.8896C5.31319 17.0748 5.37297 17.2847 5.37821 17.4994C5.37297 17.714 5.31319 17.9239 5.20451 18.1091C5.09583 18.2943 4.94182 18.4488 4.75696 18.5581C4.26113 18.8702 3.82363 19.1896 3.48529 19.6285C3.16463 20.0463 2.9294 20.5232 2.79303 21.0319C2.65665 21.5406 2.62182 22.0711 2.6905 22.5933C2.75029 23.0483 2.90925 23.4596 3.11342 23.8766C3.31029 24.2762 3.58008 24.7444 3.90529 25.3058L3.94175 25.37C4.2655 25.9314 4.53675 26.3996 4.78467 26.77C5.04279 27.1535 5.31988 27.4992 5.68446 27.7762C6.10214 28.0972 6.57895 28.3326 7.08765 28.4693C7.59636 28.6059 8.12699 28.641 8.64925 28.5725C9.19759 28.4996 9.69342 28.2808 10.2126 28.0052C10.3994 27.9003 10.6099 27.8446 10.8241 27.8433C11.0384 27.842 11.2495 27.8952 11.4376 27.9979C11.6215 28.1089 11.774 28.2652 11.8804 28.4518C11.9869 28.6384 12.0438 28.8491 12.0457 29.0639C12.0676 29.6502 12.1245 30.1898 12.3374 30.7002C12.5388 31.1869 12.834 31.6292 13.2064 32.0018C13.5787 32.3744 14.0208 32.6699 14.5074 32.8717C14.9303 33.0467 15.3678 33.1152 15.8301 33.1458C16.2734 33.1764 16.8145 33.1764 17.4634 33.1764H17.5363C18.1853 33.1764 18.7263 33.1764 19.1697 33.1473C19.6334 33.1152 20.0695 33.0467 20.4924 32.8702C20.9791 32.6688 21.4214 32.3735 21.794 32.0012C22.1665 31.6289 22.4621 31.1868 22.6638 30.7002C22.8753 30.1898 22.9322 29.6502 22.9555 29.0639C22.9576 28.8493 23.0142 28.6387 23.1201 28.452C23.226 28.2652 23.3776 28.1085 23.5607 27.9964C23.7491 27.8938 23.9605 27.8408 24.1751 27.8424C24.3896 27.8439 24.6002 27.8999 24.7872 28.0052C25.3063 28.2794 25.8022 28.4996 26.3505 28.571C27.4049 28.7101 28.4713 28.4248 29.3153 27.7777C29.6799 27.4977 29.957 27.1535 30.2151 26.77C30.463 26.3996 30.7343 25.9314 31.058 25.37L31.0945 25.3058C31.4197 24.7444 31.6895 24.2762 31.8849 23.8766C32.0891 23.4596 32.2495 23.0469 32.3078 22.5933C32.4469 21.539 32.1616 20.4725 31.5145 19.6285C31.1776 19.1896 30.7386 18.8702 30.2428 18.5581C30.0579 18.4488 29.9039 18.2943 29.7952 18.1091C29.6866 17.9239 29.6268 17.714 29.6216 17.4994C29.6216 17.0939 29.8432 16.6914 30.2428 16.4406C30.7386 16.1285 31.1761 15.8091 31.5145 15.3702C31.8351 14.9524 32.0704 14.4755 32.2067 13.9668C32.3431 13.4581 32.3779 12.9276 32.3093 12.4054C32.2399 11.9573 32.097 11.5237 31.8863 11.1221C31.6374 10.6375 31.3733 10.1609 31.0945 9.69289L31.058 9.62873C30.7916 9.15344 30.5105 8.68655 30.2151 8.22873C29.9726 7.84609 29.6686 7.5061 29.3153 7.22248C28.8976 6.90156 28.4208 6.66606 27.9121 6.52944C27.4034 6.39282 26.8728 6.35775 26.3505 6.42623C25.8022 6.49914 25.3063 6.71789 24.7872 6.99352C24.6003 7.09831 24.3899 7.15394 24.1756 7.15522C23.9614 7.15649 23.7503 7.10337 23.5622 7.00081C23.3787 6.88927 23.2267 6.73291 23.1203 6.54642C23.0139 6.35993 22.9567 6.14945 22.954 5.93477C22.9322 5.34852 22.8753 4.80893 22.6624 4.29852C22.461 3.8118 22.1657 3.36952 21.7934 2.99693C21.421 2.62435 20.979 2.32876 20.4924 2.12706C20.0695 1.95206 19.632 1.88352 19.1697 1.85289C18.7263 1.82227 18.1853 1.82227 17.5363 1.82227H17.4634ZM15.3445 4.14831C15.4568 4.10164 15.6274 4.05935 15.9788 4.03456C16.339 4.00977 16.8057 4.00977 17.4999 4.00977C18.194 4.00977 18.6607 4.00977 19.0209 4.03456C19.3724 4.05935 19.543 4.10164 19.6553 4.14831C20.103 4.33352 20.4574 4.68789 20.6426 5.1356C20.7009 5.2756 20.749 5.49581 20.768 6.01643C20.8118 7.17143 21.4082 8.28414 22.467 8.89518C23.5257 9.50768 24.7872 9.46685 25.8095 8.92727C26.2703 8.68373 26.4847 8.61518 26.6363 8.59623C27.1155 8.53291 27.6002 8.66248 27.9838 8.95644C28.0801 9.03081 28.2026 9.15768 28.3995 9.44935C28.6022 9.74977 28.8355 10.1537 29.1826 10.7546C29.5297 11.3554 29.7616 11.7608 29.9205 12.0846C30.0766 12.401 30.1247 12.5702 30.1393 12.6912C30.2026 13.1704 30.073 13.6551 29.7791 14.0387C29.6857 14.1598 29.5195 14.3114 29.0791 14.5885C28.0991 15.2039 27.4341 16.2773 27.4341 17.4994C27.4341 18.7214 28.0991 19.7948 29.0791 20.4102C29.5195 20.6873 29.6857 20.8389 29.7791 20.96C30.0736 21.3435 30.202 21.8277 30.1393 22.3075C30.1247 22.4285 30.0751 22.5991 29.9205 22.9141C29.7616 23.2394 29.5297 23.6433 29.1826 24.2441C28.8355 24.845 28.6007 25.2489 28.3995 25.5494C28.2026 25.841 28.0801 25.9679 27.9838 26.0423C27.6002 26.3362 27.1155 26.4658 26.6363 26.4025C26.4847 26.3835 26.2718 26.315 25.8095 26.0714C24.7886 25.5319 23.5257 25.491 22.467 26.1021C21.4082 26.7146 20.8118 27.8273 20.768 28.9823C20.749 29.5029 20.7009 29.7231 20.6426 29.8631C20.551 30.0845 20.4166 30.2856 20.2472 30.455C20.0778 30.6244 19.8767 30.7588 19.6553 30.8504C19.543 30.8971 19.3724 30.9394 19.0209 30.9642C18.6607 30.9889 18.194 30.9889 17.4999 30.9889C16.8057 30.9889 16.339 30.9889 15.9788 30.9642C15.6274 30.9394 15.4568 30.8971 15.3445 30.8504C15.1231 30.7588 14.922 30.6244 14.7525 30.455C14.5831 30.2856 14.4488 30.0845 14.3572 29.8631C14.2988 29.7231 14.2507 29.5029 14.2318 28.9823C14.188 27.8273 13.5915 26.7146 12.5328 26.1035C11.474 25.491 10.2126 25.5319 9.19029 26.0714C8.72946 26.315 8.51509 26.3835 8.36342 26.4025C7.88426 26.4658 7.39957 26.3362 7.01592 26.0423C6.91967 25.9679 6.79717 25.841 6.60029 25.5494C6.326 25.1224 6.06483 24.6871 5.81717 24.2441C5.47008 23.6433 5.23821 23.2379 5.07925 22.9141C4.92321 22.5977 4.87508 22.4285 4.8605 22.3075C4.79719 21.8283 4.92675 21.3436 5.22071 20.96C5.31404 20.8389 5.48029 20.6873 5.92071 20.4102C6.90071 19.7948 7.56571 18.7214 7.56571 17.4994C7.56571 16.2773 6.90071 15.2039 5.92071 14.5885C5.48029 14.3114 5.31404 14.1598 5.22071 14.0387C4.92675 13.6551 4.79719 13.1704 4.8605 12.6912C4.87508 12.5702 4.92467 12.3996 5.07925 12.0846C5.23821 11.7594 5.47008 11.3554 5.81717 10.7546C6.16425 10.1537 6.39904 9.74977 6.60029 9.44935C6.79717 9.15768 6.91967 9.03081 7.01592 8.95644C7.39957 8.66248 7.88426 8.53291 8.36342 8.59623C8.51509 8.61518 8.728 8.68373 9.19029 8.92727C10.2111 9.46685 11.474 9.50768 12.5328 8.89518C13.5915 8.28414 14.188 7.17143 14.2318 6.01643C14.2507 5.49581 14.2988 5.2756 14.3572 5.1356C14.5424 4.68789 14.8968 4.33352 15.3445 4.14831Z"
                />
              </svg>
              setting
            </NavLink>
            {currentPath === "/profile/setting" && (
              <span className="0.125rem inline-block absolute h-[0.125rem] w-full top-full  left-0 bg-primary-default"></span>
            )}
          </li>
        </ul>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
export default SharedLayout;
