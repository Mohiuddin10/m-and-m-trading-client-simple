import { RiseLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex mx-20 justify-center items-center min-h-[calc(100vh-116px)]">
      <RiseLoader size={100} color="#309898"></RiseLoader>
    </div>
  );
};

export default Loader;
