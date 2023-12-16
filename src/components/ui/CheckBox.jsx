const CheckBox = ({ id, isDefaultChecked }) => {
  return (
    <label className="relative w-[1rem] h-[1rem]">
      <input
        type="checkbox"
        id={id}
        className="appearance-none peer"
        defaultChecked={isDefaultChecked}
      />
      <span className="border border-[#D0D5DD] inline-block rounded-full  peer-checked:hidden  w-[1rem] h-[1rem] 0.29131rem" />
      <svg
        className=" scale-0 peer-checked:block peer-checked:scale-100 transition-all duration-300  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <rect
          x="0.388451"
          y="0.388451"
          width="14.7612"
          height="14.7612"
          rx="7.38058"
          fill="#F9FAFB"
        />
        <rect
          x="0.388451"
          y="0.388451"
          width="14.7612"
          height="14.7612"
          rx="7.38058"
          stroke="#009F7F"
          strokeWidth="0.776903"
        />
        <circle cx="7.76874" cy="7.76972" r="3.10761" fill="#009F7F" />
      </svg>
    </label>
  );
};
export default CheckBox;
