const TableDetailBtn = ({ children }) => {
  return (
    <button className="rounded-[0.625rem]  px-[1.6875rem] py-[0.6875rem] text-[1.5625rem] bg-primary-default text-white transition active:scale-95 hover:bg-primary-default/70">
      {children}
    </button>
  );
};

export default TableDetailBtn;
