import { Cancel } from "@mui/icons-material";
import { useDataImportContext } from "../../context/DataImportContext";
import { SpinnerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { customFetch } from "../../utils";
import { toast } from "react-toastify";

const AddCategoryForm = ({ requestConfig, fetchData }) => {
  const { closeCreateCategory, isCreateShipment } = useDataImportContext();
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCouponSubmit = async (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    setLoading(true);
    try {
      await customFetch.post(
        "/categories/add",
        { name: inputValue },
        requestConfig
      );
      setInputValue("");
      toast.success("Shipment Created");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    fetchData();
    closeCreateCategory();
  };

  return (
    <div
      className={`fixed z-30 top-0 left-0 ${
        isCreateShipment ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={closeCreateCategory}
        className={`bg-black/40 backdrop-blur-[1px] transition  h-screen w-screen ${
          isCreateShipment ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
      <div
        className={`max-w-[40rem] w-full  h-[16rem] rounded-md fixed top-1/2 left-1/2
         transform 
        transition-all duration-300 
        -translate-x-1/2   bg-white  ${
          isCreateShipment
            ? "opacity-100 visible -translate-y-1/2"
            : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center py-5 border-b border-b-primary-default justify-between px-6 gap-x-7">
          <span>&nbsp;</span>
          <h1 className="capitalize text-xl text-primary-default">
            Create Category
          </h1>
          <button onClick={closeCreateCategory}>
            <Cancel />
          </button>
        </div>
        <form onSubmit={handleCouponSubmit} className="sm:px-12 px-5 py-5 mt-5">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter Category type"
            className="outline-none rounded-md p-1  w-full border border-primary-default"
          />
          <button
            disabled={loading}
            type="submit"
            className="w-40 mt-11 hover:scale-105 transition-all  grid place-items-center rounded-md mx-auto py-2 px-2 bg-primary-default text-white text-xl"
          >
            {loading ? (
              <span>
                <SpinnerIcon className="animate-spin" />{" "}
              </span>
            ) : (
              "Create"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddCategoryForm;
