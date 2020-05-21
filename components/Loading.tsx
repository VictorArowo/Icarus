import Spinner from "./Spinner";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 opacity-50">
      <Spinner fill="#ffffff" size={40} />
    </div>
  );
};

export default Loading;
