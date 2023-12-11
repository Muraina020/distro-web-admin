import { twMerge } from "tailwind-merge";

const Wrapper = ({ children, className, ...Props }) => {
  const merge = twMerge("rounded-[1.25rem] min-h-[80vh] bg-white", className);

  return (
    <div className={merge} {...Props}>
      {children}
    </div>
  );
};
export default Wrapper;
