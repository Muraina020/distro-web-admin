import { cn } from "../../utils";

const SkeletonLoader = ({ className, ...props }) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-300", className)}
      {...props}
    />
  );
};

export default SkeletonLoader;
