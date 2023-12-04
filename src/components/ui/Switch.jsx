const Switch = ({ isDefaultCheck }) => {
  return (
    <label className="min-w-[2.2rem]  relative cursor-pointer h-[1.2rem] rounded-full bg-white">
      <input
        type="checkbox"
        className="opacity-0 peer cursor-pointer"
        defaultChecked={isDefaultCheck}
      />
      <span className="absolute inline-block w-full h-full transition left-0 top-0 border   border-[#D9D9D9] peer-checked:border-[#63BB82]  rounded-full"></span>
      <span className="inline-block top-1/2 left-[0.2rem] border peer-checked:border-[#63BB82] border-[#D9D9D9] peer-checked:bg-primary-default peer-checked:left-[1.1rem]  transition-all duration-500 ease-in-out -translate-y-1/2 h-[.9rem] absolute w-[.9rem] rounded-full bg-[#D9D9D9]"></span>
    </label>
  );
};
export default Switch;
