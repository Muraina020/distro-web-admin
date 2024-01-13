import CheckBox from "../ui/CheckBox";
import { CiTrash } from "react-icons/ci";

const SingelDataImport = ({ category }) => {
  return (
    <li key={category.id} className="flex items-center w-56 gap-x-4">
      <CheckBox isDefaultChecked={true} id={category?.name} />

      <label htmlFor={category?.name} className="text-[0.8125rem]">
        {category?.name}
      </label>

      <button className="ms-auto">
        <CiTrash />
      </button>
    </li>
  );
};
export default SingelDataImport;
