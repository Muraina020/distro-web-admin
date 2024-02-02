import { useEffect, useState } from "react";
import { customFetch } from "../../utils";
import { useAuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "../ui/SkeletonLoader";
import CreateCoupons from "./CreateCoupons";
import { toast } from "react-toastify";
import { CiTrash } from "react-icons/ci";
import { ModeEdit } from "@mui/icons-material";

const DataCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [isCreateCouponOpen, setIsCreateCouponOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { admin } = useAuthContext();
  const navigate = useNavigate();
  const [editingCoupon, setEditingCoupon] = useState(null);

  const [InputValues, setInputValues] = useState({
    discountValue: 0,
    endDate: "",
    startDate: "",
    userLimit: 0,
  });

  const requestConfig = {
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  };

  const deleteCoupon = async (couponId) => {
    try {
      const response = await customFetch(`/coupons/delete/${couponId}`, {
        headers: {
          Authorization: `Bearer ${admin.accessToken}`,
        },
      });
      toast.error("Coupon deleted");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCouponSubmit = async (e) => {
    e.preventDefault();
    const { discountValue, endDate, startDate, userLimit } = InputValues;

    if (
      discountValue === 0 ||
      endDate === "" ||
      startDate === "" ||
      userLimit === ""
    ) {
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      toast.error("End date must be after start date");
      return;
    }

    if (discountValue > 100) {
      toast.error("Discount must be between 0 and 10");
      return;
    }

    const formattedStartDate = new Date(startDate).toISOString();
    const formattedEndDate = new Date(endDate).toISOString();

    setLoading(true);

    if (editingCoupon) {
      const editData = {
        ...editingCoupon,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        discountValue,
        userLimit,
        couponStatus: editingCoupon.couponStatus,
      };

      try {
        const response = await customFetch.put(
          `/coupons/edit/${editingCoupon.id}`,
          editData,
          requestConfig
        );
        console.log(response);

        const editedCoupon = coupons.map((coupon) => {
          return editingCoupon.id === coupon.id ? editData : coupon;
        });
        setCoupons(editedCoupon);
        toast.success("Coupon updated successfully");
        fetchData();
        closeCreateCoupon();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

      return;
    }

    try {
      const reponse = await customFetch.post(
        "/coupons/add",
        {
          ...InputValues,
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        },
        requestConfig
      );
      toast.success("Coupon created successfully");
      closeCreateCoupon();
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
    fetchData();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInputValues(() => {
      return { ...InputValues, [name]: value };
    });
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await customFetch("/coupons", requestConfig);
      setCoupons(response.data.reverse());
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        navigate("/");
      }
    } finally {
      setLoading(false);
    }
  };

  const closeCreateCoupon = () => {
    setIsCreateCouponOpen(false);
    setInputValues({
      discountValue: 0,
      endDate: "",
      startDate: "",
      userLimit: 0,
    });
    setEditingCoupon(null);
  };

  const openCouponForm = () => {
    setIsCreateCouponOpen(true);
  };

  const editCoupons = async (coupon) => {
    setEditingCoupon(coupon);
    openCouponForm();
    setInputValues({
      discountValue: coupon.discountValue,
      endDate: coupon.endDate,
      startDate: coupon.startDate,
      userLimit: coupon.userLimit,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <ul className="space-y-5 px-1 mt-3">
        <li className="flex items-center gap-x-4">
          <SkeletonLoader className={"w-4 bg-neutral-300 h-4 rounded-full"} />
          <SkeletonLoader className={"h-4 bg-neutral-300 w-[20rem]"} />
        </li>
        <li className="flex items-center gap-x-4">
          <SkeletonLoader className={"w-4 bg-neutral-300 h-4 rounded-full"} />
          <SkeletonLoader className={"h-4 bg-neutral-300 w-[20rem]"} />
        </li>
        <li className="flex items-center gap-x-4">
          <SkeletonLoader className={"w-4 bg-neutral-300 h-4 rounded-full"} />
          <SkeletonLoader className={"h-4 bg-neutral-300 w-[20rem]"} />
        </li>
        <li className="flex items-center gap-x-4">
          <SkeletonLoader className={"w-4 bg-neutral-300 h-4 rounded-full"} />
          <SkeletonLoader className={"h-4 bg-neutral-300 w-[20rem]"} />
        </li>
        <li className="flex items-center gap-x-4">
          <SkeletonLoader className={"w-4 bg-neutral-300 h-4 rounded-full"} />
          <SkeletonLoader className={"h-4 bg-neutral-300 w-[20rem]"} />
        </li>
        <li className="flex items-center gap-x-4">
          <SkeletonLoader className={"w-4 bg-neutral-300 h-4 rounded-full"} />
          <SkeletonLoader className={"h-4 bg-neutral-300 w-[20rem]"} />
        </li>
        <li className="flex items-center gap-x-4">
          <SkeletonLoader className={"w-4 bg-neutral-300 h-4 rounded-full"} />
          <SkeletonLoader className={"h-4 bg-neutral-300 w-[20rem]"} />
        </li>
        <li className="flex items-center gap-x-4">
          <SkeletonLoader className={"w-4 bg-neutral-300 h-4 rounded-full"} />
          <SkeletonLoader className={"h-4 bg-neutral-300 w-[20rem]"} />
        </li>
        <li className="flex items-center gap-x-4">
          <SkeletonLoader className={"w-4 bg-neutral-300 h-4 rounded-full"} />
          <SkeletonLoader className={"h-4 bg-neutral-300 w-[20rem]"} />
        </li>
      </ul>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="md:text-[1.3125rem] text-base font-medium text-primary-black">
          {" "}
          Discounts & Promo Code Management
        </h2>

        <button
          onClick={openCouponForm}
          className="text-primary-default md:text-[1.125rem] text-base border-b border-primary-default"
        >
          create
        </button>
      </div>
      <table className=" table mt-2 space-y-4">
        <tbody>
          {coupons.map((coupon) => {
            return (
              <tr
                key={coupon.id}
                className="text-[0.9rem]  text-primary-default"
              >
                <td>{coupon?.couponCode}</td>
                <td>
                  {coupon?.startDate} - {coupon?.endDate}
                </td>
                <td>{coupon?.userLimit} Users</td>
                <td>{coupon?.discountValue}% Dicount</td>
                <td>
                  <button
                    onClick={() => editCoupons(coupon)}
                    className="hover:scale-110 transition-all"
                  >
                    <ModeEdit />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deleteCoupon(coupon?.id)}
                    className="hover:text-red-500"
                  >
                    <CiTrash />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <CreateCoupons
        isCreateCouponOpen={isCreateCouponOpen}
        closeCreateCoupon={closeCreateCoupon}
        handleCouponSubmit={handleCouponSubmit}
        handleChange={handleChange}
        InputValues={InputValues}
        loading={loading}
        editingCoupon={editingCoupon}
      />
    </>
  );
};
export default DataCoupons;
