import Wrapper from "./Wrapper";

const Loading = () => {
  return (
    <Wrapper className={"grid place-items-center"}>
      <span className="loading loading-dots bg-primary-default text-primary-default loading-lg"></span>
    </Wrapper>
  );
};
export default Loading;
