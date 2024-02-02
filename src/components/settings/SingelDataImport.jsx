import { toast } from "react-toastify";
import { customFetch } from "../../utils";
import CheckBox from "../ui/CheckBox";
import { CiTrash } from "react-icons/ci";

const SingelDataImport = ({ category, requestConfig, fetchData }) => {
  const deleteShipment = async (id) => {
    try {
      await customFetch(`/categories/delete/${id}`, requestConfig);
      toast.error("Deleted");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li key={category.id} className="flex items-center w-56 gap-x-4">
      <CheckBox isDefaultChecked={true} id={category?.name} />

      <label htmlFor={category?.name} className="text-[0.8125rem]">
        {category?.name}
      </label>

      <button onClick={() => deleteShipment(category.id)} className="ms-auto">
        <CiTrash />
      </button>
    </li>
  );
};
export default SingelDataImport;
