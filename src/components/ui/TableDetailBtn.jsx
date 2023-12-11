const TableDetailBtn = ({ children }) => {
  return (
    <button className="rounded-[0.625rem]  lg:px-[1.6875rem] px-[1rem] py-[0.6875rem] lg:text-[1.5625rem] text-[1rem] bg-primary-default text-white transition active:scale-95 hover:bg-primary-default/70">
      {children}
    </button>
  );
};

export default TableDetailBtn;
