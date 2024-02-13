import { SpinnerIcon } from "@chakra-ui/icons";
import { Cancel } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const CreateCoupons = ({
  isCreateCouponOpen,
  closeCreateCoupon,
  handleCouponSubmit,
  handleChange,
  InputValues,
  loading,
  editingCoupon,
}) => {
  return (
    <div
      className={`fixed z-30 top-0 left-0 ${
        isCreateCouponOpen ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={closeCreateCoupon}
        className={`bg-black/40 backdrop-blur-[1px] transition  h-screen w-screen ${
          isCreateCouponOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      <div
        className={`max-w-[40rem] w-full overflow-y-scroll   h-[26rem] rounded-md fixed top-1/2 left-1/2
         transform 
        transition-all duration-300 
        -translate-x-1/2   bg-white  ${
          isCreateCouponOpen
            ? "opacity-100 visible -translate-y-1/2"
            : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center py-5 border-b border-b-primary-default justify-between px-6 gap-x-7">
          <span>&nbsp;</span>
          <h1 className="capitalize text-xl text-primary-default">
            {editingCoupon ? "Edit Coupon Code" : "Create Coupon Code"}
          </h1>
          <button onClick={closeCreateCoupon}>
            <Cancel />
          </button>
        </div>

        <form onSubmit={handleCouponSubmit} className="md:px-12 px-3 py-5">
          <article className=" grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-8">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="StartDate" className="text-lg ">
                Start Date
              </label>
              <input
                type="date"
                id="StartDate"
                value={InputValues.startDate}
                name="startDate"
                onChange={handleChange}
                className="outline-none rounded-md p-1 border border-primary-default"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="EndDate" className="text-lg ">
                End Date
              </label>
              <input
                type="date"
                id="EndDate"
                value={InputValues.endDate}
                name="endDate"
                onChange={handleChange}
                className="outline-none rounded-md p-1 border border-primary-default"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="CodeLimit" className="text-lg ">
                Code Limit
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="CodeLimit"
                  value={InputValues.userLimit}
                  name="userLimit"
                  onChange={handleChange}
                  className="outline-none w-full rounded-md p-1 border border-primary-default"
                />
                <span className="text-primary-default absolute right-5 top-1/2 -translate-y-1/2">
                  Users
                </span>
              </div>
            </div>
            <div className="flex flex-col  gap-y-2">
              <label htmlFor="DiscountValue" className="text-lg ">
                Discount Value
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="DiscountValue"
                  value={InputValues.discountValue}
                  name="discountValue"
                  onChange={handleChange}
                  max={100}
                  min={1}
                  className="outline-none w-full pr-7 rounded-md p-1 border border-primary-default"
                />
                <span className="text-primary-default absolute right-5 top-1/2 -translate-y-1/2">
                  %
                </span>
              </div>
            </div>
          </article>

          <button
            disabled={loading}
            type="submit"
            className="w-40 sm:mt-16 mt-9 hover:scale-105 transition-all  grid place-items-center rounded-md mx-auto py-2 px-2 bg-primary-default text-white text-xl"
          >
            {loading ? (
              <span>
                <SpinnerIcon className="animate-spin" />{" "}
              </span>
            ) : (
              "Done"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateCoupons;
